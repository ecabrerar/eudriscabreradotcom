title=Resumen de Desarrollar una Applicación que Soporte Alta Concurrencia
date=2024-02-10
type=post
tags=Java, JUG Events, Latam
status=published
author=Eudris Cabrera
description=Resumen de Desarrollar una Applicación que Soporte Alta Concurrencia 
shareimage=images/blog/2024/9d05f6e4-48f8-4be2-845b-e86b39471310.001.jpeg
summary=Luego de un diciembre super activo generando contenido para la iniciativa del Calendario de Adviento (https://github.com/JavaDominicano/jvm-advent) de la comunidad Java de República Dominicana, enero fue un mes muy pasivo. Tratando de romper la inercia esta será mi primera publicación del año y vamos a resumir la charla realizada por Carlos Camacho (https://twitter.com/ccamachog) en JConf Dominicana 2023 y luego en una sesión de JDK Fundamental Talks, El camino de desarrollar una aplicación de alta concurrencia y no morir en el intento.
~~~~~~

Una de las sesiones más comentadas y de las mejor valoradas en [JConf Dominicana 2023](https://jconfdominicana.org/past-conferences.html) fue la charla **El camino de desarrollar una aplicación de alta concurrencia y no morir en el intento realizada** por [Carlos Camacho](https://twitter.com/ccamachog). 

Un mes después la charla fue realizada en una sesión de JDK Fundamental Talks, donde también tuvo muy buena aceptación.

Carlos Camacho es Ingeniero Telemático, [Profesor Universitario en la Pontificia Universidad Católica Madre y Maestra (PUCMM)](https://www.pucmm.edu.do), Actualmente Director de la [Escuela en Computación y Telecomunicaciones](https://eict.pucmm.edu.do). Co-fundador y organizador del Java User Group en República Dominicana, conocido como [Java Dominicano](https://site.javadominicano.org), Miembro de La Fundación Código Libre Dominicano. Co-Organizador del primer evento dedicado a la plataforma Java en República Dominicana, [JConf Dominicana](https://jconfdominicana.org). Co-organizador del [Barcamp RD](https://barcamp.org.do), evento exclusivo para presentar temas relacionados a tecnologías que se celebra ininterrumpidamente desde 2013.

Además de las funciones ya mencionadas, Carlos también es director de tecnologías en la empresa [AvatharTech](https://avathartech.com), dedicada al desarrollo y consultoría de aplicaciones para los sectores productivos del país.

[AvatharTech](https://avathartech.com) recibió una solicitud por parte de un cliente para desarrollar una aplicación para el envío masivo de mensajes y procesar sus respuestas.

Entre los requerimientos iniciales se encuentran los siguientes:

- La meta es enviar más de un 1MM de mensajes.
- Cada mensaje enviado, provoca que los servicios externos utilizados envíen un máximo de 3 llamadas adicionales como respuesta.
- Sumando los requerimientos típicos de gestión (usuario, seguridad, reportes, etc).

**Y con un tiempo de entrega muy agresivo, todo debía estar listo en un mes. Así como está leyendo un ¡Mes!**

Luego de completar el proceso de análisis y diseño, decidieron seleccionar un stack de tecnologías conocido por el equipo de desarrollo: [Spring Boot](https://spring.io), [Vaadin](https://vaadin.com), [Spring Batch](https://spring.io/projects/spring-batch), [Mysql](https://www.mysql.com) y Servicios REST.

![](/images/blog/2024/9d05f6e4-48f8-4be2-845b-e86b39471310.001.jpeg)

El proceso de desarrollo, pruebas y aceptación del cliente fue completado exitosamente y en el tiempo establecido.

**Las sorpresas empezaron a aparecer al momento que salieron a producción**

> ## ¡El sistema no aguantaba los niveles de peticiones!

La aplicación desarrollada se encarga de enviar mensajes publicitarios a miles de clientes a canales seleccionados (SMS, Correo, Mensajes Instantáneos, entre otros), sin importar el canal, por cada mensaje enviado reciben tres peticiones a modo de callback a su sistema, brindando la capacidad de trazabilidad de cada mensaje enviado.

Cuando enviaban 10,000 mensajes,  recibían 30,000 mensajes en su servidor, provocando que cada mensaje genere un flujo de procesos internos que consumen recursos del servidor, **el problema no es procesar un mensaje, el problema radica en la cantidad de mensajes recurrentes.**

![](/images/blog/2024/9d05f6e4-48f8-4be2-845b-e86b39471310.002.jpeg)

### Analisis del Problema

- La programación de los mensajes funcionaba sin inconvenientes, le dejamos la gestión a Spring Batch. Pero cada mensaje enviado y recibido, requería la actualización del registro.
- El controlador de la aplicación de gestión y la de envío, no completaron el proceso de actualización en el tiempo requerido, por el proceso transaccional y validación de las reglas de negocios.
- Al no responder a tiempo, en menos de 2s, el servicio externo por su llamada Webhook, recibiamos otra petición de confirmación saturando aún más el sistema.
- **Enviar 10k mensajes estaba demorando 33 minutos.**


**El principal problema a trabajar fue reducir la carga transaccional de los mensajes recibidos.**

> **La omisión de algunos detalles en el diseño inicial, obligó a implementar cambios sobre la marcha para preparar nuestra aplicación a ese volumen de peticiones.**
>
>> ### *Rediseñar sobre la marcha, fue su peor pesadilla....*


### Solución

- Se discutió implementar un sistema de cola en la base de datos o utilizando [In-memory DataGrip (IMDG)](https://es.wikipedia.org/wiki/Base_de_datos_en_memoria).
- Descartaron el primero, dado que su objetivo era no cargar la base de datos.
- De las diferentes soluciones del mercado en [IMDG](https://es.wikipedia.org/wiki/Base_de_datos_en_memoria), optaron por [Redis](https://redis.io).
- La recepción de los mensajes vía Webhook fueron separadas por otra aplicación para no sobrecargar la aplicación de gestión de la vista.
- Redis sirve de buffer para mantener en memorias las tramas y luego procesadas por la aplicación.
- Por una tarea programada (Spring Boot Scheduled) procesamos la información en función a la capacidad del servidor.
- Construir una aplicación para simular la librería externa con la carga recibida.

![](/images/blog/2024/9d05f6e4-48f8-4be2-845b-e86b39471310.003.jpeg)

**Luego de hacer el rediseño de la aplicación, el cambio fue muy notable. Los mismos 10k mensajes ahora demoran 8 minutos.**

![](/images/blog/2024/9d05f6e4-48f8-4be2-845b-e86b39471310.004.jpeg)

Otro cambio aplicado fue la sustitución de Spring Boot Scheduled por Streams de Redis. Este cambio permite procesar los mensajes en función a los recibidos, pero controlando el ritmo.

Cada vez que reciben un mensaje el sistema de stream funciona como un patrón de subscripción/observador notificando los mensajes y son procesados de forma transaccional.

### Conclusiones

- Subestimaron la cantidad de peticiones recibidas y el tiempo de procesamiento de la información.
- Es muy importante realizar pruebas de estrés, estas nos permiten conocer el comportamiento de la aplicación antes de producción. 
- Estimar mejor los tiempos en el desarrollo, negociar la fecha de entrega de la aplicación.
- Desde el principio sabían que la implementación que debían utilizar era un esquema de cola de mensajería, por tiempo no fue implementada desde el principio.

Ver sesión completa en Youtube:

<iframe width="560" height="315" src="https://www.youtube.com/embed/mxvHeU6OETc?si=jkWfcqxqhDruM-pq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


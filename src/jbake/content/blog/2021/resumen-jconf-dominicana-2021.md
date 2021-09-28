title=Resumen JConf Dominicana 2021
date=2021-09-28
type=post
tags=Java, Jconf Dominicana, Conferencias, Latam
status=published
author=Eudris Cabrera
description=Resumen JConf Dominicana 2021    
summary=El sábado 31 de Julio del 2021 se celebró JConf Dominicana 2021. Debido a la pandemia de covid-19 se realizó en modalidad virtual.En esta publicación vamos a resumir los aspectos más destacados de JConf Dominicana 2021.
~~~~~~


El sábado 31 de Julio del 2021 se celebró [JConf Dominicana 2021](https://jconfdominicana.org). Debido a la pandemia de covid-19 se realizó en modalidad virtual.


![](/images/blog/2021/72feebe9-b956-4565-b5da-5624eeac7ae0.001.jpeg)

**Sobre la Organización**

JConf Dominicana es una conferencia sobre tecnologías Java, también denominada la conferencia de tecnologías Java del caribe. El objetivo de esta conferencia es traer contenido de calidad con conferencistas nacionales e internacionales que inspiren a nuestros estudiantes y comunidades de desarrolladores. Integrando además, diferentes niveles de conocimiento, desde básico hasta avanzado, para lograr crear un evento inclusivo.

La comunidad de usuarios y desarrolladores Java de República Dominicana (Aka [Java Dominicano](https://twitter.com/javadominicano)) es el organizador de JConf Dominicana.

Este año el objetivo principal era impulsar la comunidad, un evento organizado por la comunidad para la comunidad. La mayoría de los charlistas eran miembros de la comunidad o residentes en el país. Todo el evento se organizó en menos de 2 meses.



**Resumen de Registro y Asistencia**

![](/images/blog/2021/72feebe9-b956-4565-b5da-5624eeac7ae0.002.jpeg)

**Puntos Destacados**

**Novedades entre las versiones Java 8 y Java 16 y futuro de Java**

El keynote del evento estuvo enfocado en presentar las novedades de Java entre la versión Java 8 y Java 16 y las nuevas funcionalidades que vendrán en las próximas versiones.

Enlaces de Interés:

- <https://ondro.inginea.eu/index.php/new-features-in-java-versions-since-java-8/>
- <https://javaalmanac.io/>


**Implementando programación reactiva de forma fácil con Mutiny**

La programación reactiva es un paradigma enfocado en el trabajo con flujos de datos finitos o infinitos de manera asíncrona. Su concepción y evolución ha ido ligada a la publicación del Reactive Manifesto https://www.reactivemanifesto.org

Mutiny es una nueva librería de programación reactiva. Proporciona un modelo de desarrollo asincrónico simple pero potente que permite crear aplicaciones reactivas sin que el desarrollador tenga que tener conocimiento muy avanzado.

Más detalles en: <https://smallrye.io/smallrye-mutiny/pages/philosophy>

[GraalVM](https://www.graalvm.org)**, la máquina virtual políglota, que pueden beneficiar a su organización hoy.**

GraalVM ofrece ventajas de uso en diferentes escenarios que pueden beneficiar a tu organización y proyectos de software.

Desde acelerar sus aplicaciones hasta usar múltiples lenguajes de programación en el mismo proyecto, lenguajes nativos sobre la JVM y mucho más.

**gRPC(Remote Procedure Calls) en aplicaciones Java**

[gRPC](https://grpc.io) es un mecanismo de transporte para caso de uso de petición/respuesta y flujo de datos. Puede ejecutarse en casi cualquier entorno con enlaces a muchos lenguajes de programación.

Puede conectar servicios de manera eficiente en y entre centros de datos con soporte para balanceo de carga, rastreo, verificación de estado y autenticación. También es aplicable para la computación distribuida, para conectar dispositivos, aplicaciones móviles y navegadores a servicios de backend.

Tiene varias ventajas:

- Utiliza un protocolo binario y ligero para las comunicaciones entre los procesos o servicios. (Protocol Buffer).
- Trabaja primero con la definición de los mensajes y los servicios para luego realizar su implementación. SOAP y REST su enfoque es contrario.
- Contrato de interfaz basado en tipado fuerte evitando los errores de ejecución.
- Diseñado para ser agnóstico al lenguaje, gracias al Protocol Buffer.
- Soporte para flujo de datos (streaming) desde el cliente y servidor de forma nativa.
- Ofrece soporte para autenticación, cifrado, compresión, balanceo de carga, entre otras.
- Integración nativa con La Nube.


¿Dónde utilizar gRPC?

![](/images/blog/2021/72feebe9-b956-4565-b5da-5624eeac7ae0.003.png)

**Diagrama tomado del libro: https://grpc-up-and-running.github.io/**


**Las corrutinas de Kotlin, nos permiten realizar múltiples operaciones en paralelo o realizar operaciones secuenciales de manera elegante y optimizada.**

Async y Threading son palabras que a menudo asustan a los desarrolladores. En Android, tradicionalmente hemos administrado algunas de esas tareas con la ahora obsoleta AsyncTask, pero esa forma orientada a la devolución de llamadas tiene algunas limitaciones.

[Kotlin](https://kotlinlang.org) introdujo el concepto de Corrutinas, una manera elegante y muy optimizada de ejecutar nuestro código de forma asíncrona.

Una corrutina es un patrón de diseño de simultaneidad que puedes usar en Android para simplificar el código que se ejecuta de forma asíncrona. Las corrutinas se agregaron a Kotlin en la versión 1.3 y se basan en conceptos establecidos de otros lenguajes.

Más detalles en : [https://developer.android.com/kotlin/coroutines?hl=es-419](https://developer.android.com/kotlin/coroutines?hl=es-419)

**El ciclo de vida de la API deberá ser ágil para seguir siendo relevante.**

El manejo y administración de API se están generalizando, actualmente es más fácil exponer las APIs de forma segura al mundo. Sin embargo, el ciclo de desarrollo de API tiene algunos casos pendientes que resolver. Todo el ciclo de vida de la API también debería ser ágil para seguir siendo relevante.

Dos enfoques para desarrollar API fueron evaluados: **Design First** ó **Code First.**

**Code First** es un enfoque más tradicional para la creación de API, y el desarrollo del código ocurre después de que se establecen los requisitos comerciales, lo que finalmente genera la documentación a partir del código.

**Design First** aboga por diseñar el contrato de la API primero antes de escribir cualquier código.


![](/images/blog/2021/72feebe9-b956-4565-b5da-5624eeac7ae0.004.jpeg)

**Se recomienda usar Design First**

-  **Cuando la experiencia del desarrollador que implementa el API es importante.**

Una API bien diseñada puede hacer maravillas para la adopción y el consumo de sus API, y un buen diseño se puede lograr mejor con el enfoque Design First.

Si su estrategia de API implica una alta adopción de su API y la retención de usuarios que se integran con su API, entonces una buena experiencia de desarrollador (DX) es importante.

- **Si tu API es de misión crítica**

La principal razón para optar por el enfoque Design First es cuando el público objetivo de su API son clientes o socios externos.

En tal caso, su API es un canal de distribución clave que sus clientes finales pueden utilizar para consumir los servicios que brinda, y un buen diseño juega un papel clave en la determinación de la satisfacción del cliente.

- **Cuándo quieres garantizar una buena comunicación**

El contrato de API puede actuar como el borrador central que mantiene a todos los miembros de su equipo alineados con los objetivos de su API y cómo se exponen los recursos de su API.

La identificación de errores y problemas en la arquitectura de la API con su equipo se vuelve más fácil al inspeccionar un diseño legible por humanos.


**Code First es útil cuando:**

- **Cuando hay urgencia con la entrega del API**

Los desarrolladores pueden comenzar a implementar la API mucho más rápido si comienzan a codificar la API directamente desde el documento de requisitos.

Esto es importante si su estrategia de comercialización enfatiza la velocidad y la agilidad como factores importantes para el éxito del  API.

- **Al desarrollar API internas**

El enfoque Code First ofrece velocidad, automatización y complejidad de proceso reducida, a costa de una buena experiencia de desarrollador. Si la API solo será consumida por el equipo o la empresa que la está construyendo, entonces el enfoque Code First es una solución ideal.

Esto es especialmente cierto si la API desarrollada es pequeña con solo unos pocos puntos finales, que solo se usarán internamente.

Todas las sesiones están disponibles en canal de  youtube de la comunidad Java Dominicano:

[https://www.youtube.com/playlist?list=PLh4k7EswYO0SAcWATgHjspy0fUVIoNxT9](https://www.youtube.com/playlist?list=PLh4k7EswYO0SAcWATgHjspy0fUVIoNxT9)


Esperamos contar con tu asistencia en próximas versiones de JConf Dominicana.

Más información sobre este evento en [https://jconfdominicana.org/past-conferences.html](https://jconfdominicana.org/past-conferences.html)

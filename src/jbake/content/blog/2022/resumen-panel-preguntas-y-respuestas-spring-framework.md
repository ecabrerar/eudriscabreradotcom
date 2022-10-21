title=Resumen Panel de Preguntas y Respuestas sobre Spring Framework
date=2022-10-21
type=post
tags=Java,JUG, Spring, Latam, JDK, Spring Boot, Spring Framework, JRE
status=published
author=Eudris Cabrera
description=Resumen Panel de Preguntas y Respuestas sobre Spring Framework
shareimage=images/blog/2022/qa-spring-framework.jpg
summary=Spring es uno de los frameworks de desarrollo de aplicaciones más populares en Java. En esta publicación vamos a hacer un resumen sobre el conversatorio que sostuvimos con dos expertos ingenieros de software en VMWare, la compañía responsable del desarrollo de Spring Framework. Josh Long y Alberto C. Ríos conversaron sobre el presente y futuro de dicho framework.
~~~~~~
En el pasado mes de julio de 2022 se realizó un panel de Preguntas y Respuestas sobre Spring Framework con la participación de las comunidades Java de Nicaragua, Bogotá, Bolivia, Medellín, México, Mérida, Ecuador, Buenos Aires, Guadalajara y República Dominicana.

[Josh Long](https://twitter.com/starbuxman) y [Alberto C. Ríos](https://twitter.com/albertoimpl), expertos ingenieros de software en [VMWare](https://es.wikipedia.org/wiki/VMware), la compañía responsable del desarrollo de [Spring Framework](https://es.wikipedia.org/wiki/Spring_Framework) contestaron preguntas sobre las prioridades que tienen actualmente y sobre las funcionalidades que vendrán en un futuro no muy lejano.

El panel inició cuestionando sobre las ventajas de Spring respecto a otros frameworks del mercado.

Para **Alberto Rios,** la principal ventaja de usar Spring es la estabilidad, es un ecosistema que sigue innovando y adoptando nuevas tecnologías pero sin romper compatibilidad hacia atrás, esto te da la garantía de que será seguro y que siempre va a tener la compatibilidad hacia atrás.

**Josh Long** por su parte, **agregó:** Spring tiene dos décadas respondiendo a las demandas del mercado en el desarrollo de aplicaciones Java. Una característica que ha tenido Spring es que el código es muy portable, un código que hiciste en el 2001 puede correr actualmente usando los jdk actuales. La retrocompatibilidad es muy importante porque las cosas van a cambiar, pero el core de Spring es el único proyecto open source que nunca ha tenido que reescribirse (hacer un refactor grande) en 20 años. Otros proyectos como [Linux](https://es.wikipedia.org/wiki/GNU/Linux) y [Apache](https://es.wikipedia.org/wiki/Servidor_HTTP_Apache) tuvieron que romper compatibilidad hacia atrás.


Al ser cuestionados sobre el futuro de [Java](https://es.wikipedia.org/wiki/Plataforma_Java) ambos respondieron que la robustez que tenemos en Java es difícil encontrar en otros lenguajes. Java ha estado en el mercado por 27 años y no ha dejado de evolucionar.  Si te fijas en otros lenguajes cómo Javascript y Python, han tenido que agregarle tipos para poder intentar alcanzar la productividad que Java ha conseguido.

Java funciona para escenarios medianos y grandes y en los últimos años, también funciona para escenarios pequeños, entonces, tenemos un mismo lenguaje para cubrir todo el espectro de necesidades. Es muy interesante lo que estamos viendo en las [versiones más recientes](https://dev.java/) de Java.


Al comparar Spring / Spring Boot con otros frameworks **"modernos"**, el ecosistema que tenemos en Java con Spring, no es fácil de igualar.

Por ejemplo: el tema de [Spring Security](https://spring.io/projects/spring-security), ¿Cuantos lenguajes de programación tiene con el mismo lenguaje, un authorization server, una aplicación que es capaz de leer y escribir funciones de forma nativa, que también puede escribir código de seguridad que te hable con ese servicio de autorización, autenticarlo por otro sitio con una librería con cinco líneas de código?. Eso en verdad, ningún otro lenguaje lo tiene al día de hoy.

Cada uno tiene su casos de usos, diferentes tipos de empresas, utilizan otros, pero la robustez que tenemos en Java desde hace tantos años, todavía hoy no se está viendo en otros lenguajes con otros frameworks. **Respondió** Alberto.

Conversando sobre [GraalVM](https://www.graalvm.org) y [Leyden](https://openjdk.org/projects/leyden/notes/01-beginnings), Josh expresó lo siguiente: Después de 25 años, Java todavía sigue innovando, últimamente se habla mucho sobre Java e imágenes nativas, Java  domina el tema del servidor, ahora habría que ver cuales otros campos se pueden dominar. Por ejemplo, el tema de los controladores de [Kubernetes](https://es.wikipedia.org/wiki/Kubernetes) (eso es infraestructura), tiene una aplicación que la usa por poco tiempo y no requiere un tráfico constante, para eso no tiene sentido tener tu JRE(Java Runtime Environment) completo y toda la infraestructura para poder arrancar una aplicación que solamente recibe unas peticiones de vez en cuando, en ese caso concreto es más conveniente tener una imagen nativa.

Cuando haces imágenes nativas tienes que utilizar un montón de librerías pesadas que consumen muchos recursos. Las aplicaciones nativas nunca van a ser más rápidas, en cambio si actualiza el JRE tu código será más rápido porque el JRE evoluciona, el precio que tiene es que vas a consumir más RAM. Por otro lado, Leyden es un poco la tierra del medio, no llega a imagen nativa ni a JRE, digamos que es un JRE un poco más liviano. El [Proyecto Leyden](https://openjdk.org/projects/leyden/notes/01-beginnings) trabajará para mitigar los problemas de rendimiento y de inicio lento mediante la introducción de imágenes estáticas en la plataforma Java.


En Spring Boot 3 y Spring Framework 6, dentro del core no te hará falta nada para crear tu aplicación como nativa. Ahora mismo hay un proyecto experimental que es **Spring Native**, cuando se migre a Spring Boot 3  y Spring Framework 6 no hará falta porque todo estará en el core. Hay un plugin de GraalVM que te permite crear imágenes nativas de aplicaciones basadas en Spring.

Al hablar sobre los proyectos más innovadores en que está trabajando el equipo de Spring, se refirieron a Spring Boot 3 y Spring Framework 6.0. Lo primero es que serán compatibles con Jakarta EE 9, esto implica [algunos cambios](https://spring.io/blog/2022/05/24/preparing-for-spring-boot-3-0) en el código fuente de tu aplicación.

Por ejemplo: cambiar el paquete **"javax"** por **"jakarta"**. Este es un cambio importante porque rompe compatibilidad hacia atrás pero era inevitable realizar el cambio.

La ganancia que tenemos, es que esto nos permitirá agregar las últimas versiones de Hibernate y JPA. Otro cambio importante, es que las aplicaciones basadas en Spring Framework 6 y Spring Boot 3 requerirán un mínimo de JDK 17. También el tema que mencionamos anteriormente, dentro del core no te hará falta nada para crear tu aplicación como nativa.

Para Josh y Albeto, los errores más comunes en que incurren los programadores utilizando Spring son:

- El tema de los Test, todo el mundo pone @SpringBootTest.
- Querer hacer muchas cosas en tiempo de arranque.
- El uso de la anotación Autowired en todos los atributos, se debe evitar inyección de dependencia en los atributos porque tus casos de pruebas se harán más difícil.
- Querer aprenderlo todo desde un principio, al principio no es necesario saberlo todo, inicialmente trata de aprender lo básico y luego sigue profundizando a medida que tengas necesidades.

Cómo recomendación para aprender a utilizar Spring, sugieren centrarte en aprender algo en especifico, no querer aprender el ecosistema completo, porque es muy grande, en ese mismo orden recomiendan empezar con una guía de las disponibles en https://spring.io/guides.

#### Ver sesión completa en Youtube:
<iframe width="560" height="315" src="https://www.youtube.com/embed/3N9sXNjH8lA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

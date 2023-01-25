title=Resumen de Charla sobre Novedades de Spring Boot 3
date=2023-01-25
type=post
tags=Java, Spring, GraalVM, Spring Boot, Spring Framework 6, Spring Boot 3, Latam, JUG
status=published
author=Eudris Cabrera
description=Resumen de Charla sobre Novedades de Spring Boot 3
shareimage=images/blog/2023/237041cf-3aff-434f-92c2-9f575bcfc956.001.jpg
summary=Spring Boot 3 se lanzó el 24 de noviembre, con él, muchas mejoras y el tan esperado soporte para compilación nativa. En esta publicación vamos a hacer un resumen de la charla Novedades de Spring Boot 3 impartida por Abel Salgado Romero, Ingeniero de Software en VMWare en el equipo Spring Commercial. 
~~~~~~
El pasado 14 de diciembre del 2022 se realizó una charla sobre las novedades de Spring Boot 3 con la participación de las comunidades Java de Nicaragua, Bogotá, Bolivia, Medellín, México, Mérida, Ecuador, Buenos Aires, Guadalajara y República Dominicana.

La charla estuvo a cargo de [Abel Salgado Romero](https://twitter.com/abelsromero) quien es Ingeniero de Software en VMWare dentro del equipo Spring Commercial. Desde el 2020 ha trabajando para hacer de Spring Cloud Gateway una gran experiencia en Kubernetes. Defensor del código abierto, maintainer de Asciidoctor Maven Plugin y entusiasta del hardware.

Spring Boot 3 fue liberado el 24 de noviembre del 2022 y en esta sesión, Abel tuvo como objetivo aclarar las dudas a aquellos que tienen miedo de migrar a Spring Boot 3.0.

A continuación algunos aspectos destacados:

### 1. Revisar el calendario de soporte de versiones de Spring

Para empezar el viaje de migrar a Spring Boot 3, primeramente, debes conocer en qué punto se encuentran tus aplicaciones actualmente, es decir, cuáles versiones estás usando.

Es recomendable que visite el [Roadmap de Spring](https://spring.io/projects/spring-boot#support) para conocer el ciclo de vida de cada versión. También visitar el [calendario de Spring](https://calendar.spring.io/).

![](/images/blog/2023/237041cf-3aff-434f-92c2-9f575bcfc956.001.jpg)
<b>Imagen tomada de <https://spring.io/projects/spring-boot#support></b>

En la imagen podemos ver que existen dos líneas de soporte, la verde es la de soporte para open source y la amarilla es la de soporte comercial.

En la línea de soporte **open source** puedes notar las versiones que ya dejaron de tener soporte.

Por ejemplo, si estás usando la versión 2.6.x o anteriores podrás notar que su soporte finalizó y la recomendación es que como mínimo debes actualizar a una versión posterior ya que estas están fuera de soporte.

Esto significa que por parte de Spring no se agregan nuevas funcionalidades y, sobre todo, no se sacan fixes de vulnerabilidades de seguridad y esto sí que es serio, recordar [el impacto del caso log4j](https://snyk.io/blog/log4j-vulnerability-software-supply-chain-security-log4shell/).

Si estás en la versión **2.7.x** aún tienes tiempo para actualizar, hasta noviembre del 2023, pero no te descuides, porque un año pasa muy rápido.

Lo ideal es tener procesos de actualización regular, esto facilita el proceso de actualización cuando tienes que actualizar muchos proyectos.

### 2. Cosas que debes saber sobre Spring Boot 3.

Spring Boot 3.0 es una versión mayor (major), esto significa que se hicieron grandes cambios y mejoras. Estos cambios rompen compatibilidad hacia atrás.

Por ejemplo, de la versión **2.5.x** a **2.6.x** y de la **2.6.x** a **2.7.x** todo funciona sin muchos esfuerzos, pero de la **2.7.x** a la **3.0.0,** sí hay cambios que rompen compatibilidad hacia atrás.

Spring Boot, al final, es una capa maravillosa que encapsula a toda una serie de módulos de Spring y nos facilita mucho el desarrollo de aplicaciones, sobre todo cloud native que está tan en boga, pero también hay que tener en cuenta que esto incluye la nueva versión del framework, Spring framework 6, y todos los módulos que están por debajo: Spring web, Spring Security, Spring Data, Spring Cloud, entre otros.

Con Spring Boot 3, la compilación nativa en Java ya está soportada de forma oficial siempre que estemos dentro del ecosistema de Spring Boot y Spring debería funcionar.

En este enlace [Preparing for Spring Boot 3.0](https://spring.io/blog/2022/05/24/preparing-for-spring-boot-3-0) podrás tener más detalles sobre los cambios de Spring Boot 3.0.

### 3. ¿Cómo podemos empezar a migrar nuestras aplicaciones a Spring Boot 3.0?

- Como comentábamos más arriba, lo ideal es tener procesos de actualización regulares, mantener nuestras aplicaciones al día, es decir, tener la aplicación corriendo en la versión más reciente. Esto facilita el proceso de actualización cuando tienes que actualizar o dar mantenimiento a muchos proyectos.

- Una recomendación es que **las funcionalidades de tu aplicación o proyectos estén cubiertas con pruebas automatizadas**, al menos debe tener pruebas unitarias y pruebas de integración.

- **Antes de tocar código actualizar a Java 17**, asegurar que después de actualizar la versión de Java nuestro código sigue funcionando. Cuando hablamos de migrar a Java 17, estamos hablando de que también nuestros entornos deben ser actualizados. Entonces, debemos asegurar que nuestro código puede compilar y ejecutarse sobre una JVM versión Java 17.

- **Hacer una migración de versiones paso a paso**, es decir, si estás en la 2.4.x no vayas a la 3.0. Es recomendable hacer primero un paso a la **2.5.x** y comprobar que todo funciona, es posible que encuentres algún código **deprecated** que debas cambiar. No hay cambios que rompan compatibilidad entre versiones menores, pero sí se van marcando como **deprecated** algunas funcionalidades. Este proceso es iterativo, debes ir paso a paso hasta llegar a la versión **2.7.x**  y desde ahí migrar a la 3.0.  A medida que vayas haciendo cambios de versiones, es recomendable darle un vistazo a la [wiki de Spring Boot](https://github.com/spring-projects/spring-boot/wiki/), donde encontrarás información valiosa sobre los cambios de cada versión.

- **No olvides resolver las advertencias de código deprecated,** si ignoras los **deprecated** en versiones anteriores, cuando llegues a Spring Boot 3.0 tendrás que resolverlas todas para que tu proyecto funcione.

- Existe una aplicación que está en fase experimental llamada [Spring Boot Migrator](https://github.com/spring-projects-experimental/spring-boot-migrator), que busca ayudarte en la migración de tus aplicaciones basadas en Spring Boot. Al igual que otras herramientas, tiene sus limitaciones, pero es algo que puedes utilizar para ver los cambios que sugiere realizar para migrar de una versión a otra.



### 4. Cambios importantes en Spring Boot 3.0

- **Lo primero es que Spring Boot 3.0 es compatible con Jakarta EE 9, esto implica algunos cambios en el código fuente de tu aplicación.**

Debes cambiar el paquete **"javax"** por **"jakarta"**. Este es un cambio importante, porque rompe compatibilidad hacia atrás, pero era inevitable realizarlo.

![](/images/blog/2023/237041cf-3aff-434f-92c2-9f575bcfc956.002.jpg)

<b>Imagen tomada de [2022-10-25-Spring Boot 3 : ready or not? v2](https://docs.google.com/presentation/d/1LnS3bfd87rQEUb3Q-U28Ui_WdRa6svThbPqdMigFXUA/edit?usp=sharing)</b>

- **Otro cambio importante es que se han eliminado los Spring Factory**.

![](/images/blog/2023/237041cf-3aff-434f-92c2-9f575bcfc956.003.jpg)

<b>Imagen tomada de [2022-10-25-Spring Boot 3 : ready or not? v2](https://docs.google.com/presentation/d/1LnS3bfd87rQEUb3Q-U28Ui_WdRa6svThbPqdMigFXUA/edit?usp=sharing)</b>

Dentro de la ruta de **resources**, en **META-INF.spring** se configuran clases para la inicialización o configuración de Spring; este archivo ya no es soportado. Quizás a la mayoría no le afecte este cambio, pero tómalo en cuenta cuando esté realizando la migración, porque puedes perder muchas horas sin saber exactamente qué está pasando.

- **Darle un vistazo a la guía oficial de migración: [guía de migración de Spring Boot 3.0](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.0-Migration-Guide)**

En resumen, migrar a Spring Boot 3.0 no debe ser traumático, debería ser más fácil que migraciones a versiones mayores posteriores, ya que todos los cambios están bien documentados.

Una pregunta clave que debes hacerte es; ¿debo migrar? Como todo en esta vida y sobre todo en entornos de trabajo profesional esto puede depender del caso, si tienes proyectos muy grandes, obviamente la migración puede ser complicada; se recomienda hacer un análisis inicial, pero deberías al menos considerarlo y tenerlo en el roadmap.

Recordar el calendario de soporte de versiones de Spring. Si estás en la **2.7.x**, a penas tienes unos meses para migrar a la 3.0. Si estás en versiones fuera de soporte debes considerar empezar a migrar inmediatamente tomando en cuenta las recomendaciones que mencionamos anteriormente.


### 5. Soporte Nativo en Spring Boot 3.0

En Spring Boot 3 y Spring Framework 6, dentro del core, no te hará falta nada para crear tu aplicación como nativa.

![](/images/blog/2023/237041cf-3aff-434f-92c2-9f575bcfc956.004.jpg)

<b>Imagen cortesía de [2022-10-25-Spring Boot 3 : ready or not? v2](https://docs.google.com/presentation/d/1LnS3bfd87rQEUb3Q-U28Ui_WdRa6svThbPqdMigFXUA/edit?usp=sharing)</b>

Cuando compilamos nuestro código fuente, el resultado es un lenguaje intermedio llamado **bytecode**, esto no es un binario real, no es un archivo **.exe** que se pueda ejecutar, es un binario intermedio y este bytecode es interpretado por la máquina virtual de Java.

La máquina virtual de Java ejecuta el bytecode de forma efectiva, pero al mismo tiempo que lo ejecuta lo convierte a código nativo y ese código nativo es el que ejecuta. Es decir, la máquina virtual de Java no está leyendo los **.class** a cada instante, sino que una vez los ha leído, los convierte en código nativo, los carga a memoria y ejecuta ese código nativo.

Ese código nativo sería el mismo que si se hubiese hecho este programa en lenguaje C o en C++. 

La ventaja de esto es que la máquina de Java, al conocer tu entorno de ejecución, puede hacer optimizaciones de tu código cada vez que lo ejecuta, algo que no puede lograrse cuando se tiene un binario.

Así es como funciona el compilado normal de Java, ahora bien, para el compilado nativo, nuestro código fuente va a la máquina de [Graal](https://www.graalvm.org), que no sólo va a traducirlo, sino que también hará una serie de análisis para intentar optimizar el código al máximo ([Ahead of Time (AOT)](https://www.baeldung.com/ahead-of-time-compilation)), esto incluye detectar, sobre todo, determinados patrones de uso para mejorar el binario. 

Esto significa que para poder compilar un binario se necesita saber por adelantado todo lo que se necesitará en tiempo de ejecución.

Luego de realizar el análisis, combina todos los elementos (configuración adicional, metadata, etc.) y da como resultado un binario.

Todo este proceso de alguna forma se ha automatizado con los módulos de Spring para que nosotros no tengamos que preocuparnos ni de configurar propiedades ni de tener que hacer configuraciones adicionales. 

Se debe tomar en cuenta que esto funciona siempre que estemos en el ecosistema de Spring, si nosotros incorporamos nuestras propias librerías, probablemente tendremos que hacer configuraciones adicionales, algunas configuraciones son detectadas y otras no.

### Agradecimientos
Agradecer a [Emilio Ariel Santos Mateo](https://www.linkedin.com/in/emilio-santos-m/) por sus sugerencias y correcciones ortográficas a la publicación.

Si deseas seguir investigando sobre imágenes nativas y aplicaciones nativas en Spring, te dejo algunos enlaces:

- [Documentación de GraalVM](https://www.graalvm.org/latest/reference-manual/native-image/)
- [Ahead Of Time and Native in Spring Boot 3.0 by Stéphane Nicoll & Brian Clozel](https://www.youtube.com/watch?v=TS4DpYSmfXk)
- [What's new and how it significantly outperforms Spring Native experimental support](https://twitter.com/sdeleuze/status/1583400937028145152)
- [GraalVM Native Image Support](https://docs.spring.io/spring-boot/docs/3.0.x/reference/html/native-image.html#native-image)

Ver sesión completa en Youtube:
<iframe width="560" height="315" src="https://www.youtube.com/embed/VMTTxFS3Zu8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



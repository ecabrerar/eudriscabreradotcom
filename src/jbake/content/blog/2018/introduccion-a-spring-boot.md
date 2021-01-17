title=Introducción a Spring Boot
date=2018-12-15
type=post
tags=Spring Boot,Java, Aplicación Web,Desarrollo de Software
status=published
author=Eudris Cabrera
description=Introducción a Spring Boot.    
summary=Spring Boot proporciona una forma más sencilla y rápida de inicializar, configurar, ejecutar aplicaciones simples y aplicaciones web complejas en Java. En este artículo vamos a conocer las principales bondades que nos brinda Spring Boot.
~~~~~~
El desarrollo web evoluciona muy rápido y con frecuencia vemos que una herramienta que era bastante útil y usada, varios años después pierde la relevancia que tenía en años anteriores. El ecosistema Java no ha estado exento de esa realidad.

Por años, Java EE y Spring Framework se disputaban los mayores porcentaje entre el nicho de desarrolladores web Java, pero las necesidades de poder crear aplicaciones web más rápido y que corrieran en entornos ligeros trajo a escena un sin números de herramientas para solucionar dicha problemática. Entre ellas Spark Java, Dropwizard, Spring Boot entre otras.

De las anteriores, Spring Boot ha sido la herramienta que más rápido ha escalado.

### ¿Qué es Spring Boot ?

**Spring Boot** es un proyecto construido usando como base el Spring Framework. Proporciona una forma más sencilla y rápida de inicializar, configurar, ejecutar aplicaciones simples y aplicaciones web complejas.

**Spring Boot** está diseñado para ponerlo en funcionamiento lo más rápido posible, con una configuración inicial mínima de Spring. Spring Boot tiene una opinión crítica de la creación de aplicaciones listas para la producción.

![](/images/blog/2018/what-is-spring-boot.png)

En el Spring Framework, necesitas configurar todo por tí mismo. Por lo tanto, puede tener muchos archivos de configuración, como los descriptores XML. **Ese es uno de los principales problemas que Spring Boot resuelve para ti.**

**El proceso tradicional para iniciar una aplicación web basada en Java**

1. En primer lugar, necesitas empaquetar tu aplicación.
2. Elige qué tipo de servidores web desea usar y descárguelo. Hay muchas soluciones diferentes por ahí.
3. Es necesario configurar el servidor web específico.
4. Después de eso, debe organizar la implementación e iniciar su servidor web.

![](/images/blog/2018/process-of-running-a-web-application.png)

**Con Spring Boot, necesitas el siguiente proceso:**

1. Empaquetar tu aplicación.
2. Ejecutar con un comando simple como `java -jar my-application.jar`

Realmente, es así de simple.

Spring Boot se encarga del resto al iniciar y configurar un servidor web incorporado e implementa tu aplicación allí.

### Características Notables

**Configuración automática:** configura su aplicación en función del entorno a su alrededor, así como sugerencias de lo que proporcionan los desarrolladores.

**Independiente(Standalone):** Literalmente, es completamente independiente. Por lo tanto, no es necesario implementar su aplicación en un servidor web o en ningún entorno especial. Su única tarea es hacer clic en el botón o dar el comando, y se iniciará.

**Dogmático(Opinionated):** Esto significa que el framework elige cómo hacer las cosas por sí mismo.

**Configuración automática inteligente**

La autoconfiguración inteligente intenta configurar automáticamente su aplicación. Es contextualmente consciente e inteligente. Veamos un ejemplo de acuerdo con una característica de la base de datos.

Si agrega una dependencia al pom.xml, que se relaciona con una base de datos, el framework asume que probablemente le gustaría usar una base de datos. Luego, configura automáticamente su aplicación para el acceso a la base de datos.


![](/images/blog/2018/spring-auto-configure-database.png)


Además, si la dependencia aparece para una base de datos muy específica, por ejemplo, Oracle o MySQL. Puede hacer una suposición más cierta y probablemente configurará ese acceso a la base de datos específica exactamente lo que necesita.

Configurar la autoconfiguración es extremadamente sencillo. Solo necesita agregar la anotación `@EnableAutoConfiguration` a su aplicación Spring Boot.


### Referencias:

* [https://start.spring.io](https://start.spring.io)
* [https://spring.io/quickstart](https://spring.io/quickstart)
* [https://spring.io/projects/spring-boot](https://spring.io/projects/spring-boot)
* [https://spring.io/tools](https://spring.io/tools)

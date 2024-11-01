title=Lo que más nos emociona de Java 23
date=2024-10-31
type=post
tags=Java,Java 23,Preview Features
status=published
author=Eudris Cabrera
description=Lo que más nos emociona de Java 23 
shareimage=images/blog/2024/736604da-97e6-11ef-80c6-ebdf73a5ad97.jpg
summary=Java 23 fue liberaro el pasado 17 de septiembre de 2024, convirtiéndose en la más reciente versión de Java a la fecha. El próximo lanzamiento será Java 24 que está pautado para marzo del 2025.Cuando miramos las funcionalidades que están disponibles en Java 23, podemos notar que sólo algunos JEPs (JDK Enhancement Proposals - https://openjdk.org/jeps/1) están en estado final. 
~~~~~~
Java 23 fue liberaro el pasado 17 de septiembre de 2024, convirtiéndose en la más reciente versión de Java a la fecha. El próximo lanzamiento será Java 24 que está pautado para marzo del 2025.

Cuando miramos las funcionalidades que están disponibles en [Java 23](https://openjdk.org/projects/jdk/23), podemos notar que sólo algunos [JEPs (JDK Enhancement Proposals)](https://openjdk.org/jeps/1) están en estado final. Los JEPs, [467](https://openjdk.org/jeps/467),[471](https://openjdk.org/jeps/471) y [474](https://openjdk.org/jeps/474) están en estado final, los demás se encuentran en estado preview (vista previa).

Antes de continuar es importante saber que es una [funcionalidad preview](https://openjdk.org/jeps/12) en Java.

### ¿Qué es una funcionalidad preview?

Es una nueva funcionalidad del lenguaje Java, la máquina virtual Java o la API de Java SE que está totalmente especificada, totalmente implementada y, sin embargo, no es permanente.

### ¿Cuales son los objectivos que se buscan con liberar una funcionalidad en vista previa?

- Dar a conocer una nueva funcionalidad que estará disponible en aproximadamente 12 meses.
- Definir un modo de separar las nuevas características de lenguaje, VM y API en función de si son permanentes o no.
- Recibir retroalimentación de los desarrolladores basados en el uso en el mundo real.

### ¿Cómo podemos habilitarla?

Las funcionalidades en modo preview están presentes en todos los compiladores Java e implementaciones JVM, pero desactivadas por defecto.

Habilitar las funcionalidades previews desde la linea de comandos

```
$ javac Foo.java                            	// Do not enable any preview features
$ javac --release 23 --enable-preview Foo.java  // Enable all preview features of Java SE 23
$ javac --release 22 --enable-preview Foo.java  // DISALLOWED
$ sdk use java 23-open
Using java version 23-open in this shell.

$ jshell --enable-preview
|  Welcome to JShell -- Version 23
|  For an introduction type: /help intro
```

### Habilitar las funcionalidades previews en tu IDE favorito

IDE como Eclipse, IntelliJ IDEA, Netbeans, VS Code, entre otros, han publicado bastante información sobre como habilitar las funcionalidades previews en cada uno de ellos.

**En conclusión, las funcionalidades en modo preview están disponibles en una versión del JDK para provocar retroalimentación de los desarrolladores basados ​​en el uso en el mundo real; esto puede hacer que se vuelva permanente en una futura plataforma Java SE.**
 
**Debido a que estas no han alcanzado el estado final y permanente en la plataforma Java SE, un código escrito con una funcionalidad en modo preview de una versión anterior de la plataforma Java SE no necesariamente se compilará o ejecutará en una versión más reciente.** 

**Basado en la retroalimentación recibida de parte de la comunidad Java, la funcionalidad puede sufrir cambios en su implementación e incluso, pudiera ser retirada para ser reestructurada y luego ser reintroducida en una futura versión**

Ya que conocemos el objetivo de las funcionalidades en modo preview podemos continuar con Java 23.

El miercoles 2 de Octubre de 2024 en las sesiones de JDK Fundamental Talks presentamos las principales funcionales que debemos prestar atención en Java 23.

En la sesión estuvieron presente las comunidades Java de Bogotá, Bolivia, Buenos Aires, Guadalajara, Medellín, Mérida, México, Nicaragua, Perú, Ecuador y República Dominicana.

#### Markdown Documentation Comments (JEP 467)

Esta nueva funcionalidad permite que puedas escribir los comentarios de la documentación [JavaDoc](https://es.wikipedia.org/wiki/Javadoc) en [Markdown](https://es.wikipedia.org/wiki/Markdown) en lugar de únicamente en una combinación de etiquetas [HTML](https://es.wikipedia.org/wiki/HTML) y [JavaDoc](https://es.wikipedia.org/wiki/Javadoc).

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un formato que le gusta mucho a los desarrolladores y seguro tendrá una rápida adoción para escribir [JavaDoc](https://es.wikipedia.org/wiki/Javadoc).

#### Primitive Types in Patterns, instanceof, and switch (JEP 455 - Preview)

 Esta funcionalidad se encuentra en modo preview y tiene como objetivo mejorar la coincidencia de patrones permitiendo patrones de tipos primitivos en todos los contextos de patrones y ampliar instanceof y switch para que funcionen con todos los tipos primitivos.

#### Stream Gatherers  (JEP 473 - Second Preview)

Esta funcionalidad se encuentra en su segundo lanzamiento en modo preview y busca mejorar la API Stream para admitir operaciones intermedias personalizadas. Esto permitirá que los pipelines de flujo transformen datos de formas que no se pueden lograr fácilmente con las operaciones intermedias integradas existentes.

#### Implicitly Declared Classes and Instance Main Methods (JEP 477 - Third Preview)

Esta funcionalidad se encuentra en su tercer lanzamiento en modo preview y su objetivo es hacer el lenguaje más amigable para los principiantes. La idea es que quien está iniciando a programar en Java puedan escribir sus primeros programas sin necesidad de comprender las características del lenguaje diseñado para programas grandes.

A continuación los enlaces con cada uno de las presentaciones realizadas en JDK Fundamental Talks:

* [Bienvenida y resumen de cómo Java ha evolucionado](https://www.youtube.com/live/_3TCuvaKDqQ?si=E-5kF5ezKydU95oM&t=34) - [Carlos Obregón](https://twitter.com/gaijinco)
* [¿Qué son las funcionalidades previews y cómo habilitarla en tu JDK?](https://www.youtube.com/live/_3TCuvaKDqQ?si=BggFh48Wq40cQBdI&t=618) Eudris Cabrera
* [Markdown Documentation Comments](https://www.youtube.com/watch?v=_3TCuvaKDqQ&t=1742s) - [Francisco Contreras](https://twitter.com/Frank_JCG)
* [Primitive Types in Patterns](https://www.youtube.com/live/_3TCuvaKDqQ?si=UxNLYZFZFPjGYSw5&t=3070) -  [Javier Bennek](https://x.com/_benek)
* [Implicitly Declared Classes and Instance Main Methods](https://www.youtube.com/live/_3TCuvaKDqQ?si=2jvPEIiyz7vz7jly&t=4786) - [Brayan Muñoz](https://twitter.com/Brayanmnz_)
* [Stream Gatherers](https://www.youtube.com/live/_3TCuvaKDqQ?si=oZJnaSenM7fYyrid&t=7348) - [Freddy Peña](https://twitter.com/fred_pena)

Referencia:

- [https://www.infoworld.com/article/2336682/jdk-23-the-new-features-in-java-23.html](https://www.infoworld.com/article/2336682/jdk-23-the-new-features-in-java-23.html)

- [Preview Features](https://openjdk.org/jeps/12)

- [https://github.com/fredpena/jep-473](https://github.com/fredpena/jep-473)

- [https://github.com/BrayanMnz/jep-477-demo](https://github.com/BrayanMnz/jep-477-demo) 
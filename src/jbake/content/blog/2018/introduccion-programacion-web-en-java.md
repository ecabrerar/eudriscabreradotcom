title=Introducción a la Programación Web en Java
date=2018-12-14
type=post
tags=Java, Aplicación Web, Servlet, JSP
status=published
author=Eudris Cabrera
description=Introducción a la Programación Web en Java    
summary=Una aplicación web presenta contenido adaptado dinámicamente en función de parámetros de la petición, los comportamientos de los usuarios y consideraciones de seguridad. A continuación vamos a explorar las principales herramientas para desarrollo de aplicaciones Web en Java.
~~~~~~

### ¿Qué es una aplicación web?

Por definición, se trata de algo más que un `sitio web`.

Se trata de una aplicación cliente / servidor que utiliza un navegador Web como su programa cliente, y por consiguiente constituye un servicio interactivo mediante la conexión con los servidores a través de Internet (o Intranet).	 

Una aplicación web  presenta contenido adaptado dinámicamente en función de parámetros de la petición, los comportamientos de los usuarios seguidos, y consideraciones de seguridad.  

Una **aplicación Web Java** puede ser representada como una jerarquía de directorios y archivos, que a su vez contiene:


*    **Componentes Web  (Servlets, JavaServer Pages, entre otros)**
*    **Recursos estáticos (páginas html e imágenes).**
*    **Clases Java.**
*    **Librerías (Archivos Jars).**
*   ** Un archivo descriptor de despliegue (web.xml).**

Una aplicación web de Java se puede implementar como un archivo** ".war"**.

El archivo **".war"** es un archivo zip que contiene todo el contenido de la  aplicación web correspondiente.

Las aplicaciones java web normalmente no se ejecutan directamente en el servidor, sino que se ejecutan dentro de un **contenedor** en el servidor. El contenedor proporciona un entorno de ejecución para aplicaciones web en Java.

El contenedor es para aplicaciones web en Java lo que la **JVM (Java Virtual Machine)** es para las aplicaciones Java que se ejecutan locales. El contenedor en sí se ejecuta en la JVM.

En general, Java distingue dos contenedores: El **contenedor web** y el **contenedor Java EE**.

Un contenedor Web apoya la ejecución de Servlets Java y Java Server Pages.

Un contenedor compatible con Java EE provee  funcionalidades adicionales, tales como,  gestor de ejecución de los Enterprise JavaBeans, interfaz de conexión entre el  servidor Java EE y aplicaciones clientes.

Contenedores web típicos en el mundo Java son **Tomcat** o **Jetty**.

La especificación **Servlet** es el fundamento de las aplicaciones web Java. Muchos frameworks de alto nivel incluyendo **JAX-RS**, **JavaServer Faces (JSF)**, y **Spring MVC** están basados en **servlets** y **JavaServer Pages**.

Los frameworks web populares en Java son : Spring Framework (varias vertientes)  y Java Server Faces. Otros como **Vaadin**, **Grails** y **Play** tienen cierta presencia en los nichos de desarrollo web en Java, pero no han logrado escalar a los niveles esperados.

Estos frameworks web por lo general se ejecutan en un contenedor web.

**Popularidad de los frameworks web en Java **

![](/images/blog/2018/jvm-java-web-frameworks-spring-boot-mvc-jsf-gwt-vaadin-play.png)


1. [https://zeroturnaround.com/webframeworksindex/](https://zeroturnaround.com/webframeworksindex/)
2. [https://snyk.io/blog/jvm-ecosystem-report-2018](https://snyk.io/blog/jvm-ecosystem-report-2018)

**Nota:** Cuando hablamos de **framework** nos referimos a una estructura conceptual y tecnológica que sirve de base para desarrollar proyectos de software de forma más fácil y organizada, ya que agrupa otros componentes y herramientas para agilizar el proceso de desarrollo de un software.

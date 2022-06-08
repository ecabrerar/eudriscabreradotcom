title=Primeros Pasos con Apache Maven
date=2015-4-15
type=post
tags=Apache Maven,MVN, Maven
status=published
author=Eudris Cabrera
description=Primeros Pasos con Apache Maven  
shareimage=images/blog/2015/apache_maven-300x104.png  
summary=Si has trabajado alguna vez en la plataforma Java, o tienes pensado hacerlo, te presentamos la herramienta Apache Maven,  mejor conocido entre los programadores como Maven. En esta publicación pretendemos introducir el manejo de proyecto usando Maven, así como también, conocer los valores inmediatos que Maven puede ofrecer a muchos usuarios y organizaciones, ya que funciona igual para proyectos pequeños y grandes.
~~~~~~

## Qué es Maven ?
Es una herramienta de software para la gestión y construcción de proyectos. Es decir, con Maven vamos a poder compilar, empaquetar, generar documentación, pasar los test, preparar las builds, etc.

![](/images/blog/2015/apache_maven-300x104.png)

A diferencia de su antecesor (Ant – http://ant.apache.org), Maven es más que una herramienta de compilación, ya que proporciona un sistema de construcción uniforme basado en el concepto de `POM (Proyect Object Model)`.

Maven se basa en patrones y en estándares. Esto permite a los desarrolladores moverse entre proyectos y no necesitan aprender como compilar o empaquetar. Esto mejora el mantenimiento y la reusabilidad.

## Porqué usar Maven ?
* Facilita el proceso de compilado y empaquetado.
* Proporciona un sistema de compilado uniforme.
* Proporciona información de útil sobre los proyectos.
* Proporciona directrices para las mejores prácticas de desarrollo.
* Permite  migración transparente a nuevas características.

### Principales Características
* Creación sencilla y ágil de un nuevo proyecto o módulo.
* Estandarización de la estructura de un proyecto, y de las técnicas relacionadas con éste.
* Maven incluye un potente mecanismo de gestión de las dependencias de un proyecto sobre librerías propias o de terceros.
* Maven permite una sencilla gestión simultánea de varios proyectos.
* Maven dispone de un enorme repositorio de librerías Open Source en constante actualización, de forma que los desarrolladores pueden acceder a las versiones más actualizadas de las mismas.
* Maven es extensible: dispone de multitud de plugins y de la posibilidad de creación de otros que necesitemos.

### Pasos para instalar maven
__Descargar y descomprimir__
http://maven.apache.org/download.html
Asegúrese de que la variable de entorno `JAVA_HOME`
está en apuntando al directorio del `JDK`

Añadir a la variable de entorno `PATH`
__Linux__
```bash
export MAVEN_HOME=~/apache-maven-3.2.1
export PATH=$PATH:$MAVEN_HOME/bin
```
__Windows__
```bash
set M2_HOME=:\Program Files\apache-maven-3.2.1
set PATH=%PATH%;%M2_HOME%\bin
```

### Pasos para crear un proyecto simple
```bash
mvn archetype:generate
```

__Generar un proyecto Maven__
Se le pedirá que proporcione la siguiente información
__Archetype (tipo proyecto)__
__Group Id__
__Artifact Id__
__Version__
__Package__

__Resultado final__
__Estructura de directorios del proyecto__
__pom.xml__
![](/images/blog/2015/Maven-300x152.png)
### ¿Qué es el archivo POM?

![](/images/blog/2015/pom-150x150.png)
POM (Project Object Model)

Archivo XML que contiene información relevante del proyecto.
El POM Maven dice qué tipo de proyecto se está trabajando y cómo modificar el comportamiento por defecto para generar la salida.

### Identidad del proyecto
En Maven todo es un proyecto y cada proyecto tiene una identidad única (Identidad del Artefacto)
La identidad de un proyecto se define de la siguiente forma:

```bash
<groupId>org.ecabrerar.barcampsti</groupId>
<artifactId>simple-project</artifactId>
<version>1.0-SNAPSHOT</version>
```
__groupId__
Representa la organización
La convención es utilizar el nombre de dominio de forma inversa.
Ejemplo: `org.ecabrerar.barcampsti`

__artifactId__
Un identificador único dentro de un groupId

__version__
Una versión específica de un proyecto

### Gestión de dependencias
![](/images/blog/2015/dependencias-300x148.png)
Alcance (Scope) de una dependencia
Las dependencias son especificadas usando las coordenadas

```xml
<dependencies>
    <dependency></dependency>
</dependencies>
```

* Maven maneja el concepto de dependencias transitivas
* Maven también maneja conflictos entre dependencias
* Cada dependencia tiene un alcance (scope) específico.

### Alcance (Scope) de una dependencia
Los principales scopes son los siguientes:

* compile: predeterminado, se usa por defecto si no se especifica otro
* provided : indica que el jdk o el contenedor va a proveer la dependencia
* runtime : solo se necesita en tiempo de ejecución
* test : sólo es requerida en compilación de pruebas.

### Integración con IDE
Existen plugins de Maven para crear archivos de configuración del IDE a partir de los POMs.

Actualmente se soportan:
* Eclipse IDE
* Netbeans
* IntelliJ
* JDeveloper 11G +

¿Desea obtener más información?
Leer mis presentaciones en Slideshare :
[![](https://public.slidesharecdn.com/images/logo/linkedin-ss/SS_Logo_Desktop_Black.png?ef34b4628a)](http://www.slideshare.net/eudris)

[Ejemplos prácticos](https://github.com/ecabrerar/BarCampSTI2013-Maven)
[Primeros pasos con Apache Maven](https://www.slideshare.net/eudris/primeros-pasos-con-maven)

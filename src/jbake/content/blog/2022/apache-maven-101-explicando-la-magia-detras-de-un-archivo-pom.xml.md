title=Apache Maven 101: Explicando la magia detrás de un archivo pom.xml
date=2022-11-22
type=post
tags=Apache Maven,Maven,Java
status=published
author=Eudris Cabrera
description=Apache Maven 101: Explicando la magia detrás de un archivo pom.xml
shareimage=/images/blog/2022/bd682229-1fce-47c9-87cc-c00e38cfa2e4.001.jpg
summary=Apache Maven es la herramienta por excelencia para la gestión y construcción de proyectos Java. Maven facilita el proceso de compilación, empaquetado, generación de documentación, correr los test, publicación de los artefactos, etc. Hace unos años publicamos el artículo <a href="https://eudriscabrera.com/blog/2015/primeros-pasos-con-apache-maven.html?lang=es" target="_blank"> Primeros Pasos con Apache Maven</a>, una introducción al manejo de proyecto usando Apache Maven, ésta publicación es una versión extendida donde pretendemos explicar de forma más detallada el uso de Apache Maven en tus proyectos Java.
~~~~~~
Hace unos años publicamos el artículo [Primeros Pasos con Apache Maven](https://eudriscabrera.com/blog/2015/primeros-pasos-con-apache-maven.html?lang=es), una introducción al manejo de proyecto usando Apache Maven, ésta publicación es una versión extendida donde pretendemos explicar de forma más detallada el uso de Apache Maven en tus proyectos Java.

### ¿Qué es Apache Maven?

Apache Maven es

- Herramienta de software para la gestión y construcción de proyectos.
    - Es más que una herramienta de compilación.
- Proporciona un sistema de construcción uniforme.
    - Project Object Model (POM) - pom.xml
- Basado en el principio de Convención sobre Configuración
    - Requiere configuración mínima.

### Más sobre Maven

- Viene con objetivos predefinidos para realizar ciertas tareas claramente definidas, como la compilación del código y su empaquetado.
- Provee una arquitectura basada en plugins
  - Cualquiera puede escribir plugins para su interfaz con herramientas  como compiladores, herramientas de pruebas unitarias, etcétera, para cualquier otro lenguaje.

### ¿Por qué usar Maven?

- Facilita el proceso de compilado y empaquetado.
- Proporciona un sistema de compilado uniforme.
- Proporciona información útil sobre los proyectos.
- Proporciona directrices para las mejores prácticas de desarrollo.
- Permite migración transparente a nuevas características.
- Maven ofrece información útil sobre el proyecto que es en parte tomado de su POM y, en parte generada a partir de fuentes de su proyecto.
    - Lista de cambios (CHANGELOG) desde el control de versiones.
    - Dependencias transitivas.
    - Informes de la ejecución de pruebas unitarias.

### Características

- Creación sencilla y ágil de un nuevo proyecto o módulo.
- Estandarización de la estructura de un proyecto, y de las técnicas relacionadas con éste.
- Maven incluye un potente mecanismo de gestión de las dependencias de un proyecto sobre librerías propias o de terceros.
- Maven permite una sencilla gestión simultánea de varios proyectos.
- Maven dispone de un enorme repositorio de librerías Open Source en constante actualización, de forma que los desarrolladores pueden acceder a las versiones más actualizadas de las mismas.
- Maven es extensible: dispone de multitud de `plugins` y de la posibilidad de creación de otros que necesitemos.
- Extensible con la capacidad para escribir fácilmente plugins de Java o lenguajes de scripting.
- Nos proporciona un acceso inmediato a nuevas funcionalidades requiriendo un esfuerzo muy pequeño de configuración.

### ¿Cómo funciona Apache Maven?

Maven usa un modelo de objetos de proyecto (`POM`) para administrar un proyecto.

Los comandos de Maven ejecutan partes de su modelo de objetos de proyecto. Un modelo de objetos de proyecto se suele describir como un documento XML. Una descripción de POM NO se limita a XML.

Se pueden utilizar otros formatos para describir el modelo de objetos del proyecto, sin embargo, XML fue el primer formato utilizado.

![](/images/blog/2022/bd682229-1fce-47c9-87cc-c00e38cfa2e4.001.jpg)

### Modelo de objeto del proyecto
<figure style="float:right;">
 <figcaption style="text-align: center;">The Project Object Model</figcaption>
  <img src="/images/blog/2022/bd682229-1fce-47c9-87cc-c00e38cfa2e4.002.jpg" alt="The Project Object Model" style="width:420px;height:354px;word-wrap: break-word;">     
</figure>

#### ¿Qué es el archivo POM?
- Archivo XML que contiene información relevante del proyecto.
- El POM Maven dice qué tipo de proyecto se está trabajando y cómo modificar el comportamiento por defecto para generar la salida.


#### Identidad del Proyecto
- En Maven todo es un proyecto y cada proyecto tiene una identidad única (Identidad del Artefacto)
- La identidad de un proyecto se define de la siguiente forma:
```xml
    <groupId>com.eudriscabrera.examples.java</groupId>
    <artifactId>simple-maven-project</artifactId>
    <version>1.0-SNAPSHOT</version>
```
- **groupId**
    - Organización.
    - La convención es utilizar el nombre de dominio de forma inversa.
    - Ejemplo: `com.eudriscabrera.examples.java`
- **artifactId**
    - Un identificador único dentro de un `groupId`.
- **Version**
    - Una versión específica de un proyecto.

### El Super POM
<figure style="float:right;">
  <img src="/images/blog/2022/bd682229-1fce-47c9-87cc-c00e38cfa2e4.003.jpg" alt="El Super POM" style="width:420px;height:359px;word-wrap: break-word;">     
</figure>

- Siempre es el padre de todos los proyectos Maven.
- Define algunas variables de configuración estándar que son heredadas por todos los proyectos.
- Define un único repositorio remoto de Maven con un ID de “**central**”. Ver <http://maven.apache.org/ref/> 

### Un proyecto maven simple

#### Estructura de directorios

Para `maven-archetype-quickstart`

![](/images/blog/2022/bd682229-1fce-47c9-87cc-c00e38cfa2e4.004.jpg)

#### Pasos para crear un proyecto simple

- `mvn archetype:generate`
    - Generar un proyecto Maven
- Se le pedirá que proporcione la siguiente información
    - Archetype (tipo proyecto)
    - Group Id
    - Artifact Id
    - Version
    - Package

- Resultado final
    - Estructura de directorios del proyecto
    - pom.xml

Ejemplo con el arquetipo `maven-archetype-quickstart`

```bash
mvn archetype:generate -DarchetypeArtifactId=maven-archetype-quickstart
```

Llenar información requerida para el proyecto maven

Ejemplo:

- **groupId:**    com.eudriscabrera.examples.java
- **artifactId:** simple-project (nombre del proyecto)
- **version:**    dejar versión por defecto
- **package:**     com.eudriscabrera.examples.java

En el paso anterior utilizaste la modalidad interactiva, también puedes deshabilitar el modo interactivo y ejecutar todo como una sola instrucción.

Ejemplo:
```bash
mvn archetype:generate -DgroupId=com.eudriscabrera.examples.java \
 -DartifactId=simple-custom-project \
 -Dpackage=com.eudriscabrera.examples.java \
 -DarchetypeArtifactId=maven-archetype-quickstart \
 -DinteractiveMode=false \
 -Dversion=1.0
```

#### Comprobar instalación

- Desde la línea de comandos
    - Escribir **mvn -version**


### Arquetipo (Archetype)

#### ¿Qué es un Arquetipo (Archetype)?

- **"Arquetipo"** es "un modelo original o tipo del que se pueden crear modelos similares o prototipos"
- Promueve las buenas prácticas
    - Estructura de directorio, dependencias y plugins necesarios
en el proyecto.

- Existen muchos arquetipos provistos por la comunidad de maven.
    - Aplicaciones Java Standard
    - Aplicaciones Spring
    - Aplicaciones Hibernate
    - Muchos más

#### Configuración específica del usuario y repositorio local

#### <home_directory>/.m2/settings.xml

Contiene la configuración específica del usuario para la autenticación, los repositorios, y otra información para personalizar el comportamiento de Maven.

![](/images/blog/2022/bd682229-1fce-47c9-87cc-c00e38cfa2e4.005.jpg)

#### <home_directory>/.m2/repository
<figure style="float:right;">
  <img src="/images/blog/2022/bd682229-1fce-47c9-87cc-c00e38cfa2e4.006.jpg" alt="<home_directory>/.m2/repository" style="width:420px;height:359px;word-wrap: break-word;">     
</figure>
- Repositorio local maven
- Almacena localmente los artefactos generados (archivos jar, war, ear, etc).
- Almacena copias de dependencias descargadas de repositorios remotos.

### Ciclos de vida y fases
#### Ciclo de vida básico

Maven fue pensado alrededor del concepto central de un ciclo de vida del compilado

Lo que significa:

* Proceso claramente definido.
* Sólo es necesario aprender algunos comandos para compilar un proyecto Maven

#### Existen 3 ciclo de vida del compilado

- `default`: maneja la implementación del proyecto
- `clean`: maneja la limpieza del proyecto
- `site`: se encarga de la creación del sitio de documentación de su proyecto.

#### Fases del ciclo de vida
#### Fases predeterminadas

Las partes del ciclo de vida principal del proyecto Maven son: **compile**,**test**,**package**,**install** y **deploy**.


<figure style="float:right;">
  <img src="/images/blog/2022/bd682229-1fce-47c9-87cc-c00e38cfa2e4.007.jpg" alt="<home_directory>/.m2/repository" style="width:420px;height:359px;word-wrap: break-word;">     
</figure>

- mvn compile
   - Genera los ficheros .class

- mvn test
   - Ejecuta los test automáticos

- mvn package
   - Genera el fichero .jar

- mvn install
    - Copia el fichero .jar a un repositorio local

- mvn deploy
    - Copia el fichero .jar a un servidor remoto


### Repositorios Maven
#### ¿Qué es un repositorio?

- Mantiene plugins y artefactos
- Los repositorios remotos predeterminados pueden mantener plugins y artefactos públicos. Por ejemplo: Maven Central
- Los repositorios personalizados se pueden configurar para mantener plugins y artefactos no públicos
- Cada artefacto se mantiene en una estructura de directorio que coincide con las coordenadas de un proyecto `<groupId>/<artifactId>/<version>/<artifactId>-<version>.<packaging>`

#### Estructura del repositorio
Cada artefacto se mantiene en una estructura de directorio que coincide con las coordenadas de un proyecto
`<groupId>/<artifactId>/<version>/<artifactId>-<version>.<packaging>`

![](/images/blog/2022/bd682229-1fce-47c9-87cc-c00e38cfa2e4.008.jpg)


#### Maven Central
![](/images/blog/2022/bd682229-1fce-47c9-87cc-c00e38cfa2e4.009.jpg)

### Plugins
#### Arquitectura basada en plugins

- Todas las tareas de Maven se realizan a través de plugins.
- Los plugins son descargados al igual que las dependencias de repositorios remotos según sea necesario y son actualizados periódicamente.
- Un plugin maven es una colección de una o más unidades de tareas (goals).
- Usted puede crear plugins personalizados.
- Un plugin personalizado puede ser escrito en diferentes lenguajes de programación: **Java**, **Groovy**, **Ant**, **Ruby**, entre otros.

#### Beneficios del uso de plugins

- Plugins comunes pueden ser usados en diferentes proyectos.
- Un plugin puede ser modificado sin afectar las demás partes de un proyecto.
- Los cambios/mejoras realizados a los plugins por parte de alguna comunidad es beneficioso para todos.
- Ejemplos de plugins **"listo para usar"**
    - Archetype plugin
    - Jar plugin
    - Compiler plugin
    - Hibernate3 plugin

### Gestión de Dependencias
#### Uso de dependencias

- Las dependencias son especificadas usando las coordenadas:
```xml
<dependencies>
  <dependency></dependency>
</dependencies>
```
- Maven maneja el concepto de dependencias transitivas.
- Maven también maneja conflictos entre dependencias.
- Cada dependencia tiene un alcance específico.

#### Alcance de una dependencia

```xml
<dependency>
 <groupId>junit</groupId>
 <artifactId>junit</artifactId>
 <version>4.13</version>
 <scope>test</scope>
 </dependency>
```

### Scopes

Los principales scopes son los siguientes:

- `compile`: predeterminado, se usa por defecto si no se especifica otro.
- `provided` : indica que el JDK o el contenedor va a proveer la dependencia.
- `runtime` : solo se necesita en tiempo de ejecución.
- `test` : sólo es requerida en compilación de pruebas.

### Integración con IDE
Todos los entornos de desarrollo populares para la plataforma Java tienen integración con Apache Maven.

Actualmente se soportan:

- Eclipse
- Netbeans
- IntelliJ
- VSCode

### Recomendaciones

- Podemos describir un proyecto Maven como un directorio en lo que tenemos un fichero descriptor de proyecto (pom.xml).

En lugar de crear el proyecto a mano podemos hacer uso de un gran número de plantillas o archetype.

- Usar versiones recientes de Maven. Esto es mayores a 3.8.x.
- Como regla general, es mejor para encontrar los nombres de los módulos funcionales. Sin embargo, por lo general es más fácil elegir los nombres que representan una tecnología en su lugar.

## Referencias
- Maven: The Complete Reference: <https://books.sonatype.com/mvnref-book/reference/index.html> 
- http://maven.apache.org

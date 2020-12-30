title=Servicios REST en Java
date=2016-08-18
type=post
tags=REST,Servicios Web, HTTP
status=draft
author=Eudris Cabrera
description=Servicios REST en Java.    
summary=JAX-RS 2.0 (JSR 339) no solo define el API para construir un servicio web REST sino que también mejora la API del lado del cliente para facilitar el proceso de escritura de un cliente para un servicio REST. En este artículo vamos a explorar como utilizar el cliente de JAX-RS para consumir servicios REST
~~~~~~

JAX-RS 2.0 (JSR 339) no solo especifica el API para construir un servicio web REST sino que también mejora la API del lado del cliente para facilitar el proceso de escritura de un cliente para un servicio REST.

El API del cliente JAX-RS, que es una API basada en Java para la comunicación fluida con los servicios Web REST.  Este API estándar, también forma parte de Java EE 7 y está diseñado para que sea muy fácil de consumir un servicio Web expuesto a través del protocolo HTTP y permite a los desarrolladores implementar de forma concisa y eficiente soluciones del lado del cliente portátiles.

### Resumen de uso del cliente JAX-RS.

Podemos crear un cliente rest y relacionarlo a una URL de destino específico, con parámetros específicos utilizando los siguientes pasos:

Obtener una referencia de cliente mediante la clase `ClientBuilder`

```java
 Client client = ClientBuilder.newClient();
 ```

Especificar la URL destino del servicio REST utilizando el método `target():`

```java
client.target("http://localhost:8080/myrestservice");
```

Manejar los parámetros de URL dinámica utilizando `path()` y `resolveTemplate():`

```java
 client.target(..).path("{id}").resolveTemplate("id", someId);
```

Utilice el método `request()` para iniciar la construcción de la solicitud seguido por uno de los métodos, por ejemplo, `post()`, `get()`:

```java
client.target(..).request().get();
```

Cada caso ofrece una variedad de posibles parámetros y opciones de configuración, voy a estar cubriendo algunos de ellos como las peticiones asíncronas, manejador de devolución de llamada y los filtros y clases de entidad posteriores.

En el siguiente ejemplo vamos a construir un cliente para un servicio REST de lo que hemos trabajado anteriormente.

La idea principal es explorar las diferentes opciones, por ejemplo, cómo manejar las peticiones de una manera síncrona o asíncrona, cómo añadir manejadores de devolución de llamada para una solicitud, cómo especificar los objetivos de invocación para construir las solicitudes para una ejecución posterior o cómo filtrar la comunicación cliente-servidor utilizando filtros solicitud del cliente y filtros de respuesta del cliente.

Si estamos trabajando en un proyecto Java EE 7 no tenemos que agregar dependencias adicionales.

En caso de estar trabajando en un proyecto que no sea Java EE 7 tenemos que agregar las siguientes dependencias.


```xml
<dependency>
        	<groupId>org.glassfish.jersey.core</groupId>
        	<artifactId>jersey-client</artifactId>
        	<version>2.22.1</version>
</dependency>

<dependency>
        	<groupId>org.glassfish.jersey.media</groupId>
        	<artifactId>jersey-media-json-jackson</artifactId>
        	<version>2.22.1</version>
</dependency>
```


**Nota:**

JAX-RS es el API para la creacion y consumo de servicios web y existen varias implementaciones de este API, entre ellas las dos mas famosas son Jersey https://jersey.java.net/documentation/latest/index.html y REST-Easy http://resteasy.jboss.org/.

Nosotros usaremos Jersey en nuestro ejemplo.

El siguiente es un ejemplo sencillo.

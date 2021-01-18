title=Consumiendo Servicios REST en Java
date=2016-08-19
type=post
tags=REST, Servicios Web, HTTP,Desarrollo de Software
status=published
author=Eudris Cabrera
description=Consumiendo Servicios REST en Java.    
summary=JAX-RS 2.0 (JSR 339) no solo define el API para construir un servicio web REST sino que también mejora la API del lado del cliente para facilitar el proceso de escritura de un cliente para un servicio REST. En este artículo vamos a explorar como utilizar el cliente de JAX-RS para consumir servicios REST.
~~~~~~
JAX-RS 2.0 (JSR 339) no solo especifica el API para construir un servicio web REST sino que también mejora la API del lado del cliente para facilitar el proceso de escritura de un cliente para un servicio REST.

### API cliente de JAX-RS

El API del cliente JAX-RS, que es una API basada en Java para la comunicación fluida con los servicios Web REST.  Este API estándar, también forma parte de Java EE 7 y está diseñado para que sea muy fácil de consumir un servicio Web expuesto a través del protocolo HTTP y permite a los desarrolladores implementar de forma concisa y eficiente soluciones del lado del cliente portátiles.

### Resumen sobre el uso del cliente JAX-RS.
Podemos crear un cliente rest y relacionarlo a una URL de destino específico, con parámetros específicos utilizando los siguientes pasos:

Obtener una referencia de cliente mediante la clase `ClientBuilder:`

```bash
 Client client = ClientBuilder.newClient();
```
Especificar la URL destino del servicio REST utilizando el método `target()`:

```bash
 client.target("http://localhost:8080/myrestservice");
 ```

Manejar los parámetros de URL dinámica utilizando `path()` y `resolveTemplate()`:

```bash
 client.target(..).path("{id}").resolveTemplate("id", someId);
 ```

Utilice el método `request()`  para iniciar la construcción de la solicitud seguido por uno de los métodos, por ejemplo, `post()`, `get()`:

```bash
 client.target(..).request().get();
 ```
 Cada paso ofrece una variedad de posibles parámetros y opciones de configuración. Puedes consultar este recurso [https://docs.oracle.com/javaee/7/tutorial/jaxrs-client.htm](https://docs.oracle.com/javaee/7/tutorial/jaxrs-client.htm) para conocer más sobre el API.

### Dependencias

Si estamos trabajando en un proyecto Java EE (7 ó superior) no tenemos que agregar dependencias adicionales. Esto es porque agregaste la dependencia de Java EE 7 en el `pom.xml` del proyecto.

 Esto es:
```xml
<dependency>
            <groupId>javax</groupId>
            <artifactId>javaee-web-api</artifactId>
            <version><!--Version Java EE--></version>
            <scope>provided</scope>
  </dependency>
```

En caso de estar trabajando en un proyecto que no sea Java EE (7 ó superior) tenemos que agregar las siguientes dependencias.

```xml
<dependency>
            <groupId>org.glassfish.jersey.core</groupId>
            <artifactId>jersey-client</artifactId>
            <version><!--version más reciente de jersey--></version>
</dependency>

<dependency>
            <groupId>org.glassfish.jersey.media</groupId>
            <artifactId>jersey-media-json-jackson</artifactId>
            <version><!--version más reciente de jersey--></version>
</dependency>
```

`Nota:`
JAX-RS es el API para la creación y consumo de servicios web y existen varias implementaciones de este API, entre ellas las dos más famosas son Jersey [https://jersey.java.net/documentation/latest/index.html](https://jersey.java.net/documentation/latest/index.html) y REST-Easy [http://resteasy.jboss.org/](http://resteasy.jboss.org/).

Usaremos Jersey en nuestro ejemplo.

```java

Client client = ClientBuilder.newClient();
String baseUri = "http://localhost:8080/TallerJava/servicios"

//Consultar todos los estudiantes    
Response result1 = client.target(baseUri)
                     .path("estudiantes")
                 .request(MediaType.APPLICATION_JSON)
                 .get(Response.class);


  //Enviar estudiante
   String jsonEstudiante = Json.createObjectBuilder()
                     .add("matricula", "1")
                     .add("nombre", "Juan Perez")
                     .build().toString();


Response result3 = client.target(baseUri)
               .path("estudiantes")
               .request(MediaType.APPLICATION_JSON_TYPE)
               .post(Entity.entity(jsonEstudiante, MediaType.APPLICATION_JSON),Response.class);
```
### Referencias:
* [http://java.dzone.com/articles/whats-new-jax-rs-20](http://java.dzone.com/articles/whats-new-jax-rs-20)
* [http://www.infoq.com/news/2013/06/Whats-New-in-JAX-RS-2.0](http://www.infoq.com/news/2013/06/Whats-New-in-JAX-RS-2.0)

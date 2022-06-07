title=Servicios REST en Java
date=2017-07-15
type=post
tags=REST,Servicios Web, HTTP,Desarrollo de Software
status=published
author=Eudris Cabrera
description=Servicios REST en Java.  
shareimage=images/blog/2017/rest-api-diagram.jpg   
summary=Los servicios web (en inglés, Web service) son utilizados para intercambiar datos entre aplicaciones. Esto conlleva la utilización de un conjunto de estándares y protocolos. En la década de 2000s, surgió una nueva forma de crear servicios web, a esta arquitectura se le denominó REST (Representational State Transfer). Dicha arquitectura utiliza los métodos del protocolo HTTP (GET, POST, PUT, DELETE, etc) para realizar diferentes operaciones entre la aplicación que ofrece el servicio web y el cliente. En este artículo nos vamos a enfocar en cómo desarrollar Servicios REST en Java.
~~~~~~
Los servicios web (en inglés, Web service) son utilizados para intercambiar datos entre aplicaciones. Esto conlleva la utilización de un conjunto de estándares y protocolos. En la década de 2000s, surgió una nueva forma de crear servicios web, a esta arquitectura se le denominó REST (Representational State Transfer). Dicha arquitectura utiliza los métodos del protocolo HTTP (GET, POST, PUT, DELETE, etc) para realizar diferentes operaciones entre la aplicación que ofrece el servicio web y el cliente.


## Introducción a los Servicios REST

Roy Thomas Fielding en su tesis doctoral, Estilos Arquitecturales y el Diseño de Arquitecturas de Software basadas en Red, describe Representational State Transfer (REST) como un enfoque para desarrollar servicios web y una alternativa a otras especificaciones de computación distribuida tales como CORBA o DCOM.

**Enlaces:**

* [http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm](http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm)
* [https://en.wikipedia.org/wiki/Roy_Fielding](https://en.wikipedia.org/wiki/Roy_Fielding)
* [https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)

En resumen se trata de:

*   Arquitectura de sistema distribuido sobre el protocolo HTTP.
*   Protocolo cliente / servidor sin estado.
*   Operaciones definidas, GET, POST, PUT y DELETE soportando un CRUD.
*   Identificador único para los recursos (URI).
*   Estándar Flexible
*   Servicio web sobre HTTP representado con JSON.

![](/images/blog/2017/rest-api-diagram.jpg)

### JavaScript Object Notation (JSON):

Es un formato ligero para el intercambio de datos.

Su simplicidad ha dado lugar a la generalización de su uso, especialmente como alternativa a XML como representación de objetos y es el estándar de facto para servicios REST.

**Ejemplo de una representación JSON**


```json
{
    "campo": "valor",
    "hijos": [{
   		 "id": 1,
   		 "valor": "uno"
   	 },
   	 {
   		 "id": 2,
   		 "valor": "dos"
   	 }
    ]
}
```

## Servicios REST en Java

**JAX-RS** Es el API de Java para crear servicios REST.  JAX-RS 1.0 fue liberada en el 2008 para la versión Java EE 6 bajo la especificación JSR-311.

Este API simplifica el proceso de creación de servicios Web mediante Plain Old Java Objects (POJOS) y anotaciones. Mapea las peticiones HTTP con invocaciones de método Java.

**Anotaciones de JAX RS**

<table>
  <tr>
   <td>@Provider
<p>
@Produces</p>
<p>
@Consumes</p>
<p>
@Path</p>
<p>
@Context</p>
<p>
@GET</p>
<p>
@POST</p>
<p>
@DELETE</p>
<p>
@PUT</p>
   </td>
   <td><strong>Anotaciones para Variable de Parámetros</strong>
<p>
@QueryParam</p>
<p>
@PathParam</p>
<p>
@FormParam</p>
<p>
@MatrixParam</p>
<p>
@HeaderParam</p>
<p>
@CookieParam</p>
   </td>
  </tr>
</table>


**Ejemplo de uso básico :**

```
@Path("/demo")
public Class WSDemo{

   @GET
   @Path("/hola")
   public String getHola(){
   	return "Hola";
   }   
}
```


En Java EE 7 se liberó JAX-RS 2.0 mediante la especificación JSR 339.

**JAX-RS 2.0 / JSR 339 :**


*   Introduce elementos que ayudan a la productividad.
*   Simplifica el API
*   Incluye los siguientes aspectos:
    *   API para el Cliente
    *   Llamadas Asincrónicas vía Http
    *   Filtros e interceptores


### Creando un servicio REST en Java

Asegurarse tener la dependencia de Java EE 7 en el pom.xml del proyecto.

```xml
  <dependency>
        	<groupId>javax</groupId>
        	<artifactId>javaee-web-api</artifactId>
        	<version>7.0</version>
        	<scope>provided</scope>
  </dependency>
```

Queremos crear un servicios de nombre **ServicioRestPais** y será expuesto usando la url **/paises.**

```java

/**
 *
 * @author ecabrerar
 */
@Path("/paises")
public class ServicioRestPais {

}
```

Inicialmente vamos a crear una lista estática de países que representará nuestra fuente de datos.


```java

	private List<Pais> getPaises(){
        	List<Pais> lista = new ArrayList<>();
        	lista.add(new Pais(1, "República Dominicana"));
        	lista.add(new Pais(2, "Venezuela"));
        	lista.add(new Pais(3, "Nicaragua"));
        	lista.add(new Pais(4, "Uruguay"));
        	lista.add(new Pais(5, "Haiti"));

        	return lista;
  }
```

Queremos crear un método que nos permita consultar todos los países.


```java

  @GET
  @Path("/todos")
	@Produces({MediaType.APPLICATION_JSON})
	public Response consultarTodas(){   	 
   	return Response.ok(new GenericEntity<List<Pais>>(getPaises()) {}).build();
	}
```


`@GET` indica que estaremos usando el método GET del protocolo http para realizar la consulta
**/todos** representa el punto de acceso para el método que acabamos de crear.
`@Produces({MediaType.APPLICATION_JSON})` Indica que el resultado será en formato JSON.

Para consultar un solo registro, creamos el siguiente método.

```java

    @GET
    @Path("{id}")
    @Produces({ MediaType.APPLICATION_JSON })
    public Response consultarPorId(@PathParam("id") int id) {
   	 List<Pais> lista = getPaises();

   	 return Response.ok(lista.stream().filter(pais -> pais.getId() == id).findAny()
   			 .orElseThrow(() -> new WebApplicationException(Response.Status.NOT_FOUND))).build();
    }
```


`@Path("/{id}")`  `{id}`  indica que el url estará acompañado con un parámetro llamado **id**.
`@PathParam("id") int id` Indica el nombre y el tipo de dato del parámetro.

**Todo junto**
```java
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * @author ecabrerar
 *
 */
@Path("/paises")
public class ServicioRestPais {

    @GET
    @Path("/todos")
    @Produces({ MediaType.APPLICATION_JSON })
    public Response consultarTodas() {
   	 return Response.ok(new GenericEntity<List<Pais>>(getPaises()) {
   	 }).build();
    }

    @GET
    @Path("{id}")
    @Produces({ MediaType.APPLICATION_JSON })
    public Response consultarPorId(@PathParam("id") int id) {
   	 List<Pais> lista = getPaises();

   	 return Response.ok(lista.stream().filter(pais -> pais.getId() == id).findAny()
   			 .orElseThrow(() -> new WebApplicationException(Response.Status.NOT_FOUND))).build();
    }

    private List<Pais> getPaises() {
   	 List<Pais> lista = new ArrayList<>();
   	 lista.add(new Pais(1, "República Dominicana"));
   	 lista.add(new Pais(2, "Venezuela"));
   	 lista.add(new Pais(3, "Nicaragua"));
   	 lista.add(new Pais(4, "Uruguay"));
   	 lista.add(new Pais(5, "Haiti"));

   	 return lista;
    }

}
```

Para activar nuestro web services REST, necesitamos crear una clase que extienda de `javax.ws.rs.core.Application` e indicar la ruta base de los servicios usando la anotación   `javax.ws.rs.ApplicationPath` y sobreescribir el método `getClasses()` donde debemos agregar el servicio que creamos.


```java

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

/**
 *
 * @author ecabrerar
 */

@ApplicationPath("rest")
public class RestConfig extends Application{  

    @Override
    public Set<Class<?>> getClasses() {

   	 Set<Class<?>> classes = new HashSet<>();
   	 classes.add(ServicioRestPais.class);   	 

   	 return classes;
    }
}
```

El ejemplo completo se encuentra aquí [https://github.com/ecabrerar/javaee7-firstcup/tree/master/jaxrs/jaxrs-basic-demo](https://github.com/ecabrerar/javaee7-firstcup/tree/master/jaxrs/jaxrs-basic-demo)

Para acceder a nuestro servicio debemos de utilizar los urls:

* [http://localhost:8080/jaxrs-basic-demo/rest/paises/todos](http://localhost:8080/jaxrs-basic-demo/rest/paises/todos)       Consultar todos
* [http://localhost:8080/jaxrs-basic-demo/rest/paises/1](http://localhost:8080/jaxrs-basic-demo/rest/paises/1)            Consultar el pais con id 1.

Para realizar algunas pruebas, podemos utilizar herramientas como [curl](https://curl.se/), [postman](https://www.postman.com/) o cualquier cliente REST.

Ejemplo utilizando `curl`:

**Petición:**

```bash
curl -X GET -i http://localhost:8080/jaxrs-basic-demo/rest/paises/todos
```

**Salida**:

```json
{
  "pais": [{
	"id": "1",
	"nombre": "República Dominicana"
  }, {
	"id": "2",
	"nombre": "Venezuela"
  }, {
	"id": "3",
	"nombre": "Nicaragua"
  }, {
	"id": "4",
	"nombre": "Uruguay"
  }, {
	"id": "5",
	"nombre": "Haiti"
  }]
}
```

**Petición:**
```bash
curl -X GET -i http://localhost:8080/jaxrs-basic-demo/rest/paises/1
```

**Salida**:

```json
{
  "id": "1",
  "nombre": "República Dominicana"
}
```

Como estamos haciendo unos servicios muy básicos y ambos utilizan el método `GET`, podemos hacer la consulta directamente en el navegador.

![](/images/blog/2017/rest-service-demo-all.png)
![](/images/blog/2017/rest-api-demo-by-id.png)



### Referencias:
* [http://java.dzone.com/articles/whats-new-jax-rs-20](http://java.dzone.com/articles/whats-new-jax-rs-20)
* [http://www.infoq.com/news/2013/06/Whats-New-in-JAX-RS-2.0](http://www.infoq.com/news/2013/06/Whats-New-in-JAX-RS-2.0)

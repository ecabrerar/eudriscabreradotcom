title=Introducción a Rest Assured
date=2019-07-11
type=post
tags=REST,Java, Pruebas de Integración, Rest Assured,Desarrollo de Software
status=published
author=Eudris Cabrera
description=Introducción a Rest Assured.    
summary=Rest Assured es una librería Java para la validación de servicios REST a través de un DSL amigable (lenguajes específicos del dominio) que describe una conexión a un punto final HTTP (Endpoint HTTP) y los resultados esperados. En este artículo vamos a mostrar como realizar pruebas a los endpoints de los servicios REST  utilizando Rest Assured
~~~~~~

### Introducción
Cada vez, es más es común, que las aplicaciones expongan funcionalidades mediante Servicios REST, para luego ser consumida por otras aplicaciones, que pueden ser móviles, microservicios, otros servicios REST, etc.

Cuando desarrollamos un servicio REST o un componente de software cualquiera, las pruebas son una parte esencial del mismo. Son el medio que nos permite asegurar que las cosas funcionan como se esperaba.

Dada la importancia que tienen las pruebas, es importante conocer y usar frameworks que nos permitan desarrollar las pruebas de una manera rápida y sencilla.

A continuación vamos a explorar las bondades de Rest Assured, una herramienta pensada específicamente para probar llamadas a API REST y, en general, cualquier pertición que se ejecute sobre el protocolo HTTP.

### REST Assured
Es una librería Java que proporciona un lenguaje específico del dominio (Domain-specific Language / DSL) para escribir pruebas potentes y sostenibles para los servicios REST.

Visitar:

[https://github.com/rest-assured/rest-assured/wiki/Usage](https://github.com/rest-assured/rest-assured/wiki/Usage)
[http://rest-assured.io](http://rest-assured.io/)



### Configuración

__Maven__

```xml
<dependency>
    <groupId>io.rest-assured</groupId>
    <artifactId>rest-assured</artifactId>
    <version>3.0.2</version>
    <scope>test</scope>
</dependency>
```

__Gradle__
```groovy
testCompile 'io.rest-assured:rest-assured:3.0.2'

```

### Sintaxis
__REST Assured__ utiliza una API Fluida que es compactible con el desarrollo guidado por comportamiento, __Behavior-Driven Development (BDD)__. Esto es __Given / When / Then__, lo que resulta en una prueba que es fácil de leer y se encarga de todo (configuración, ejecución y verificación) con sólo una sola línea de código.


### Parámetros de inicialización (Setup)

 Para realizar nuestras pruebas, podemos auxiliarnos de [JUnit](https://junit.org/junit5/), una framework para realizar pruebas unitarias en Java.

 En nuestro caso de prueba debemos colocar los siguientes paramétros de Rest Assured:  `RestAssured.baseURI` y `RestAssured.port`

```java

    @Before
    public void setup() {
        RestAssured.baseURI = "http://localhost";
        RestAssured.port = 8080;
    }
```

### Prueba Simple
Validar que el endpoint devuelve código estado 200 y que el contenido es del tipo JSON.

```java
given()
  .when()
  .get("jconfdominicana/sessions")
  .then()
  .statusCode(200)
  .and()
  .contentType(ContentType.JSON);

```

Poniendo todo junto

```java
public class JConfDominicanaEndPointTest {

	@BeforeClass
	public static void setup() {
		RestAssured.baseURI = "http://localhost";
		RestAssured.port = 8080;
	}

	@Test
	public void should_response_status_code_200() {

		given()
		.when()
		.get("jconfdominicana/sessions")
		.then()
		.statusCode(200)
		.and()
		.contentType(ContentType.JSON);

	}
}
```
Nos auxiliamos de [JUnit](https://junit.org/junit5/) para realizar los casos de pruebas.


### Validación de datos técnicos en la respuesta

Como comentamos anteriormente, Rest Assured tiene una API fluida compatible con BDD y sus métodos son fáciles de leer.

Una pertición donde se valida la respuesta obtenida del endpoint sería de la siguiente manera:

```java
given().
    pathParam("sessionId", 101)
    .when()
    .get("jconfdominicana/sessions/{sessionId}")
    .then()
    .contentType(ContentType.JSON)
    .body("id", equalTo(101))
    .body("title", equalTo("Pruebas de Integración para Servicios REST usando REST Assured"));

```
### Pruebas parametrizadas

```java
String contenido = given().
               pathParam("sessionId", 101)
               .when()
               .get("jconfdominicana/sessions/{sessionId}")
               .then()
               .statusCode(200)
               .extract()                
               .asString();
```

El código de los ejemplos anteriores se encuentra disponible aquí: [https://github.com/ecabrerar/rest-assured-jconf](https://github.com/ecabrerar/rest-assured-jconf).

__Seguir las instrucciones definidas en el archivo README para la ejecución del proyecto__.


### Otros interesantes features de REST Assured
* Puede serializar POJO y XML
* Se puede integrar con Spring Mock MVC

#### ¿Desea obtener más información?
Leer mis presentaciones en [Pruebas de integración para servicios REST usando Rest Assured](/talks/rest-assured-jconf.html)

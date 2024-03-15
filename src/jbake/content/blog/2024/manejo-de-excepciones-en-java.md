title=Buenas Prácticas para el Manejo de Excepciones en Java
date=2024-03-15
type=post
tags=Java,Excepciones, Buenas Prácticas
status=published
author=Eudris Cabrera
description=Buenas Prácticas para el Manejo de Excepciones en Java 
shareimage=images/blog/2024/063c0f14-7a31-46f4-accb-a7696654b1a6.001.jpg
summary=En informática y programación, el manejo de excepciones es el proceso de dar respuesta a la aparición de eventos no deseados o inesperados que pueden ocurrir durante la ejecución de un programa. En general, una excepción rompe el flujo normal de ejecución y ejecuta un manejador de excepciones pre-registrado; los detalles de cómo se hacen dependen de si se trata de una excepción de hardware o de software y de cómo se implementa la excepción de software. A continuación vamos a conocer algunas prácticas recomendadas sobre la gestión de excepciones en Java.
~~~~~~

En informática y programación, el manejo de excepciones es el proceso de dar respuesta a la aparición de eventos no deseados o inesperados que pueden ocurrir durante la ejecución de un programa.

En general, una excepción rompe el flujo normal de ejecución y ejecuta un manejador de excepciones pre-registrado; los detalles de cómo se hacen dependen de si se trata de una excepción de hardware o de software y de cómo se implementa la excepción de software.

Es importante conocer algunos conceptos fundamentales antes de entrar en las recomendaciones.

### ¿Qué es una excepción?

Una excepción es un evento no deseado o inesperado que ocurre durante la ejecución de un programa, es decir, en tiempo de ejecución, que interrumpe el flujo normal de las instrucciones del programa.

Las excepciones pueden ser capturadas y manejadas por el programa. Cuando ocurre una excepción dentro de un método, crea un objeto.

Este objeto se denomina **objeto de excepción**. Contiene información sobre la excepción, como el nombre y la descripción de la excepción y el estado del programa cuando se produjo la excepción.

### ¿Por qué ocurren?

Una excepción puede ocurrir por muchas razones,algunos de ellos son:

- Entrada de datos por parte de un usuario no válida
- Fallo de un dispositivo
- Pérdida de conexión de red
- Limitaciones físicas (sin memoria de disco)
- Errores de código
- Abrir un archivo no disponible


### ¿Qué es un error?

Un error representa una condición irrecuperable, como que la máquina virtual Java (JVM) se quede sin memoria, fugas de memoria, errores de desbordamiento de pila, incompatibilidad de biblioteca, recursividad infinita, etc.

Los errores suelen estar fuera del control del programador y no debemos tratar de manejarlos.

Algunos ejemplos son **OutOfMemoryError**, **LinkageError** y **StackOverflowError**. Por lo general, bloquean su programa o parte del programa.


### Error vs Exception

**Error:** un error indica un problema grave que una aplicación no debería tratar de detectar.

**Excepción:** la excepción indica condiciones que una aplicación podría intentar capturar.

### Jerarquía de Excepciones

![](/images/blog/2024/063c0f14-7a31-46f4-accb-a7696654b1a6.001.jpg)

Los errores se representan mediante dos tipos de clases derivadas de la clase `Throwable`: `Error` y `Exception`.

La clase **Error** está relacionada con errores de compilación, del sistema o de la JVM.

Estos errores son irrecuperables y no dependen del programador ni debe preocuparse de capturarlos y tratarlos.

Las excepciones están divididas en dos tipos, **Excepciones comprobadas (Checked exceptions) y Excepción No Comprobada (Unchecked Exception).**

### Tipos de Excepciones


![](/images/blog/2024/063c0f14-7a31-46f4-accb-a7696654b1a6.002.jpg)

#### Excepciones comprobadas (Checked exceptions):

Deberán ser capturadas (catch) y gestionadas en el propio método o en algún otro lugar del programa (en otro método anterior en la pila o stack de llamadas). Extienden de la clase `Exception`.

Las clases derivadas de `Exception` son excepciones explícitas. Java obliga a tenerlas en cuenta y comprobar si se producen.


**Ejemplo de uso:**

```java
public class CalculatorException extends Exception {

    private static final long serialVersionUID = 1 L;

    public CalculatorException(String message) {
        super(message);
    }

    public CalculatorException(String message, Throwable cause) {
            super(message, cause);
        }
        .........

}

public class Calculator {

    public Integer sum(Integer a, Integer b) throws CalculatorException {

        if (Objects.isNull(a) || Objects.isNull(b)) {
            throw new CalculatorException("Wrong arguments");
        }

        return a + b;

    }
}

public class ClientCalculator {

    public static void main(String[] args) {

        try {

            Calculator calculator = new Calculator();
            calculator.sum(1, 3);

        } catch (CalculatorException e) {
            // procesar excepción
        }

    }
}
```

En el ejemplo anterior al utilizar `CalculatorException` que extiende `Exception` y por ende se convierte en un excepción comprobada que tenemos que capturar o volver a lanzar. Esto puede resultar tedioso y muchas veces hasta inmanejable.

También podemos encontrar algunas excepciones comprobadas que están por defecto en Java tales como: `ClassNotFoundException`, `IOException`, `SQLException`, entre otras.


#### Excepción No Comprobada (Unchecked Exception):

Estas son excepciones que no necesitan ser declaradas en una cláusula throws. JVM simplemente no obliga a manejarlos, ya que se generan principalmente en tiempo de ejecución debido a errores programáticos. Extienden de la clase `RuntimeException`.

Las `RuntimeException` son excepciones muy frecuentes, normalmente relacionadas con errores de programación. El propio Java durante la ejecución de un programa chequea y lanza automáticamente las excepciones que derivan de `RuntimeException`. 

El programador no necesita establecer los bloques `try/catch` para controlar este tipo de excepciones.

**Ejemplo:**

```java

public class Calculator {

    public Integer sum(Integer a, Integer b) {

        if (Objects.isNull(a) || Objects.isNull(b)) {
            throw new IllegalArgumentException("Wrong arguments");
        }

        return a + b;

    }
}

public class ClientCalculator {

    public static void main(String[] args) {

        Calculator calculator = new Calculator();
        calculator.sum(1, 3);

    }
}
```

`IllegalArgumentException` extiende de `RuntimeException` y no tenemos que capturar la excepción. Con las excepciones no capturadas podemos tener un poco más de flexibilidad.

Otras excepciones no comprobadas que están por defecto en Java son `NullPointerException`, `IndexOutOfBoundsException`, entre otras.

![](/images/blog/2024/063c0f14-7a31-46f4-accb-a7696654b1a6.003.jpg)

### Manejo de Excepciones

El manejo de excepciones en Java es uno de los medios efectivos para gestionar los errores de tiempo de ejecución para que se pueda preservar el flujo regular de la aplicación.

Un buen programa o componente de software debe gestionar correctamente todas o la mayor parte de los errores que se pueden producir.


### Buenas prácticas para el manejo de excepciones

#### 1. Utilizar excepciones no comprobadas (Unchecked Exception) en lugar de excepciones comprobadas (Checked Exception)

Utilice excepciones comprobadas sólo si es necesario, en todos los demás casos, utilice excepciones no comprobadas.

Usar excepciones comprobadas para condiciones recuperables y excepciones de tiempo de ejecución para errores de programación.

Por supuesto, la situación no siempre es blanco o negro. Es una cuestión de evaluar si es probable que un evento permita la recuperación o no. Si cree que es probable que una condición permita la recuperación, utilice una excepción comprobada; si no, utilice una excepción de tiempo de ejecución.

Si no está claro si la recuperación es posible, probablemente sea mejor utilizar una excepción no marcada.

*Tomar en cuenta que las excepciones no comprobadas no obligan al programador a capturarlas y pueden olvidar su tratamiento. Existen ocasiones en las que es necesario capturar las excepciones no comprobadas y darle un tratamiento.*

#### 2. Liberar recursos en un bloque finally o utilizando una sentencia try-with-resource

  Cuando estamos trabajando con archivos, conexiones a base de datos, socket, etc., debemos manejar correctamente los recursos correspondientes a cada uno de estos casos, esto es, cerrar cada recursos luego de su uso para evitar problemas posteriores, como anidamientos de conexiones.

```java
  BufferedReader reader = null;

try {

    reader = Files.newBufferedReader(Paths.get("SonnetI.txt"), StandardCharsets.UTF_8);

    long totalLines = reader.lines().count();
    ...

} catch (IOException ex) {
    ....

} finally {

    if (reader != null) {

        try {

            reader.close();

        } catch (IOException e) {
            ....

        }

    }
}
```
  Como pueden notar en el ejemplo anterior el manejo de los recursos le corresponde al desarrollador, quien debe manualmente cerrar el recurso. Esto puede resultar en una fuente de generación de bugs porque si el programador olvida cerrar el recurso, éste quedará abierto, dando espacio a anidamientos de conexiones o mal uso de los recursos de entrada/salida.


  Una alternativa es el uso de la sentencia `try-with-resource`. Se podrá utilizar `try-with-resource` siempre que implementen la interfaz `Closable`.

```java

  try (BufferedReader reader = Files.newBufferedReader(Paths.get("SonnetI.txt"), StandardCharsets.UTF_8)) {

     long totalLines = reader.lines().count();
     ...

 } catch (IOException ex) {
     ....
 }
```
    
Uso de `try-with-resources` para recursos de base de datos

```java

  try (Connection con = ConnectionManager.getConnection()) {

    try (PreparedStatement stmt = con.prepareStatement(sqlSelect)) {

        try (ResultSet rs = stmt.executeQuery()) {

            while (rs.next()) {

            }
        }
    }

} catch (SQLException ex) {
    ....
}
```   

 Usando el `try` de esa forma nos aseguramos de que el recurso quede cerrado luego de su uso. Esto es posible a que las clases anteriores implementan la interfaz `Closable`.

#### 3. Crear excepciones personalizadas para manejar las excepciones de negocios.

Los nombres de las excepciones comprobadas deben ser claros y significativos. Es recomendable nombrar las excepciones comprobadas haciendo referencia a la causa de la excepción. Puedes tener tu propia jerarquía de excepciones extendiendo de la clase `Exception`. Pero para eventos más específicos lanzar una excepción haciendo referencia al evento ocurrido.

**Por ejemplo:**

![](/images/blog/2024/063c0f14-7a31-46f4-accb-a7696654b1a6.004.jpg)

Lanzar una excepción del tipo `TokenExpiredException` en lugar de `TokenException` para indicar que un token ha expirado.

 **Incorrecto:**

```java
   public void doSomething(String token) throws Exception { ... }
```

**Correcto:**
```java
public void doSomething(String token) throws TokenNotFoundException, TokenExpiredException { ... }
```

Cuanto más específica sea la excepción que lances, mejor. Tenga siempre en cuenta que un compañero de trabajo que no conozca su código (o tal vez usted dentro de unos meses) puede necesitar llamar a su método y manejar la excepción.

Por lo tanto, asegúrese de proporcionarles la mayor cantidad de información posible. Eso hace que su API sea más fácil de entender.


#### 4. Evitar mostrar al usuario los mismos mensajes generados por las excepciones, en su lugar colocar mensajes  personalizados que el usuario final pueda entender sin problemas.

El mensaje de excepción es leído por todos los que tienen que entender lo que ha sucedido cuando la excepción fue reportada en el archivo de log o en su herramienta de monitorización.

Por lo tanto, debe describir el problema con la mayor precisión posible y proporcionar la información más relevante para comprender el acontecimiento excepcional.

Si lanza una excepción específica, lo más probable es que su nombre de clase ya describa el tipo de error. Por lo tanto, no necesitas proporcionar mucha información adicional.

#### 5. Evitar escribir en la consola usando `printStackTrace()`, en su lugar usar un Logger

**Incorrecto :**

```java
  try {
     ....
 } catch (IOException e) {
     e.printStackTrace();
 }
```

**Correcto :**

```java
try {
    ....
} catch (IOException e) {
    LOGGER.error("ocurrrio no esperado,... etc", e);
}
```

Llamar el método `printStackTrace()` puede provocar que dejes al descubierto informaciones sensibles que pueden inducir a filtración de datos que motiven a actividades ilicitas.

#### 6. Usar múltiples catch de excepciones

```java
 try {
     ........
 } catch (IOException ex) {
     throw ex;
 } catch (SQLException ex) {
     throw ex;
 }
```

El ejemplo anterior resulta en una duplicidad de código.

La siguiente forma es más elegante y concisa

```java

try {
    ........
} catch (IOException | SQLException ex) {
    throw ex;
}
```

#### 7. Nunca trates de capturar un `Throwable` o `Error`

 ```java
 
try {

    doSomething();

} catch (Throwable t) {
    //Handling throwable
}
```

La clase `Error` es una subclase de `Throwable`. Estos errores son irrecuperables y no son manejables por la JVM, por lo que la JVM tampoco pudiera llamar el método catch en un tipo `Error`.

#### 8. Nunca lance una excepción desde un bloque `finally`

```java

   try {

       //Lanza una excepción
       doSomething();

   } finally {
       //Si se lanza también una excepción en el bloque finally
       //La excepción original se perderá
       doSomethingElse();
   }
  ```

  En el ejemplo anterior, `doSomethingElse()` nunca debería lanzar una excepción, ya que si el método `doSomething()` lanza una excepción y también el método `doSomethingElse()`,  la excepción lanzada por el método `doSomething()`  se perderá.

  Si el código que maneja en un bloque finally lanza una excepción, debes asegurarte de manejar la excepción o enviarla al logger, pero nunca debes dejar que salga del bloque `finally`.

#### 9. Si capturas una excepción, debe hacer algo con ella, no dejes el bloque `catch` en blanco.

```java
   try {

       doSomething(int i, double x);

   } catch (NumberFormatException e) {
       // excepción capturada pero ignorada
   }
```

Si ignoramos una excepción capturada pudiéramos tener inconvenientes al tratar de encontrar un error en el futuro. Siempre que capturamos una excepción, al menos debemos informar escribiendo a la consola con un logger.

```java
 try {

     doSomething(int i, double x);

 } catch (NumberFormatException e) {
     log.error("Ocurrió un error inesperado: " + e);
 }
```

### Referencias

- <https://www.geeksforgeeks.org/exceptions-in-java/> 
- <https://www.slideshare.net/lemiorhan/java-exception-handling-best-practices-improved-second-version> 
- <https://www.techtarget.com/searchsoftwarequality/definition/error-handling> 
- <https://en.wikipedia.org/wiki/Exception_handling> 
- <https://stackify.com/best-practices-exceptions-java/> 
title=Expresiones Lambdas en Java
date=2015-11-06
type=post
tags=Java,Java SE 8, JDK, JVM, Expresiones Lambdas
status=published
author=Eudris Cabrera
description=Expresiones Lambdas en Java.    
summary=Java SE 8, liberado en marzo del 2014, es la plataforma que incluye la actualización más grande para el modelo de programación Java desde el lanzamiento de la plataforma en 1996. Incluye nuevas funcionalidades e incorpora las características de los lenguaje funcionales, tales como de lambdas o closures. ¿Todavía no te atreves a probar Java 8?
~~~~~~

### ¿Qué es una expresión lambda ?
Una expresión lambda representa una función anónima.
```
λx → x+x
```
Función anónima que toma un número x y devuelve el resultado x + x.

__Alonzo Church__ desarrolló en los años __30's__ el __"Cálculo lambda"__, un sistema formal en lógica
matemática diseñado para investigar la definición de función, la noción de aplicación de funciones y la
recursión.

Una expresión lambda se compone de un conjunto de __parámetros__, un __operador lambda (->)__ y un __cuerpo de la
función__.

__Ejemplo:__
Lambda Java 8

```java

  () -> System.out.println("Hello Lambda");
  x -> x + 10;
  (int x, int y) -> { return x + y; }
  (String x, String y) -> x.length() – y.length();

```

### ¿Por qué Java necesita Expresiones Lambda?
Java necesitaba cambios para simplificar la codificación paralela .
Es muy útil para evitar tener que escribir métodos que sólo utilizamos una vez.
Simplifica cómo pasar comportamiento como un parámetro (podemos pasar expresiones lambda
a métodos como argumentos).

### ¿Qué es programación funcional ?

Un paradigma de programación donde las funciones son entidades de primera clase.

Esto significa, qué las funciones pueden ser usada de la misma forma que usamos enteros (integers) o cadenas de caracteres(strings).

Se pueden pasar funciones como parámetros a otras funciones y pueden ser retornada como resultado de otras funciones.

### ¿Por qué utilizar programación funcional?
* Ley de Moore
* Programación Concurrente
* Inmutabilidad -> El estado no cambia
* Facilidad para programar concurrentemente
* Las funciones siempre devuelven el mismo resultado para cada entrada
* Reducción de la cantidad de líneas de código.
* Código más fácil de testear.

#### ¿Desea obtener más información?
Leer mis presentaciones en [JAVA 8 - MÁS ALLÁ DE LAS EXPRESIONES LAMBDA](http://localhost:8080/talks/java-8-mas-alla-de-las-expresiones-lambda.html)

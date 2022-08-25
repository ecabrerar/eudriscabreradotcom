title=RegEx 101: Guía de supervivencia para entender y usar expresiones regulares
date=2022-08-25
type=post
tags=Java, RegEx, Level Up Friday, Expresiones Regulares
status=draft
author=Eudris Cabrera
description=RegEx 101: Guía de supervivencia para entender y usar expresiones regulares   
shareimage=images/blog/2022/f644e813-ff4f-41c0-af52-30cba1aa0d7c.001.png
summary=Las expresiones regulares son patrones utilizados para encontrar una determinada combinación de caracteres dentro de una cadena de texto. Las expresiones regulares proporcionan una manera muy flexible de buscar o reconocer cadenas de texto. En ésta publicación abordaremos los aspectos básicos que necesita saber para trabajar con expresiones regulares.
~~~~~~

**RegEx 101: Guía de supervivencia para entender y usar expresiones regulares**

**Introducción**

En cómputo teórico y teoría de lenguajes formales, una expresión regular, o expresión racional ( también son conocidas como regex o regexp,​ por su abreviación de las palabras inglesas regular expression), es una secuencia de caracteres que conforma un patrón de búsqueda.
<img src="/images/blog/2022/f644e813-ff4f-41c0-af52-30cba1aa0d7c.001.png" alt=""   style="float: right;margin: 0 0 0 15px;"/>

Se utilizan principalmente para la búsqueda de patrones de cadenas de caracteres u operaciones de sustituciones.

Las expresiones regulares son patrones utilizados para encontrar una determinada combinación de caracteres dentro de una cadena de texto. Las expresiones regulares proporcionan una manera muy flexible de buscar o reconocer cadenas de texto.

**Uso o aplicación de las expresiones regulares**

Su utilidad más común es la de describir un conjunto de cadenas para una determinada función, resultando de utilidad en editores de texto y otras aplicaciones informáticas para buscar y manipular textos.

Numerosos editores de texto y otras herramientas utilizan expresiones regulares para buscar y reemplazar patrones en un texto.

Por ejemplo, si eres usuario de unix o linux, las herramientas proporcionadas por las distribuciones (incluyendo el editor sed y el filtro grep) popularizaron el concepto de expresión regular entre usuarios no programadores, aunque ya era familiar entre los programadores.

Inicialmente los lenguajes de programación no disponían de mecanismo nativo para trabajar con expresiones regulares,  pero, con el tiempo, se ha ido incorporando el uso de expresiones regulares para facilitar programar la detección de ciertas cadenas.

Por ejemplo, Perl tiene un potente motor de expresiones regulares directamente incluido en su sintaxis. Otros lenguajes lo han incorporado como funciones específicas sin incorporarlo a su sintaxis.

**Construcción de una expresión regular**

Una expresión regular es una secuencia de caracteres que actúa como patrón o modelo para la coincidencia y manipulación de series. Un patrón o modelo consta de uno o más literales de carácter, operadores o estructuras.

Elementos básicos más utilizados para crear expresiones regulares:

- ^ Indica el principio de una cadena
- $ Indica el final de una cadena
- () Un agrupamiento de parte de una expresión
- [] Un conjunto de caracteres de la expresión
- {} Indica un número o intervalo de longitud de la expresión
- . Cualquier carácter salvo el salto de línea
- ? 0-1 ocurrencias de la expresión
- + 1-n ocurrencias de la expresión
- \* 0-n ocurrencias de la expresión
- \ Para escribir un carácter especial como los anteriores y que sea tratado como un literal
- | Para indicar una disyunción lógica (para elegir entre dos valores: a|b se tiene que cumplir al menos uno de los dos)

**Ejemplos básicos:**

- [A-Za-z0-9]+$ : Permite caracteres de la A-Z, tanto en minúsculas como mayúsculas y dígitos del 0-9
- z{3} : debe de tener 3 concidencias consecutivas de la letra "z"{zzz}
- \d: solo números  	{0,1,2,3,4,5,6,7,8,9}
- go\*gle: la letra "o" puede no estar una o más veces {ggle, gogle, google, gooogle, goooogle, ...}
- go+gle: la letra "o" puede estar una o más veces  {gogle, google, gooogle, goooogle, ...}
- gray|grey: contiene una de esta dos palabra {gray, grey}
- colou?r:  la letra u es opcional {color, colour}

**Escapes de carácter**

El carácter de barra diagonal inversa (\) en una expresión regular indica que el carácter que lo sigue es un carácter especial (como se muestra en la tabla siguiente) o que se debe interpretar literalmente.

**Ejemplo:**

- \t  : Coincide con una tabulación
- \n : Coincide con una nueva línea
- \r  : Coincide con un retorno de carro
- \d : Coincide con dígitos

**Clases de caracteres**

Una clase de caracteres coincide con cualquiera de un juego de caracteres.

- [character\_group] Coincide con cualquier carácter individual de character\_group. De forma predeterminada, la coincidencia distingue entre mayúsculas y minúsculas.
- [^character\_group] Negación: coincide con cualquier carácter único que no esté en character\_group. De forma predeterminada, los caracteres de character\_group distinguen entre mayúsculas y minúsculas.
- [Primero-Última] Intervalo de caracteres: coincide con cualquier carácter individual del intervalo de primero a último.
- . Carácter comodín: coincide con cualquier carácter único excepto \n.
- \w    Coincide con cualquier carácter de palabra.
- \W    Coincide con cualquier carácter que no sea de palabra.
- \s     Coincide con cualquier carácter de espacio en blanco.
- \S    Coincide con cualquier carácter que no sea de espacio en blanco.
- \d    Coincide con cualquier dígito decimal.
- \D    Coincide con cualquier carácter distinto de un dígito decimal.

**Delimitadores**

Los delimitadores, hacen que una coincidencia tenga éxito o no dependiendo de la posición actual en la cadena, pero no hacen que el motor avance por la cadena ni consuma caracteres.

- ^    De forma predeterminada, la coincidencia debe comenzar al principio de la cadena; en el modo multilínea, debe comenzar al principio de la línea.
- $    De forma predeterminada, la coincidencia se debe producir al final de la cadena o antes de **\n** al final de la cadena; en el modo multilínea, se debe producir antes del final de la línea o antes de \n al final de la línea.
- \A    La coincidencia se debe producir al principio de la cadena.
- \Z    La coincidencia se debe producir al final de la cadena o antes de **\n** al final de la cadena.
- \z    La coincidencia se debe producir al final de la cadena.
- \G    La coincidencia debe producirse en el punto en el que finalizó la coincidencia anterior, o si no había ninguna coincidencia anterior, en la posición de la cadena donde se inició la coincidencia.
- \b    La coincidencia se debe producir en un límite entre un carácter **\w** (alfanumérico) y un carácter \W (no alfanumérico).
- \B    La coincidencia no se debe producir en un límite **\b**.

**Construcciones de agrupamiento**

Las construcciones de agrupamiento definen subexpresiones de una expresión regular y, normalmente, capturan subcadenas de una cadena de entrada.

- (Subexpresión)    Captura la subexpresión coincidente y le asigna un número ordinal basado en uno.
- (?=Subexpresión)    Aserción de búsqueda anticipada positiva de ancho cero.
- (?<=Subexpresión)    Aserción de búsqueda tardía positiva de ancho cero.
- (?<!Subexpresión)    Aserción de búsqueda tardía negativa de ancho cero.


**Cuantificadores**

Un cuantificador especifica cuántas instancias del elemento anterior (que puede ser un carácter, un grupo o una clase de caracteres) debe haber en la cadena de entrada para que se encuentre una coincidencia.

- \* Coincide con el elemento anterior cero o más veces.
- + Coincide con el elemento anterior una o más veces.
- ? Coincide con el elemento anterior cero veces o una vez.
- {N}    Coincide con el elemento anterior exactamente n veces.
- {N,}    Coincide con el elemento anterior al menos n veces.
- {N,M}    Coincide con el elemento anterior al menos n veces, pero no más de m veces.

**Recursos para validar expresiones regulares en línea**

<https://regex101.com/>

<div style="width:100%;height:0;padding-bottom:50%;position:relative;"><iframe src="https://giphy.com/embed/EXny1nJL9aoRZy0Cs7" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/regex-101-EXny1nJL9aoRZy0Cs7">via GIPHY</a></p>


**Expresiones Regulares en Lenguaje de Programación**

**Java**

**Métodos clase String:**

boolean matches(String regex)

**Ejemplo I:**

"cualquier palabra".matches("[A-Za-z0-9]+$")

String replaceAll(String regex, String replacement)

**Ejemplo II:**

"cualquier palabra".replaceAll("\\s", "")

**Paquete java.util.regex**

- Pattern
- Matcher

**Ejemplo I:**

Pattern pattern = Pattern.compile("[^A-Za-z ]\*", Pattern.CASE\_INSENSITIVE);

Matcher matcher = pattern.matcher("cualquier palabra");

boolean matchFound = matcher.find();

<script id="asciicast-517063" src="https://asciinema.org/a/517063.js" async></script>

**SQL**

REGEXP\_LIKE ( expression, pattern [, match\_parameter ] )

Usando Live SQL hicimos varios ejemplos

<https://livesql.oracle.com/apex/livesql/s/k8zkivxrwp3xddekpqldtecc8>

**Ejemplo I:**

Condición para hacer coincidir una o varias alternativas

SELECT first\_name FROM hr.employees WHERE REGEXP\_LIKE (first\_name, 'Jo(hn|shua|se)');

Este ejemplo devolverá los nombres John,Joshua,John,John,Jose Manuel


**Ejemplo II:**

Condición REGEXP\_LIKE para que coincida con el comienzo de una cadena.

SELECT last\_name FROM hr.employees WHERE REGEXP\_LIKE (last\_name, '^A(\*)');

Este ejemplo de REGEXP\_LIKE devolverá todos los empleados cuyo apellido comience con 'A'.

**Ejemplo III:**

Condición REGEXP\_LIKE para hacer coincidir al final de una cadena.

SELECT last\_name FROM hr.employees WHERE REGEXP\_LIKE (last\_name, '(\*)n$');

Este ejemplo de REGEXP\_LIKE devolverá todos los empleados cuyo apellido termine en 'n'.

Agradecer a Ramón Nicolas Alonzo (Shaggy) que nos dió valiosos aportes sobre Expresiones Regulares

**Referencias:**

- <https://sg.com.mx/content/view/545>
- <https://www.adictosaltrabajo.com/2015/01/29/regexsam/>
- <https://www.ibm.com/docs/es/i/7.3?topic=expressions-regular>
- <https://docs.microsoft.com/es-es/dotnet/standard/base-types/regular-expression-language-quick-reference>
- <https://cheatography.com/davechild/cheat-sheets/regular-expressions/pdf/>
- <https://www.oreilly.com/library/view/introducing-regular-expressions/9781449338879/>
- <https://www.techonthenet.com/oracle/regexp\_like.php>
- <https://regex101.com/>

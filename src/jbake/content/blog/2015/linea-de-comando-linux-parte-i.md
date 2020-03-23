title=Línea de comando Linux (Parte I) date=2015-11-03 type=post tags=Open Source,Linux,GNU/Linux status=draft author=Eudris Cabrera description=Línea de comando Linux (Parte I)~~~~~~

Por <a title="Eudris Cabrera" href="http://www.linkedin.com/in/eudriscabrera" target="_blank">Eudris Cabrera</a><strong>3 de Noviembre de 2015</strong>

En artículos anteriores, <a title="Introducción a Linux" href="http://radhamessilverio.com/radhamessilverio/2015/05/10/introduccion-a-linux/" target="_blank">Introducción a Linux</a>, <a href="http://radhamessilverio.com/radhamessilverio/2015/05/15/entendiendo-el-sistema-de-archivo-de-linux/" target="_blank">Entendiendo el sistema de archivo de Linux </a> y <a href="http://radhamessilverio.com/radhamessilverio/2015/06/14/gestion-de-paquetes-en-linux/" target="_blank">Gestión de paquetes en Linux</a>,<a href="http://radhamessilverio.com/radhamessilverio/2015/07/01/particiones-en…ento-del-disco/" target="_blank">Particiones en Linux: Uso y mantenimiento del disco</a>, presentamos los términos más comunes alrededor de <a href="http://www.linux.com/">Linux</a>, las tres grandes familias de distribuciones disponibles en la comunidad Linux, como está organizado el sistema de archivo de Linux, herramientas para la gestión de paquetes en Linux y los tipos de particiones, destacando algunas herramientas básicas para el mantenimiento del disco y otros medios de almacenamiento.

En ésta ocasión vamos a realizar una introdución a la "Línea de comando Linux", donde vamos a conocer las características más importantes de la línea de comando y a descubrir el verdadero potencial de Linux utilizando la línea de comando.

Línea de comandos

Interfaz de Línea de Comandos (en inglés, Command Line Interface (CLI)), es un método que permite a las personas dar instrucciones a algún programa informático por medio de una línea de texto simple.

Las interfaces de Línea de Comandos pueden emplearse interactivamente, escribiendo instrucciones en alguna especie de entrada de texto, o pueden utilizarse de una forma mucho más automatizada (archivo batch), leyendo comandos desde un archivo de scripts. Por lo regular, son usadas por administradores de sistemas como herramienta primaria de trabajo especialmente en sistemas operativos basados en Unix.

Terminología

Los conceptos de Consola, Terminal y Shell no son lo mismo, aunque suelen utilizarse como sinónimos.

Consola
-------

En los primeros años de la computación, estos tres elementos eran hardware separado. La consola no era más que un monitor y un teclado, que no tenía la capacidad de computación. Es conectado a un terminal, a través de una interfaz en serie, siendo el más común el conector RS-232.

Terminal
--------

Un terminal es similar a un punto final a un mainframe. Por lo general, tenía algunas capacidades de computación y puede comunicarse a través de una red, o alguna forma de conexión especializada, a un mainframe. Un terminal también proporciona derechos administrativos sobre el sistema, y por eso se mantiene generalmente en una habitación cerrada. Las consolas de la zona de los empleados conectados a estos terminales, les permite trabajar sin tener acceso administrativo a la computadora central.

Consolas y terminales finalmente se fusionaron en un solo dispositivo, siendo el más notorio de los terminales VT emulados en distribuciones de Linux.

Shell
-----

El término genérico shell se utiliza para denominar un programa que sirve de interfaz entre el usuario y el núcleo (kernel ) del sistema GNU/Linux.

El shell, como programa, es una utilidad que permite a los usuarios interactuar con el kernel por interpretación de comandos que el mismo usuario introduce en la línea de comandos o en los ficheros de tipo shell script y proporciona el resultado en la pantalla.

Características
---------------

*Es capaz de leer la entrada del usuario y proporcionar el resultado en la pantalla.*Puede ser textual (como el CLI) o gráfica (como GUI de Windows).*En informática de hoy en día, un shell es mucho más que una simple interfaz entre el usuario y el sistema. Es responsable de la gestión de procesos, ventanas, aplicaciones, comandos y otros aspectos del sistema.

\**Destacar texto

<div style="border: 1px solid red; padding: 5px; margin: 5px;">
Los recién llegados al mundo de Unix / Linux se suelen confundir, cuando se trata  de la diferencia entre un terminal,
una consola y un shell.
Desde la perspectiva del usuario, puede haber poca o ninguna diferencia entre ellos, pero en realidad, el usuario
utiliza una consola para conectarse a un terminal, con el fin de mirar el shell en ejecución en el equipo.
</div>

Shells Interactivos Una vez iniciado el shell interactivo, se muestra un prompt de cara al usuario,indicándole que puede introducir una línea de comando.

Tras la introducción, el shell asume la responsabilidad de validarla y poner los procesos necesarios en ejecución, mediante una serie de fases:

Leer e interpretar la línea de comandos. Evaluar los caracteres “comodín” como $ * ? u otros. Gestionar las redirecciones de E/S necesarias, los pipes y los procesos en segundo plano (background) necesarios (&). Manejar señales. Preparar la ejecución de los programas.

Normalmente, las líneas de comandos podrán ser ejecuciones de comandos del sistema, comandos propios del shell interactivo, puesta en marcha de aplicaciones o shell scripts.

Shells Disponibles La independencia del shell respecto al kernel del operativo (el shell es sólo una capa de interfaz), nos permite disponer de varios de ellos en el sistema.

Algunos de los más comunes son:

a) El shell Bash (bash). El shell Linux por defecto. b) El shell Bourne (sh). Éste ha sido desde siempre el shell estándar UNIX, y el que todos los UNIX poseen en alguna versión. Normalmente,es el shell por defecto del administrador (root). En GNU/Linux suele ser el Bash, una versión mejorada del Bourne. El sh fue creado por Stephen Bourne en AT&T a finales de los setenta. El indicador (o prompt) por defecto suele ser un ’$’ (en root un ’#’).

c) El shell Korn (ksh). Es un superconjunto del Bourne (se mantiene cierta compatibilidad), escrito en AT&T por David Korn (a mediados de los ochenta), en el cual se hizo cierta mezcla de funcionalidades del Bourne y del C, más algún añadido. El prompt por defecto es el $.

d) El shell C (csh). Desarrollado en la Universidad de Berkeley por Bill Joy a finales de los 70's Añade elementos interesantes al Shell Bourne , como un histórico de comandos, alias,aritmética desde la línea de comandos, completa nombres de ficheros y control de trabajos en segundo plano.

El prompt por defecto para los usuarios es ‘%’.

<div style="position: absolute; right: 0px; width: 400px; border: 2px solid black; padding: 10px;">
Una forma rápida de conocer bajo qué shell nos encontramos como usuarios es mediante la variable $SHELL, desde una línea de comandos con la instrucción:

echo $SHELL
</div>

<h3>Referencias:</h3><b>Libros:</b>

<b>GNU/Básico : Antonio Perpiñan</b><a href="http://codigolibre.org/"><b>http://codigolibre.org/</b></a>

<b>After the software wars : Keith Curtis</b><a href="http://keithcu.com"><b>http://keithcu.com</b></a>

<a href="http://www.uoc.edu/masters/oficiales/img/871.pdf"><b>Administración Avanzada de GNU/Linux</b></a>

<strong>¿Desea obtener más información?</strong> Leer mis presentaciones en <a title="Slideshare" href="http://www.slideshare.net/eudris" target="_blank">Slideshare</a>

<a href="http://www.slideshare.net/eudris/introduccion-a-gnu-linux">Introduccion a GNU / Linux</a><a href="http://www.slideshare.net/eudris/estructura-del-sistema-de-archivos-gnu-linux">Estructura del sistema de archivos GNU/Linux</a><a href="http://www.slideshare.net/eudris/administracin-bsica-de-gnu-linux" target="_blank">Fundamentos de GNU/Linux</a><a href="http://www.slideshare.net/eudris/fundamentos-de-gnu-linux" target="_blank">Administración Básica de GNU/Linux</a><a href="http://www.slideshare.net/eudris/lnea-de-comandos-gnulinux" target="_blank"> Línea de Comandos GNU/Linux</a>

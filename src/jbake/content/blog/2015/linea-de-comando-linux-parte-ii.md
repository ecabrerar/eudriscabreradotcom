title=Línea de comando Linux (Parte II)
date=2015-11-07
type=post
tags=Open Source, Linux, GNU Linux
status=published
author=Eudris Cabrera
description= Línea de comando Linux (Parte II)
summary=Este es nuestro segundo artículo sobre "Línea de comando Linux". En esta oportunidad vamos a descubrir el verdadero potencial de Linux utilizando la línea de comando.
~~~~~~


### Conociendo las variables del sistema
A través de la Línea de comando podemos tener acceso a un grupo de variables de entorno que nos revela información importante sobre el sistema.

Las diferentes variables del entorno pueden verse con el comando __env__.
```sh
$ env
```
También puedes consultarla usando el comando "echo".

__Ejemplo :__
```sh
echo $NOMBRE_VARIABLE_SISTEMA
```
Variables del sistema disponibles:
---
|Variable | Descripción|
| ------ | ------ |
|HOME | Directorio raíz del usuario |
|LOGNAME|  Id del usuario en el login |
|PATH   |     Ruta |
|SHELL |   Shell del usuario |
|PS1   |     Prompt del shell, el usuario puede cambiarlo |
|MAIL  |   Directorio del buzón de correo |
|TERM  |   Tipo de terminal que el usuario utiliza |
|PWD   |    Directorio actual del usuario |

Variables de entorno y variables shell
---

El comando __unset__ sirve para desactivar una variable y quitarla de la lista de
variables shell.

El comando __set__ es útil para controlar muchos aspectos del modo de trabajo de
bash (o de otros shells).

Puede activar las diferentes opciones de set con un __-__ y desactivarlas con un __+__.

export
---
Se utiliza para transferir el valor de una variable para que pueda ser accesible
a todos los subshells (subprocesos).
__Sintaxis:__
```sh
$ export VARIABLE=valor
```

Shell scripts
---
Son archivos de texto que contienen secuencias de comandos de sistema, más una serie de comandos propios del shell interactivo, más las estructuras de control necesarias para procesar el flujo del programa (tipo while, for, etc.).

En cierta manera, podemos ver el shell script como código de un lenguaje interpretado que se ejecuta sobre el shell interactivo correspondiente.

Para el administrador, los shell scripts son muy importantes básicamente por dos razones:
1) La configuración del sistema y de la mayoría de los servicios proporcionados
se hacen mediante herramientas proporcionadas en forma de shell scripts.
2) La principal forma de automatizar procesos de administración es mediante la
creación de shell scripts por parte del administrador.

Programación scripts en Bash
---

Todos los scripts Bash tienen que comenzar con la línea:
```bash
#!/bin/bash
```
Esta línea le indica al shell actual usado por el usuario, con qué shell hay que ejecutar el
script que aparece a continuación.

__Ejemplo:__
```bash
#!/bin/bash
# Un script simple
ls -l > listado.txt
```
El script puede ejecutarse de dos modos diferentes:
1) Por ejecución directa desde la línea de comandos, siempre que tenga permiso de ejecución. Si no se da el caso, ponemos el permiso con: __chmod +x script__.
2) Por ejecución mediante el shell, llamamos al shell explícitamente:
bash script.

Entrada de datos
---
Los scripts también pueden ser interactivos, y nos pueden pedir un dato (por ejemplo, un ruta) para
luego tomar esa variable para el resto del script. Si queremos pedir un argumento haríamos lo
siguiente:
```bash
#!/bin/bash
echo $1
```
Y eso aplicándolo a un script sencillo podría resultar en un pequeño script que nos pregunte el
nombre:
```bash
#!/bin/bash
echo -e "Escribe tu nombre, por favor: "
read nombre
echo "Encantado de saludarte, $nombre"
```

Variables
---
Una variable es un nombre al cual se le puede asociar un valor, tal valor puede cambiar durante la
ejecución de un programa.
```bash
#!/bin/bash
#variables
SOURCEDIR=/home/user/Documents/
DESTDIR=/media/diskid/user_backup/Documents/
cp -r $SOURCEDIR $DESTDIR
```

En un script puede emplear ciertas variables especiales ($1, $2, ...) para referenciar los parámetros
que el usuario empleó al iniciarlo. $1 tendrá el valor del primer parámetro, $2 del segundo y así
sucesivamente.
El siguiente script ejemplifica su uso:
```bash
#!/bin/bash
echo "Creando $2.tar.gz de $1"
mkdir $2
cp -rf $1/* $2
tar cvf $2.tar
gzip $2.tar
```

Puedes obtener más información sobre este tipo de scripts en [Bash Guide for Beginners](http://tldp.org/LDP/Bash-Beginners-Guide/html/)

#### ¿Desea obtener más información?
Leer mis presentaciones en :
[![](https://public.slidesharecdn.com/images/logo/linkedin-ss/SS_Logo_Desktop_Black.png?ef34b4628a)](http://www.slideshare.net/eudris)

[Introduccion a GNU / Linux](http://www.slideshare.net/eudris/introduccion-a-gnu-linux)
[Estructura del sistema de archivos GNU/Linux](http://www.slideshare.net/eudris/estructura-del-sistema-de-archivos-gnu-linux)
[Fundamentos de GNU/Linux](http://www.slideshare.net/eudris/administracin-bsica-de-gnu-linux)
[Administración Básica de GNU/Linux](http://www.slideshare.net/eudris/fundamentos-de-gnu-linux)
[Línea de Comandos GNU/Linux](http://www.slideshare.net/eudris/lnea-de-comandos-gnulinux)

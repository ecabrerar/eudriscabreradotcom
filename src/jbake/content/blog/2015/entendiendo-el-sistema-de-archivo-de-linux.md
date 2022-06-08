title=Entendiendo el sistema de archivo de Linux
date=2015-05-14
type=post
tags=Open Source, Linux, GNU Linux
status=published
author=Eudris Cabrera
description=Entendiendo el sistema de archivo de Linux
shareimage=images/blog/2015/Linux-Directory-Structure-300x243.jpeg
summary= En ésta publicación vamos a explorar como está organizado el sistema de archivo de Linux. Dando a conocer los aspectos más relevantes.
~~~~~~

## Qué es un Sistema de Archivos?
[http://es.wikipedia.org/wiki/Sistema_de_archivos](http://es.wikipedia.org/wiki/Sistema_de_archivos)
El sistema de archivos (en inglés:filesystem) es el componente del sistema operativo encargado de administrar y facilitar el uso de las memorias periféricas, ya sean secundarias o terciarias. Sus principales funciones son la asignación de espacio a los archivos, la administración del espacio libre y del acceso a los datos resguardados. Estructuran la información guardada en una unidad de almacenamiento (normalmente un disco duro de una computadora), que luego será representada ya sea textual o gráficamente utilizando un gestor de archivos.

### Organización del Sistema de Archivos en Linux

Linux reside bajo un árbol jerárquico de directorios muy similar a la estructura del sistema de archivos de plataformas Unix. Todos el sistema de archivos de Linux tiene un origen único __"la raíz o root"__ representada por __/__.

Bajo este directorio se encuentran todos los ficheros a los que puede acceder el sistema operativo. Estos ficheros se organizan en distintos directorios cuya misión y nombre son estándar para todos los sistemas Linux.

Linux considera cada archivo,directorio, dispositivo, y vínculo como un archivo colocado en esta estructura.

Para garantizar la compatibilidad y portabilidad, los sistemas Linux cumplen con el estándar __FHS (Filesystem Hierarchy Standard, Estándar de jerarquía del sistema de archivos)__ [http://es.wikipedia.org/wiki/Filesystem_Hierarchy_Standard](http://es.wikipedia.org/wiki/Filesystem_Hierarchy_Standard).

FHS se define como un estándar que detalla los nombres, ubicaciones, contenidos y permisos de los archivos y directorios.

![](/images/blog/2015/Linux-Directory-Structure-300x243.jpeg)
Estructura de directorio de Linux


Inode (inodo, nodo-i o nodo índice)
---
Es una estructura de datos usada para almacenar la información acerca de cada archivo, incluyendo:

* Puntero a la posición física en el disco
* El nombre
* La identificación del dueño y grupo
* Reglas de acceso
* Tamaño
* Fecha y tiempo que el archivo fue accedido por última vez
* Fecha y tiempo de la última modificación
* Fecha y tiempo de la última modificación del inode
* Número de vínculos (links) al archivo

El nombre del archivo es almacenado en el directorio y asociado a su propio __inode__.

Cada archivo tiene un inode asociado a él, aunque cada archivo puede tener más de un nombre a través del uso de vínculos, cada archivo tiene sólo un inode.

![](/images/blog/2015/Pantaila-argazkia-300x216.png)


Use el comando ls -i para determinar el número de inodes de cualquier archivo.
```sh
$ ls -i  nombre-archivo
```
También podemos usar el comando stat para tales fines.
```sh
$ stat nombre-archivo
```
Sistemas de archivos más comunes

FAT, FAT16, FAT32:
---
Sistema de archivos de MS-DOS, Windows 95 y Windows 98.
Se sigue utilizando por su sencillez y porque es reconocido por todos los sistemas operativos.
Es un sistema de archivos muy frágil y no es tolerante a fallos, además de ser lento con respecto a los otros.

NTFS:
---
Sistema de archivos de Windows NT, 2000, XP y 2003.
Es un sistema más sofisticado y rápido que es anterior y el actual estándar de Microsoft.
Es un sistema de archivos cuya implementación es propietaria y cerrada, por lo que no es reconocido en su totalidad por todos los sistemas operativos.

EXT2:
---
Sistema de archivos estándar de Linux, su organización interna permite no necesitar defragmentación (fenómeno que se da en otros sistemas por el cual los archivos se distribuyen de forma que el tiempo que se tarda en acceder a ellos se incrementa, incrementando el tiempo de acceso a disco).

EXT3:
---
Es la extensión de EXT2, incorpora tolerancia a fallos permitiendo una rápida recuperación del sistema cuando el ordenador se bloqueó o apagó inesperadamente.

ReinserFS y XFS:
---
Sistemas de archivos de alto rendimiento y rapidez que mejoran los sistemas anteriores.
Algunos medios de almacenamiento no contienen un sistema de archivos real.

__Por ejemplo:__
Las cintas (tape drives) son accesadas secuencialmente.

#### Tipos de Archivos
Linux soporta diferente tipos de sistemas de archivos y utiliza el primer carácter del bloque de permisos para identificar el tipo de archivo.

En su tabla de inode Linux no diferencia entre archivos y directorios. El sistema operativo sabe si es un archivo regular o un directorio por el carácter de tipo.

#### Archivos físicos:
Estos son los archivos en el sentido más conocido, es decir, un fragmento de información con un nombre.

#### Directorios:
También llamados carpetas son archivos (nodos) que forman parte de la estructura jerárquica. Se conceptualizan como contenedores de archivos, aunque realmente son archivos que contienen una lista de de otros archivos.

#### Enlaces:
Son archivos especiales que permiten que contienen una suerte de atajo a otros archivos y que permiten acceder a dichos archivos desde distintas rutas sin tener que tener más que una copia del archivo original.

Los enlaces se clasifican en dos tipos:
Enlaces simbólicos y Enlaces físicos.

#### Enlaces simbólicos:
son punteros virtuales (accesos directos) a un archivo. El borrado de uno o todos los enlaces simbólicos que apunten a un archivo no afectan al archivo original.

Para crearlos se utiliza el siguiente comando:
```sh
$ ln - s nombre_archivo nombre_enlace
```

#### Enlaces físicos: (También llamados rígidos)
Representan un nombre alternativo de un mismo archivo.
La eliminación de uno o varios enlaces físicos no afectará al archivo original mientras no se eliminen todos los enlaces.
Tienen como limitación el hecho de que sólo es posible crear enlaces físicos dentro de un único e idéntico sistema de archivo.

Para crearlos se utiliza el siguiente comando:
```sh
$ ln nombre_archivo nombre_enlace
```

#### Archivos virtuales:
No son archivos reales, pues solo existen en la memoria en forma de procesos y son accesibles desde el sistema de archivos.

La mayoría de estos archivos se ubican en el directorio __/proc__ y como procesos se crean y se destruyen en cada sesión. Acceder a ellos nos permite obtener información del sistema (memoria,procesador, particiones, etc)

#### Archivos de dispositivo:
Estos archivos, ubicados en el directorio __/dev__ permiten acceder a los distintos dispositivos conectados al computador.
Las unidades de almacenamiento y otros dispositivos, al ser tratados como archivos soportan tareas de direccionamiento y redireccionamiento.

#### ¿Desea obtener más información?
Leer mis presentaciones en :
[![](https://public.slidesharecdn.com/images/logo/linkedin-ss/SS_Logo_Desktop_Black.png?ef34b4628a)](http://www.slideshare.net/eudris)

* [Introduccion a GNU / Linux](https://www.slideshare.net/eudris/introduccion-a-gnu-linux)
* [Estructura del sistema de archivos GNU/Linux](https://www.slideshare.net/eudris/estructura-del-sistema-de-archivos-gnu-linux)
* [Fundamentos de GNU/Linux](https://www.slideshare.net/eudris/fundamentos-de-gnu-linux)

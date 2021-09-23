title=Control de versiones usando Subversion
date=2015-04-24
type=post
tags=Subversion,SVN, Control de Versiones
status=published
author=Eudris Cabrera
description=Control de versiones usando Subversion.    
summary= En artículos anteriores presentamos varias opciones para el manejo y administración de código fuente utilizando sistemas de control de versiones de código abierto. En esta ocasión vamos a presentar como realizar control de versiones usando Subversion.
~~~~~~

## ¿Qué es un sistema de control de versiones ?

Es un software que administra el acceso a un conjunto de archivos, y mantiene un historial de cambios realizados.

## ¿En que consiste el control de versiones ?.
Se llama control de versiones a la gestión de los diversos cambios que se realizan sobre los elementos de algún producto o una configuración del mismo.

![](/images/blog/2015/esquema_pe-300x132.gif)


El control de versiones es útil para guardar cualquier documento que cambie con frecuencia, como una novela, o el código fuente de un programa.

## Subversión
Probablemente sea el sistema de control de versiones con la adopción más amplia (Seguido muy de cerca de GIT). Proyectos de mucha envergadura, como SourceForge, Apache, y muchos otros también utilizan Subversión como repositorio.

### Instalando Subversión

Subversion está construido sobre una capa de portabilidad llamada APR (la biblioteca Apache Portable Runtime), lo cual significa que Subversión debería funcionar en cualquier sistema operativo donde lo haga el servidor httpd Apache: Windows, Linux, todos los sabores de BSD, Mac OS X, Netware y otros.

La manera más sencilla de obtener Subversión es descargando un paquete binario construido para su sistema operativo. El sitio web de Subversion (http://subversion.tigris.org) dispone a menudo de estos paquetes disponibles para su descarga, publicados por voluntarios. El sitio web contiene generalmente paquetes que incluyen instaladores gráficos para los usuarios de los sistemas operativos de Microsoft. Si usted usa un sistema operativo Unix o similar, puede usar el sistema nativo de distribución de paquetes de su sistema (RPMs, DEBs, el árbol de ports, etc.) para obtener Subversión.

También puedes crear una cuenta en un servicio de alojamiento gratuito en lugar de instalar tu propio servidor de subversión.
Algunos sitios donde puedes crear tu cuenta gratuita:

* https://www.assembla.com/home
* http://unfuddle.com/
* http://www.cloudforge.com/
* https://sliksvn.com/

### Terminologías comúnes

* Repositorio
* Versión o Revisión
* Conflicto
* Resolver
* Trunk o Rama Principal
* Branches o bifurcaciones (ramas)
* Tag o Rotulado (Etiquetado)
* Merge o Fusión
Desplegar (Check-out, checkout)
Publicar o Enviar (commit, check-in)
Lista de cambios (changelist, changeset, patch)
Actualización (sync ó update)

### Estructuración de un repositorio en SVN
A continuación vamos a discutir la forma de estructurar su repositorio con el fin de aprovechar al máximo las posibilidades de Subversión. Un repositorio Subversion consta de tres directorios: branches(ramas), tags(etiquetas) y trunk(tronco o troncal).

![](/images/blog/2015/subversion-estructura-ramas-tags.gif)


#### Trunk:
contiene el código de desarrollo más reciente en todo momento. Aquí es donde usted trabaja hasta su próxima gran versión del código. En otras palabras es la rama principal, donde el código fuente siempre refleja un estado listo para una versión de producción.
Ejemplo:
https://svn.example.com/svnroot/project/trunk Frecuentemente algunas personas sólo utilizan el trunk para guardar su código. Extraen cierta revisión y luego continúa el desarrollo. Esto no es bueno. No es para ti, no para su producto.

El trunk sólo se debe utilizar para desarrollar un código que será su próxima versión. No marcar el trunk con los números de versión o nombres de liberación. Sólo mantener el trunk en el "modo de desarrollo" en todo momento.

#### Branches:

Son ramificaciones del trunk con el propósito de realizar modificaciones al código fuente de algún producto, manteniendo intacto el código fuente de nuestra rama principal.

#### Tags:

Las etiquetas son, al igual que las ramas, las copias de su código. Etiquetas, sin embargo, no se van a utilizar para el desarrollo activo. Se marca (etiqueta) de un estado seguro de su código.

### Comandos basicos de Subversión

`checkout` - Como crear una copia de trabajo
El proceso de obtener del repositorio una copia del proyecto se conoce como checkout. El parametro que se pasa al comando ademas del path en el repositorio que queremos copiar es el nombre de la carpeta donde colocaremos la copia


![](/images/blog/2015/flujo-svn-300x205.png)

```bash
$ svn co https://svn.example.com/svnroot/project/trunk proyecto_ejemplo
```

`info` - Como obtener informacion basica del repositorio

Al cambiarnos dentro del directorio de la copia de trabajo, Subversion puede reconocer que estamos utilizando un repositorio. En cualquier momento podemos obtener los datos del repositorio donde estamos conectados utilizando el comando info:

```bash
$ cd proyecto_ejemplo
$ svn info
```

`status` - Como conocer el estado de nuestras modificaciones

Una vez que comenzamos a hacer modificaciones dentro del directorio del proyecto, Subversion lleva la cuenta de los cambios que hemos realizado y en cualquier momento podemos consultarlos:
```bash
$ svn status
```

`add` - Como agregar documentos al proyecto
Para agregar ese archivo al proyecto, utilizamos el comando add:
```bash
$ svn add info.txt
```

`commit` - Como guardar nuestros cambios en el repositorio

Podemos hacer todos los cambios que necesitemos en nuestra copia de trabajo, si bien se recomienda subir la informacion al menos al final de cada sesion de trabajo y de preferencia cada vez que terminemos una tarea especifica de edición. La razón es que mientras más tiempo pasemos sin subir los cambios, más dificil puede resultar integrarlos con otros cambios al repositorio, especialmente si muchas personas tienen acceso al mismo.

A la operacion de subir los cambios al repositorio se le llama commit. Una vez que hemos terminado nuestra sesion de trabajo, utilizamos ese comando para guardarlos en el repositorio:
```bash
$ svn commit -m 'se agrego archivo info'
```

`update` - Como trabajar con la version mas reciente

Actualizar nuestra copia de trabajo del repositorio, para asegurarnos de trabajar con la version mas reciente de nuestros documentos. El comando para hacer esto se llama update:

```bash
$ svn update
```

 **¿Desea obtener más información?**
 Leer mis presentaciones en :
[![](https://public.slidesharecdn.com/images/logo/linkedin-ss/SS_Logo_Desktop_Black.png?ef34b4628a)](http://www.slideshare.net/eudris)
 [Sistemas de control de versiones](http://www.slideshare.net/eudris/sistemas-de-control-de-versiones-23223685)
 [Control de versiones con subversion](http://www.slideshare.net/eudris/control-de-versiones-con-subversion-27153628)

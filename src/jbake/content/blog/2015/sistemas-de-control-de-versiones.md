title=Sistemas de Control de Versiones
date=2015-04-06
type=post
tags=Control de Versiones
status=published
author=Eudris Cabrera
description=Sistemas de Control de Versiones    
summary=Los programadores a través del tiempo han usado diversos métodos  para compartir su código fuente en un ambiente de desarrollo colaborativo. Si alguna vez ha colaborado con otras personas en un proyecto, usted sabe la frustración de constante intercambio de archivos. En el siguiente artículo trataremos los sistemas de control de versiones, explicando como funcionan y sus principales características.
~~~~~~
## ¿Qué es un sistema de control de versiones ?
Es un software que administra el acceso a un conjunto de archivos, y mantiene un historial de cambios realizados.
![](/images/blog/2015/vc_logos-300x242.png)

El control de versiones es útil para guardar cualquier  documento que cambie con frecuencia, como una novela, o el código fuente de un programa.

### ¿Cómo funciona ?
Normalmente consiste en una copia maestra en un repositorio central, y un programa cliente con el que cada usuario sincroniza
su copia local.

Esto permite compartir los cambios sobre un mismo conjunto de archivos.

Además, el repositorio guarda registro de los cambios realizados por cada usuario, y permite volver a un estado anterior en caso de necesidad.

### ¿Por qué son necesarios?

Todos los sistemas de control de versiones ofrecen funcionalidades que ayudan al manejo y control del código fuente, podemos mencionar las siguientes:

### Actualiza archivos modificados
El cliente recorre nuestro código y sincroniza nuestra copia local con el repositorio.

### Copias de seguridad centralizadas
Solo el administrador debe preocuparse de realizar copias de seguridad en el repositorio.  Esto se automatiza fácilmente con una tarea cron  o similares.

### Historial de cambios
El repositorio guarda registro de todos los cambios realizados. Es posible recuperar cualquiera de las versiones anteriores de cualquier archivo.

Si alguien borra todos los archivos, podemos volver atrás y recuperar su contenido.

### Acceso remoto
Es posible acceder remotamente al repositorio. No es necesario que el equipo esté dentro de la misma LAN.

### Seguridad
Es posible otorgar diferentes permisos sobre diferentes ramas del proyecto.  Por ejemplo, estableciendo permiso universal de lectura, y permiso de escritura sólo a ciertos usuarios.

### Ventajas
La mayoría de los desarrolladores  probablemente han trabajado con algún tipo de sistema de control de versiones, pero las personas en otras áreas pueden tener un concepto extraño.

La ventaja más obvia de usar control de versiones es la posibilidad de tener un número ilimitado de personas que trabajan en la misma base de código, sin tener que enviar constantemente los archivos de ida y vuelta.

Desarrolladores y otros profesionales que manejan archivos a los cuales se le realizan cambios constantemente, pueden beneficiarse del uso de los sistemas de control de versiones para guardar copias de sus archivos, diseños, libros, etc.  Usted puede navegar por los cambios anteriores realizado a su repositorio y volver a versiones anteriores si pasa algo.

¿Desea obtener más información?
Leer mis presentaciones en :
[![](https://public.slidesharecdn.com/images/logo/linkedin-ss/SS_Logo_Desktop_Black.png?ef34b4628a)](http://www.slideshare.net/eudris)
 [Sistemas de control de versiones](https://www.slideshare.net/eudris/sistemas-de-control-de-versiones-23223685)
 [Control de versiones con subversion](https://www.slideshare.net/eudris/control-de-versiones-con-subversion-27153628)

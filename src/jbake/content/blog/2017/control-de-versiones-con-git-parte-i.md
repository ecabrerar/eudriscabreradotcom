title=Control de Versiones con Git
date=2017-06-02
type=post
tags=Git,Control de Versiones
status=published
author=Eudris Cabrera
description=Control de Versiones con Git.    
summary=En artículos anteriores presentamos varias opciones para el manejo y administración de código fuente utilizando sistemas de control de versiones de código abierto. En esta ocasión vamos a presentar como realizar control de versiones usando Git.
~~~~~~

![](/images/blog/2017/git-logo.png)

Es un sistema de control de versiones gratuito y de código abierto, diseñado para ser usado desde pequeños a grandes proyectos con rapidez y eficiencia.

**Diseñador:**  Linus Torvalds
 Programado en C Bourne Shell, Perl1

 <figure style="float:right;">
  <img src="/images/blog/2017/linus-torvalds.jpeg" style="width:200px;height:256px;">
  <figcaption>Linus Torvalds</figcaption>
 </figure>

**Licencia :**  GNU GPL v2
**Versión inicial:** 07 de abril 2005

**Desarrolladores:**
Junio Hamano, Linus Torvalds y otros más.

**Url:** [http://git-scm.com](http://git-scm.com)


**Introducción a git**

Inicialmente diseñado y desarrollado por Linus Torvalds para el desarrollo del Kernel de Linux, ha sido adoptado por otros proyectos, algunos de mucha relevancia en el mundo del código abierto y el software libre como: PostgreSQL, gnome, Perl, Eclipse, Ruby on Rails, KDE, Android y muchos más.


### SVN vs GIT

<img src="/images/blog/2017/svn-vs-git.png" style="width:616px;height:339px;">

Git ofrece un tipo de control de versiones  diferente,  un sistema de control de versiones distribuido. No hay una sola base de código centralizada para tirar el código, sino que diferentes ramas sostienen las diferentes partes del código.

Sistemas de control de versiones, como SVN y CVS, utilizan el control de versiones centralizado, lo que significa que hay una única copia original del software.


### Empresas que están usando git para el control de versiones

Entre las empresas que están usando git para el control de versiones se encuentran Google, Facebook, Twitter, Microsoft, Linkedin, Netflix, Atlassian, OpenShift (Red Hat), Heroku, entre muchas más.

**Git & GitHub**
GitHub ha ayudado a establecer Git como un gran sistema de control de versiones, ofreciendo una hermosa interfaz para muchos proyectos grandes, como Ruby on Rails, Netty y otros más.

Sin embargo, Git no es tan fácil de aprender como CVS o SVN, así que es mucho más difícil de usar para un principiante.

<img src="/images/blog/2017/github-logo.png" style="width:301px;height:182px;">

Para más información visitar [https://github.com](https://github.com)

Además de Github, existen otras empresas que ofrecen servicios de alojamiento para repositorios git.

Entre las más populares se encuentran [Atlassian Bitbucket](https://bitbucket.org) y [GitLab](https://about.gitlab.com).


### Operaciones Básicas

#### 1. Creación de un repositorio

 **git init**

Este comando crea un nuevo repositorio Git. Se puede utilizar para convertir un proyecto existente sin versionar a un repositorio Git o inicializar un repositorio nuevo vacío.

Muchos de los comandos de Git no se pueden ejecutar fuera de un repositorio, usualmente este es el primer comando que corre en un nuevo proyecto.

Uso
```bash
$ git init

$ git init <ruta del directorio>
```
Crea un subdirectorio .git en el directorio actual o directorio especificado mediante una ruta, que contiene todos los metadatos necesarios para el repositorio.

#### 2. Clonando un repositorio

Si un proyecto ya ha sido establecido en un repositorio central, el comando git clone es la forma más común de los usuarios obtener una copia de desarrollo.

Al igual que git init, la clonación es generalmente una operación de una sola vez, una vez el desarrollador ha obtenido una copia de trabajo, todas las operaciones de control de versiones y colaboraciones se gestionan a través de su repositorio local.

#### 2.1 Clonar un repositorio Git existente

**git clone**

Este comando copia un repositorio Git existente.

Como ventaja, la clonación crea automáticamente una conexión remota llamada origin que apuntan al repositorio remoto. Esto hace que sea muy fácil interactuar con un repositorio central.

Uso
```bash
$ git clone <repositorio>
```

Clonar el repositorio ubicado en <repositorio> en la máquina local. El repositorio original puede encontrarse en el sistema de archivos local o en un equipo remoto accesible a través de HTTP o SSH.

```bash
$ git clone <repositorio> <ruta del directorio>
```

Clonar el repositorio ubicado en <repositorio> en el directorio ubicado en la ruta <ruta del directorio> en la máquina local.

#### 3. Guardando cambios en el repositorio

Para crear un commit inicial del directorio actual, utilice los dos comandos siguientes:

```bash
$ git add .
$ git commit
```

Una vez que tenga su proyecto hacia arriba y corriendo, se pueden añadir usando el comando git add:

```bash
$ git add Hello.java
$ git commit
```

Los comandos anteriores también pueden ser utilizados para registrar cambios en los archivos existentes.

#### 4. Configuración de un repositorio de Git para la colaboración remota

Una vez que tenga una configuración de repositorio remota, deberá agregar una URL de repositorio remota a su configuración git local y establecer la rama remota de tu repositorio local.

El comando git remote ofrece esta utilidad:

```bash
$ git remote add <nombre_remoto> <url_repositorio_remoto>
```

Este comando enlazará el repositorio remoto en <url_repositorio_remoto> a una referencia en su repositorio local en <nombre_remoto>.

#### 5. Colaboración de repositorio a repositorio

Una vez que hayas enlazado el repositorio remoto, puedes enviar los cambios locales hacia él.

```bash
$ git push -u <nombre_remoto> <nombre_rama_local>
```

Este comando enviará los cambios de su rama local en <nombre_rama_local> al repositorio remoto en <nombre_remoto>.


### Referencias

* [http://en.wikipedia.org/wiki/Git_(software)](http://en.wikipedia.org/wiki/Git_(software))
* [https://git.wiki.kernel.org/index.php/GitSvnComparsion](https://git.wiki.kernel.org/index.php/GitSvnComparsion)
* [http://www.desarrolloweb.com/articulos/introduccion-git-github.html](http://www.desarrolloweb.com/articulos/introduccion-git-github.html)
* [https://git-scm.com/](https://git-scm.com/)
* [https://education.github.com/pack](https://education.github.com/pack)

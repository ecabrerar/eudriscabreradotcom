title=Control de Versiones con Git Parte II
date=2017-06-04
type=post
tags=Git,Control de Versiones,Desarrollo de Software
status=published
author=Eudris Cabrera
description=Control de Versiones con Git Parte II.    
summary=En el artículo anterior (Control de Versiones con git Parte I), hicimos una introdución sobre el uso de git y algunas operaciones básicas, a continuación vamos a presentar operaciones más avanzadas que podemos realizar mientras hacemos contronl de versión de nuestro código fuente.
~~~~~~

### Configuración de opciones de git

**git config**
Este comando se utiliza para definir muchos datos de configuración de Git, desde información de usuario a las preferencias para el comportamiento de un repositorio.

Uso : `git config [opciones]`

```bash
$ git config user.name <nombre>
```

Definir el nombre del autor que se utilizará para todos los commits en el repositorio actual.

Por lo general, usted querrá establecer las opciones de git de forma global para el usuario actual, en este caso, debes utilizar la opción `--global` junto a **git config**.

Uso:
```bash
$ git config --global user.name <nombre>
```
Definir el nombre del autor que se utilizará para todos los commits por parte del usuario actual.

```bash
$ git config --global user.email <email>
```
Definir el correo electrónico del autor que se utilizará para todos los commits por el usuario actual.

```bash
$ git config --global alias.<nombre-alias> <comando-git>
```
Crear un acceso directo para un comando de Git.

```bash
$ git config --system core.editor <editor>
```
Definir el editor de texto utilizado por algunos comandos git para todos los usuarios de la máquina actual.

```bash
$ git config --global --edit
```
Abre el archivo de configuración global en un editor de texto para su edición manual.

**Ejemplos:**
```bash
$ git config --global user.name "Eudris Cabrera"
```

Establecer información sobre el usuario

```bash
$ git config --global user.email eudris@example.com
```

Especificar el editor de texto
```bash
$ git config --global core.editor vim
```

### Agregar alias estilo SVN

```bash
$ git config --global alias.st status
$ git config --global alias.co checkout
$ git config --global alias.br branch
$ git config --global alias.up rebase
$ git config --global alias.ci commit
```

### Guardando cambios

**1. Staging Area**
El área de ensayo (Staging Area) es una de las características más singulares de GIT.

En lugar de enviar todos los cambios que haya realizado desde la última confirmación, el staging area permite agrupar cambios antes de ser confirmados en el proyecto.

Esto significa que puede realizar todo tipo de modificaciones en archivos no relacionados, deshacer los cambios y separarlo en unidades lógicas mediante la agrupación de cambios relacionados, y de esta forma puede realizar confirmaciones pieza por pieza.

**2. Cómo guardar los cambios**

**git add**
Este comando agrega un cambio en el directorio de trabajo al área de ensayo (staging). El comando git add le indica a Git que desea incluir cambios a un archivo en particular en la próxima confirmación.

Sin embargo, git add no afecta al repositorio con cambios significativos, en realidad, los cambios no están registrados hasta que se ejecuta git commit.

Uso:
```bash
git add <archivo>
```
Agrega todos los cambios en <archivo> para la próxima confirmación.

```bash
git add <directorio>
```
Agrega todos los cambios en <directorio> para la próxima confirmación.

```bash
git add -p
```
De forma interactiva permite seleccionar partes de un archivo que se suman a la próxima confirmación.

Puedes auxiliarte del comando git status para determinar cuáles archivos o directorios pueden ser agregados.

**git commit**
El comando git commit confirma los cambios que se encuentran en el staging area hacia la historia del proyecto.

Esta confirmación pueden ser consideradas como versiones "seguras" de un proyecto de Git, nunca van a cambiar a menos que explícitamente pida que lo haga.

Aunque comparte el mismo nombre con svn commit, su funcionalidad es diferente, git commit realiza una confirmación a un repositorio local y no requiere ninguna interacción con otros repositorios git.

Uso:
**git commit**
Confirma los cambios que se encuentran en el staging area. Abrirá un editor de texto que le pide un mensaje de confirmación.

Después de introducir un mensaje, guardar el archivo y cerrar el editor para realizar la confirmación.

```bash
 git commit -m "<mensaje>"
```
Confirma los cambios que se encuentran en el staging area, pero en lugar de lanzar el editor de texto, usa el mensaje "<mensaje>" como el mensaje de confirmación.

```bash
git commit -a
```
Confirma todos los cambios que se encuentran en el directorio de trabajo.

Esto sólo incluye modificaciones a los archivos rastreados (los que se han añadido con git add en algún momento de su historia).

### Inspección de un repositorio

**git status**
Este comando muestra el estado del directorio de trabajo.

Uso:

```bash
$ git status
```

**git log**
Muestra un historial de los commits realizados.

Uso:

```bash
$ git log
```
Muestra todo el historial de los commits realizados utilizando el formato predeterminado.

```bash
$ git log -n <limite>
```
Limitar el número de commits especificando la cantidad máxima a mostrar en el parámetro <límite>.

Por ejemplo, git log -n 3 mostrará sólo 3 commits.

```bash
$ git log --oneline
```
Condensa cada commit de una sola línea. Esto es útil para obtener una visión general de alto nivel de la historia del proyecto.

```bash
$ git log --stat
```
Junto con la información del registro de git log, incluyen los que se alteraron los archivos y el número relativo de las líneas que se han añadido o eliminado de cada uno de ellos.


### Deshacer cambios

**git checkout**
Este comando sirve para tres funciones distintas: revisar archivos, revisar confirmaciones (commits) y revisar ramas (branches).

Cuando hacemos un checkout de un commit, estamos haciendo que el directorio de trabajo completo se iguale con el commit.

Esto puede ser usado para ver un estado anterior de su proyecto sin alterar su estado actual de ninguna manera.

Un checkout de un archivo permite ver una versión antigua de ese archivo en particular, dejando el resto de su directorio de trabajo sin tocar.

```bash
git checkout master
```
Volver a la rama principal. Esto es, volver al estado "actual" del proyecto.

```bash
git checkout <commit> <archivo>
```
Vuelve a una versión previa del archivo. Esto es, toma el <archivo> que se encuentra en directorio de trabajo y lo convierte en una copia exacta de como estaba al momento de la confirmación <commit>.

```bash
git checkout <commit>
```
Actualizar todos los archivos en el directorio de trabajo para que coincida con la confirmación especificada. Puede utilizar un hash de una confirmación o una etiqueta como el argumento <commit>.

Los comandos git checkout, git reset y git revert se utilizan frecuentemente para revertir cambios en tu rama de trabajo o repositorio git.

Debido a que son tan similares, es muy fácil mezclar qué comando debe usarse en cualquier escenario de desarrollo. A continuación un resumen de los casos de uso más comunes para todos estos comandos


<table>
  <tr>
   <td>Comando
   </td>
   <td>Alcance
   </td>
   <td>Caso de uso más común
   </td>
  </tr>
  <tr>
   <td>git reset
   </td>
   <td>A nivel de commit
   </td>
   <td>Descarta los commits en una rama privada o elimina los cambios no guardados
   </td>
  </tr>
  <tr>
   <td>git reset
   </td>
   <td>A nivel de archivo
   </td>
   <td>Saca un archivo del área de staging
   </td>
  </tr>
  <tr>
   <td>git checkout
   </td>
   <td>A nivel de commit
   </td>
   <td>Cambiar de rama o inspeccionar cambios (snapshots) antiguos
   </td>
  </tr>
  <tr>
   <td>git checkout
   </td>
   <td>A nivel de archivo
   </td>
   <td>Descartar cambios en el directorio de trabajo
   </td>
  </tr>
  <tr>
   <td>git revert
   </td>
   <td>git revert
   </td>
   <td>Deshacer confirmaciones en una rama pública
   </td>
  </tr>
  <tr>
   <td>git revert
   </td>
   <td>git revert
   </td>
   <td>N/A
   </td>
  </tr>
</table>


**Deshacer un commit específico**

```bash
$ git checkout hotfix-broken-links git reset HEAD~2
```
Los dos últimos commit que estaban al final de `hotfix-broken-links` ahora están colgando o como commits huérfanos.

**Git Checkout en un archivo**

```bash
 $ git checkout HEAD~2 foo.py
 ```

 El comando anterior hace que el archivo foo.py en el directorio de trabajo coincida desde el 2do al último commit.


### Trabajando en equipo

**git remote**
En el artículo anterior utilizamos el comando git remote para crear una conexión entre un repositorio local y el repositorio remoto. Ahora vamos a explorar otras operaciones necesarias para el trabajo en equipo.

**Enviar cambio a repositorio remoto**

```bash
$ git push  <nombre_remoto> <nombre_ramal>
```

**Cambio de nombre y remover referencia remota**

```bash
$ git remote rename <nombre_actual> <nuevo_nombre>
```

```bash
$ git remote rm <nombre>
```
El comando git remote rm eliminará la conexión al repositorio remoto especificado por el parámetro.

**git fetch**
El comando `git fetch` descarga commits, archivos y referencias desde un repositorio remoto a su repositorio local.

 Uso:

```bash
 $ git fetch
```

```bash
 $ git fetch <remoto>
```
Descarga todas las ramas del repositorio.También descarga todos los commits y archivos requeridos del otro repositorio.

```bash
 $ git fetch <remoto>
```
Descarga todas las ramas del repositorio.También descarga todos los commits y archivos requeridos del otro repositorio.

```bash
$ git fetch <remoto> <branch>
```
Lo mismo que el comando anterior, pero solo descarga el branch especificado.

git fetch es una forma segura para descargar los cambios desde un repositorio remoto. Este comando solo descarga los cambios pero no actualiza tu repositorio local. Para fusionar los cambios en tu directorio de trabajo tenemos que auxiliarnos del comando `git merge`.

`git pull` es otra alternativa para descargar los cambios pero es un poco más agresiva; descargará el contenido remoto para la rama local activa e inmediatamente ejecutará git merge para crear una confirmación de fusión para el nuevo contenido remoto. Si tiene cambios pendientes en curso, esto provocará conflictos y dará inicio al flujo de resolución de conflictos de fusión.

El comando git pull se usa para buscar y descargar contenido de un repositorio remoto y actualizar inmediatamente el repositorio local para que coincida con ese contenido.

La fusión de cambios ascendentes remotos en su repositorio local es una tarea común en los flujos de trabajo de colaboración basados en Git

El comando `git pull` es en realidad una combinación de otros dos comandos, `git fetch` seguido de `git merge`

Uso:
```bash
$ git pull
```

## Referencias

* [https://www.atlassian.com/git/tutorials](https://www.atlassian.com/git/tutorials)
* [https://www.codeschool.com/learn/git](https://www.codeschool.com/learn/git)
* [https://education.github.com/pack](https://education.github.com/pack)

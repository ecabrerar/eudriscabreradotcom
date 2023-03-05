title=Resumen conversatorio cómo gestionar la deuda técnica en el desarrollo de software
date=2023-02-25
type=post
tags=Java, Latam, JUG, Deuda Técnica, Code Review, SonarLint, SonarQube
status=published
author=Eudris Cabrera
description=Resumen conversatorio cómo gestionar la deuda técnica en el desarrollo de software
shareimage=images/blog/2023/efae995e-cd8d-4166-be87-c793837f7e1c.001.jpg
summary=La deuda técnica hace referencia al costo implícito del trabajo adicional causado por decisiones anteriores que se tomaron para ahorrar tiempo o dinero al implementar sistemas nuevos o mantener los existentes.Al igual que la deuda financiera, la deuda técnica devenga intereses, cuanto más se acumula la deuda técnica o la lista de problemas ignorados, más costoso se vuelve su rectificación.Alguna vez te has preguntado, ¿Quién debe pagar la deuda técnica? ¿Cuales técnicas puedes utilizar para mitigar la deuda técnica?.En esta publicación vamos a hacer un resumen sobre el conversatorio “Cómo gestionar la deuda técnica en el desarrollo de software”.
~~~~~~

En el pasado mes de octubre de 2022 se realizó una desconferencia sobre **cómo gestionar la deuda técnica en el desarrollo de software** con la participación de las comunidades Java de Nicaragua, Bogotá, Bolivia, Medellín, México, Mérida, Ecuador, Buenos Aires, Guadalajara y República Dominicana.

**Fue una de las sesiones donde hubo mayor participación de los asistentes y tuvo una duración de alrededor de dos horas. Será un poco difícil resumir todas las opiniones de los participantes, por tal motivo en algunas ocasiones voy a colocar un enlace donde pueden escuchar las opiniones de los participantes de forma directa.**

Para entrar en contexto es necesario definir lo que es una **deuda técnica**. Existen muchas definiciones pero nos quedaremos con la siguiente:

**“La deuda técnica hace referencia al costo implícito del trabajo adicional causado por decisiones anteriores que se tomaron para ahorrar tiempo o dinero al implementar sistemas nuevos o mantener los existentes.”**


![](/images/blog/2023/efae995e-cd8d-4166-be87-c793837f7e1c.001.jpg)
**Imagen tomada de [The Financial Implications of Technical Debt](https://www.toptal.com/finance/part-time-cfos/technical-debt)**


La deuda técnica tiene sus desventajas, lo que lleva a la **ineficiencia** y a la **inercia**. Un ejemplo de esto se da cuando, al tener un sistema legado (legacy) corriendo desde hace muchos años, resulta muy costoso tener que modificar o agregar nuevas funcionalidades o si retrasa una actualización varias veces para alcanzar los objetivos financieros a corto plazo.

El siguiente diagrama es un gráfico útil para enmarcar cómo la deuda tecnológica difiere de otras implementaciones tecnológicas que se pueden realizar dentro de un stack de tecnología de una empresa.


![](/images/blog/2023/efae995e-cd8d-4166-be87-c793837f7e1c.002.jpg)
**Imagen tomada de [The Financial Implications of Technical Debt](https://www.toptal.com/finance/part-time-cfos/technical-debt)** 

A diferencia de un **"error"**, la deuda técnica no es un defecto visible y, por lo tanto, muchas veces no se puede detectar fácilmente.  Ahí radica el peligro, ya que mientras más se acumula la deuda, mayor será el costo de rectificación en el futuro.

### ¿Cuáles son los costos de la deuda técnica?

- **Costos en efectivo**
  - Mayor personal para mantener los sistemas existentes.
  - Mayor tiempo para desarrollar nuevas capacidades.
  - Complejidad para integrarse con nuevos sistemas.
  - Pérdidas en ventas por retraso de entrega en nuevas funcionalidades.

- **Otros costos**
  - Menor productividad del personal
  - Incapacidad de adaptarse rápidamente a las oportunidades o cambios en el mercado

<div class="video-wrap"><div class="video"><div id="player"></div></div></div>

<a href="javascript:void(0);" title="Pulsar aquí" onclick="setCurrentTime(0)">7:33</a> - Carlos Obregon **nos cuenta su experiencia trabajando en una empresa donde la deuda técnica forzó la culminación del contrato por parte del cliente.**


Al analizar una comparación de la deuda técnica y financiera, una de las diferencias clave es que la primera no tiene un control formal. Con la deuda financiera, generalmente hay comités de crédito, equipos de gestión de activos y pasivos y personal de tesorería que monitorea los niveles con mucho empeño. 

Sin embargo, con la deuda técnica, muy pocos de estos controles existen en los negocios tradicionales.

Al igual que la deuda financiera, la deuda técnica devenga intereses, cuanto más se acumula la deuda técnica o la lista de problemas ignorados, más costoso se vuelve su rectificación.


![](/images/blog/2023/efae995e-cd8d-4166-be87-c793837f7e1c.003.jpg)
**Imagen tomada de [The Financial Implications of Technical Debt](https://www.toptal.com/finance/part-time-cfos/technical-debt)** 

Significado de algunos términos del gráfico:

- EBITDA (acrónimo del inglés **earnings before interest, taxes, depreciation, and amortization**,  beneficio antes de intereses, impuestos, depreciaciones y amortizaciones): Es un indicador financiero del beneficio bruto de explotación calculado antes de la deducibilidad de los gastos financieros
- **P & L Visibility (Profit and Loss) :** Visibilidad de pérdidas y ganancias
- **Balance Sheet Visibility:** Salud financiera de un negocio, ahorros, deudas y lo que los inversionistas tienen invertido

<a href="javascript:void(0);" title="Pulsar aquí" onclick="setCurrentTime(1)">22:47</a> - Francisco Contreras **comenta** **sobre algunos aspectos de la deuda técnica y la deuda financiera.**

### ¿Por qué ocurre la deuda técnica?

- **Tiempo :** 
    - Sacrificamos la calidad por entregar a tiempo,  algunas veces con la idea de que en algún momento vamos a pagar la deuda que estamos dejando, pero ese momento nunca llega y sigues agregando nuevas funcionalidades al proyecto y nunca terminas de pagar la deuda técnica que dejaste.
- La tentación de ahorrar costos a corto plazo
- Falta de formación o entrenamiento del equipo
- No utilización de técnicas cómo code review y herramientas para analizar código cómo SonarLint, SonarQube, etc..

A continuación los comentarios de algunos participantes sobre por qué ocurre la deuda técnica:

<a href="javascript:void(0);" title="Pulsar aquí" onclick="setCurrentTime(2)">26:30</a> - Francisco Contreras **comenta sobre por qué ocurre la deuda técnica.**

<a href="javascript:void(0);" title="Pulsar aquí" onclick="setCurrentTime(3)">28:04</a> - Carlos Obregon **comenta sobre la falta de formación o entrenamiento del equipo.**

<a href="javascript:void(0);" title="Pulsar aquí" onclick="setCurrentTime(4)">29:34</a> - Francisco Contreras **sugiere establecer el alcance del proyecto desde el principio con el cliente.**

<a href="javascript:void(0);" title="Pulsar aquí" onclick="setCurrentTime(5)">30:23</a> - Carlos Obregon **responde al comentario de Francisco Contreras.**

<a href="javascript:void(0);" title="Pulsar aquí" onclick="setCurrentTime(6)">31:02</a> - Epson **plantea que se debe cuestionar el objetivo a largo plazo.**

<a href="javascript:void(0);" title="Pulsar aquí" onclick="setCurrentTime(7)">31:58</a> - Carlos Obregon **responde al comentario de Epson.**

<a href="javascript:void(0);" title="Pulsar aquí" onclick="setCurrentTime(8)">34:16</a> - Omar Berroteran **habla sobre por qué ocurre la deuda técnica.**

<a href="javascript:void(0);" title="Pulsar aquí" onclick="setCurrentTime(9)">36:04</a> - Luis Ventoncilla **expresa su opinión sobre por qué ocurre la deuda técnica**

<a href="javascript:void(0);" title="Pulsar aquí" onclick="setCurrentTime(10)">36:53</a> - Omar Berroteran **entiende que muchas veces los líderes técnicos no le dan la importancia que tiene la deuda técnica.**

<a href="javascript:void(0);" title="Pulsar aquí" onclick="setCurrentTime(11)">37:16</a> - Francisco Contreras **comenta sobre cómo calcular el impacto de la deuda técnica.**

<a href="javascript:void(0);" title="Pulsar aquí" onclick="setCurrentTime(12)">38:47</a> - Luis Ventoncilla **comenta sobre su experiencia sobre cómo mitigar la deuda técnica**

<a href="javascript:void(0);" title="Pulsar aquí" onclick="setCurrentTime(13)">41:26</a> - Carlos Obregon **comenta sobre la técnica de peer review como herramienta para mitigar la deuda técnica.**

<a href="javascript:void(0);" title="Pulsar aquí" onclick="setCurrentTime(14)">44:22</a> - Epson **habla sobre el rol del arquitecto de software.**

<a href="javascript:void(0);" title="Pulsar aquí" onclick="setCurrentTime(15)">46:23</a> - Francisco Contreras **entiende que mitigar la deuda técnica es responsabilidad de todos y no de un rol en específico.**

<a href="javascript:void(0);" title="Pulsar aquí" onclick="setCurrentTime(16)">48:34</a> - Luis Ventoncilla **entiende que todo el equipo debe estar de acuerdo con que se debe mitigar la deuda técnica.**

<a href="javascript:void(0);" title="Pulsar aquí" onclick="setCurrentTime(17)">49:56</a> - Carlos Obregon **opina que el problema de la deuda técnica no es de roles sino de procesos.**

<a href="javascript:void(0);" title="Pulsar aquí" onclick="setCurrentTime(18)">50:24</a> - Luis Ventoncilla **reitera que todo el equipo debe estar de acuerdo con que se debe mitigar la deuda técnica.**


### ¿Cómo podemos abordar un problema de deuda técnica actual?

El primer paso para abordar la deuda técnica es hacerla **visible**, es decir, **identificar o calcular la magnitud de la deuda que tienes**. 

Para esto existen herramientas que nos pueden ayudar, hemos mencionado anteriormente a SonarQube. 

También una forma de identificarla o calcularla es haciendo una comparación entre los bugs resueltos y los bugs reportados.

Luego que identificas cuál es tu deuda técnica, entonces, tienes que **tomar una decisión al respecto**, es decir, **planificar cómo vas a empezar a pagar**.

Algunas empresas utilizan un umbral para abordar la deuda técnica, errores identificados como **bloqueantes** o mayores (majors), se trabajan inmediatamente y errores marcados como menores (minors), se resuelve más adelante y por orden de importancia.

<a href="javascript:void(0);" title="Pulsar aquí" onclick="setCurrentTime(19)">56:04</a> - Francisco Contreras **habla sobre una técnica para crear un plan de pago para la deuda técnica.**

<a href="javascript:void(0);" title="Pulsar aquí" onclick="setCurrentTime(20)">58:49</a> - Carlos Obregon comenta **"si hay código que no se ha cambiado en un año y está funcionando eso no es deuda técnica"**

<a href="javascript:void(0);" title="Pulsar aquí" onclick="setCurrentTime(21)">1:04:29</a> - Eudris Cabrera **presenta la herramienta** [SonarQube](https://www.sonarsource.com/open-source-editions/)

<a href="javascript:void(0);" title="Pulsar aquí" onclick="setCurrentTime(22)">1:19:44</a> - Carlos Obregon **entiende que es responsabilidad de cada desarrollador utilizar herramientas de análisis de código estático**.


### Recomendaciones para gestionar la deuda técnica en el futuro

- **Establecer umbrales de endeudamiento**

  Una vez hayas hecho visible la deuda técnica que tienes y cómo piensas abordarla, debes procurar no seguir incurriendo en acumulación de nuevas deudas. En ese sentido, debes definir un umbral de endeudamiento, es decir, establecer cuáles incidentes que conllevan a incrementar la deuda técnica atenderás de inmediato y cuáles vas a resolver posteriormente. Por ejemplo, puedes establecer que incidentes con severidad del tipo bloqueante (BLOCKER), crítico (CRITICAL) y mayor (MAJOR) deben ser atendidos inmediatamente. Los de severidad menor (MINOR) e información (INFO) se atienden más adelante.

- **Mantenga una base de conocimientos**

   Todo el equipo debe tener acceso a información sobre las buenas prácticas en desarrollo de software y/o una fuente de conocimiento común sobre cómo abordar la mayoría de temas relacionados con la deuda técnica. 	

- **Capacitación del personal**

Gran parte de la deuda técnica es pequeña y está relacionada con la escritura de código, tener un equipo bien capacitado sobre el stack de tecnología que usan y sobre técnicas de desarrollo de software ayudará a no volver a incurrir en deuda técnica en el futuro.

- Implementar revisión de código y herramientas para analizar código cómo **SonarLint** o **SonarQube**

<a href="javascript:void(0);" title="Pulsar aquí" onclick="setCurrentTime(23)">1:26:09</a> - Carlos Obregon reitera que la revisión del código es una herramienta muy efectiva, pero hay que tener reglas claras dentro del equipo sobre cómo realizarla.

<a href="javascript:void(0);" title="Pulsar aquí" onclick="setCurrentTime(24)">1:32:46</a> - Francisco Contreras menciona algunas formas de cómo hacer que la revisión del código sea efectiva

Hasta aquí el resumen sobre cómo gestionar la deuda técnica en el desarrollo de software, tratamos de incluir la mayor cantidad de contenido, pero fue imposible cubrir todo, puedes [ver la sesión completa en youtube](https://www.youtube.com/live/eUk5vNPlHls) para más detalles.


### Agradecimientos
Agradecer a [Emilio Ariel Santos Mateo](https://www.linkedin.com/in/emilio-santos-m/) y [Edwing Mejia](https://github.com/elmm-programing)  por sus sugerencias y correcciones ortográficas a la publicación.

### Referencias:

- [Refactor First - Improving Talks Series](https://www.youtube.com/watch?v=lI_sRZt-llI) 
- [Prioritizing Technical Debt as if Time and Money Matters • Adam Tornhill • GOTO 2019](https://www.youtube.com/watch?v=fl4aZ2KXBsQ) 
- <https://www.sonarsource.com/open-source-editions/> 
- <https://www.sonarsource.com/products/sonarlint/> 


<script>
document.addEventListener("DOMContentLoaded", function(event) {

var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
  var player;

  window.onYouTubeIframeAPIReady = function() {
    player = new YT.Player('player', {
      width: '600',
      height: '340',
      videoId: 'eUk5vNPlHls',
      playerVars: {
            'playsinline': 1,
            'autoplay':1
          },
    });
  }

   window.setCurrentTime = function(slideNum) {
    var times = [455,1369,1590,1684,1775,1823,1861,1918,2056,2164,2213,2236,2328,2486,2662,2783,2914,2996,3024,3366,3529,3869,4787,5169,5566];
    player.seekTo(times[slideNum]);
  }

});
  </script>


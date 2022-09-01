title=Hablemos del protocolo HTTP y Arquitectura Web
date=2022-09-01
type=post
tags=Web, HTTP, Level Up Friday
status=published
author=Eudris Cabrera
description=Hablemos del protocolo HTTP y Arquitectura Web   
shareimage=images/blog/2022/16a5dbe5-c9dc-4cc2-b89c-d112b06c9902.001.png
summary=El protocolo HTTP ha estado vigente por más de 30 años y es la base de cualquier intercambio de datos en la Web. Su estructura cliente-servidor, junto con la capacidad para usar cabeceras (headers), permite a este protocolo evolucionar con las nuevas y futuras aplicaciones en Internet. En esta publicación queremos explicar los aspectos básicos de este protocolo con el objetivo de que sirva de referencia para entender algunas tecnologías o arquitectura más recientes que se derivan del uso de HTTP.
~~~~~~
### HTTP: Hypertext Transfer Protocol

Hypertext Transfer Protocol (HTTP) (o Protocolo de Transferencia de Hipertexto en español) es un protocolo de la capa de aplicación para la transmisión de documentos hipermedia, como **HTML**.
<img src="/images/blog/2022/16a5dbe5-c9dc-4cc2-b89c-d112b06c9902.001.png" alt="HTTP: Hypertext Transfer Protocol" style="float: right;margin: 0 0 0 15px;width: 374px;height: 200px;"/>


- Diseñado para la comunicación entre los navegadores y servidores web, aunque puede ser utilizado para otros propósitos también.
- Basado en el principio de cliente-servidor, en el que un cliente establece una conexión, realizando una petición a un servidor y espera una respuesta del mismo.
- Es un protocolo sin estado, lo que significa que el servidor no guarda ningún dato (estado) entre dos peticiones.
- Sus conexiones son del tipo **TCP/IP** (aunque puede ser usado sobre cualquier capa de transporte segura)


### Generalidades del protocolo HTTP

Es la base de cualquier intercambio de datos en la Web, y un protocolo de estructura cliente-servidor, esto quiere decir que una petición de datos es iniciada por el elemento que recibirá los datos (el cliente), normalmente un navegador Web.

![](/images/blog/2022/16a5dbe5-c9dc-4cc2-b89c-d112b06c9902.002.png)

Una página web completa resulta de la unión de distintos sub-documentos recibidos, como, por ejemplo: un documento que especifique el estilo de maquetación de la página web (CSS), el texto, las imágenes, vídeos, scripts, etc...


Los mensajes que envía el cliente, se llaman peticiones **(Requests)** , y los mensajes enviados por el servidor se llaman respuestas **(Responses)**.

![](/images/blog/2022/16a5dbe5-c9dc-4cc2-b89c-d112b06c9902.003.png)

### Evolución del protocolo HTTP

- Diseñado a principios de la década de 1990, HTTP es un protocolo ampliable, que ha ido evolucionando con el tiempo.
- Se transmite sobre el protocolo TCP, o el protocolo encriptado **TLS** (en-US), aunque teóricamente podría usarse cualquier otro protocolo fiable.

![](/images/blog/2022/16a5dbe5-c9dc-4cc2-b89c-d112b06c9902.004.png)

#### Historial de Versiones:

- 1991    HTTP/0.9  **(Obsoleto)**
- 1996    HTTP/1.0  **(Obsoleto)**
- 1997    HTTP/1.1  (Estándar)
- 2015    HTTP/2    (Estándar)
- 2022	  HTTP/3    (Estándar)

**Datos relevantes:**

- HTTP/1.1: el protocolo HTTP clásico, conocido y apreciado desde hace más de 20 años
- SPDY/3.1: la primera versión de Google de la especificación **HTTP/2**, formada sobre la base de **HTTP/2**
- H2: H2 significa "HTTP 2"
- H2C: H2C significa "HTTP 2 Cleartext", el protocolo **HTTP/2** sobre un canal no encriptado


### HTTP vs. HTTPS

HTTPS es el uso de HTTP sobre una capa segura, que puede ser **SSL** (Secure Sockets Layer)  o **TLS** (Transport Layer Security).

*"Ambas tecnologías son un intento de encriptar la comunicación entre cliente / servidor vía internet. La diferencia es que SSL fue el primer intento y luego de detectar múltiples vulnerabilidades evolucionó hacia algo más seguro llamado TLS"*. **Jonathan Garrido**

Más información aquí : <https://www.venafi.com/blog/what-are-differences-between-http-https-0> y <https://www.cloudflare.com/learning/ssl/why-is-http-not-secure/>

![](/images/blog/2022/16a5dbe5-c9dc-4cc2-b89c-d112b06c9902.005.png)

### Conceptos básicos de HTTP

#### Cabeceras HTTP (headers)

Los encabezados HTTP permiten que el cliente y el servidor pasen información adicional con una solicitud o respuesta **HTTP**.

Un encabezado HTTP consta de su nombre que no distingue entre mayúsculas y minúsculas, seguido de dos puntos (:) y luego de su valor. Se ignora el espacio en blanco antes del valor.

![](/images/blog/2022/16a5dbe5-c9dc-4cc2-b89c-d112b06c9902.006.png)

#### Métodos de petición HTTP

HTTP define un conjunto de métodos de petición para indicar la acción que se desea realizar para un recurso determinado.

Aunque estos también pueden ser sustantivos, estos métodos de solicitud a veces son llamados verbos HTTP.

Cada uno de ellos implementa una semántica diferente, pero un grupo de ellos comparte algunas características comunes: por ejemplo, un método de solicitud puede ser seguro, idempotente o almacenable en caché.

![](/images/blog/2022/16a5dbe5-c9dc-4cc2-b89c-d112b06c9902.007.png)

#### Códigos de estado de HTTP

Los códigos de estado de respuesta HTTP indican si se ha completado satisfactoriamente una solicitud HTTP específica. Las respuestas se agrupan en cinco clases:

- Respuestas informativas (100–199),
- Respuestas satisfactorias (200–299),
- Redirecciones (300–399),
- Errores de los clientes (400–499),
- y errores de los servidores (500–599).

#### Códigos HTTP utilizados frecuentemente:

- 200 **OK**. Esto significa que la solicitud, como GET o POST, funcionó y se está actuando en consecuencia.
- 300 **Movidos Permanentemente**. Este código de respuesta significa que la URL del recurso solicitado se ha cambiado de forma permanente.
- 401 **No autorizado**. El cliente, o usuario que realiza la solicitud del servidor, no ha sido autenticado.
- 403 **Prohibido**. Se conoce la identidad del cliente pero no se le ha dado autorización de acceso.
- 404 **No encontrado**. Este es el código de error más frecuente. Significa que no se reconoce la URL o que el recurso en la ubicación no existe.
- 500 **Error interno de servidor**. El servidor ha encontrado una situación que no sabe cómo manejar.

#### Características clave del protocolo HTTP

- HTTP es sencillo
- HTTP es extensible
- HTTP es un protocolo con sesiones, pero sin estados
- HTTP y conexiones

### Arquitectura de los sistemas basados en HTTP

HTTP es un protocolo basado en el principio de cliente-servidor: las peticiones son enviadas por una entidad: el agente del usuario (o un proxy a petición de uno).

Cada petición individual se envía a un servidor, el cuál la gestiona y responde. Entre cada petición y respuesta, hay varios intermediarios, normalmente denominados proxies (en-US), los cuales realizan distintas funciones, como: gateways o caches.

![](/images/blog/2022/16a5dbe5-c9dc-4cc2-b89c-d112b06c9902.008.png)

### Proxies HTTP

Entre el cliente y el servidor, además existen distintos dispositivos que gestionan los mensajes HTTP.

Dada la arquitectura en capas de la Web, la mayoría de estos dispositivos solamente gestionan estos mensajes en los niveles de protocolo inferiores: capa de transporte, capa de red o capa física, siendo así transparentes para la capa de comunicaciones de aplicación del HTTP, además esto aumenta el rendimiento de la comunicación.

Estos pueden ser transparentes, o no (modificando las peticiones que pasan por ellos), y realizan varias funciones:

- **Caching** (la caché puede ser pública o privada, como la caché de un navegador)
- **Filtrado** (como un anti-virus, control parental, ...)
- **Balanceo de carga** de peticiones (para permitir a varios servidores responder a la carga total de peticiones que reciben)
- **Autentificación** (para el control al acceso de recursos y datos)
- **Registro de eventos** (para tener un histórico de los eventos que se producen)

#### Tipos de Proxies


#### Servidor Proxy (forward proxy)

![](/images/blog/2022/16a5dbe5-c9dc-4cc2-b89c-d112b06c9902.009.png)

#### Proxy inverso: del lado del servidor (reverse proxy)

![](/images/blog/2022/16a5dbe5-c9dc-4cc2-b89c-d112b06c9902.010.png)

### Conclusión
Con la publicación de la versión del protocolo HTTP/2 y recientemente HTTP/3, éste no ha dejado de evolucionar.
Esta evolución del HTTP demuestra su capacidad de ampliación y simplicidad, permitiendo así de forma deliverada su uso para muchas aplicaciones y favoreciendo el uso de este protocolo.

### Referencias

- <https://developer.mozilla.org/es/docs/Web/HTTP/Overview>
- <https://whatis.techtarget.com/definition/HTTP-Hypertext-Transfer-Protocol>
- <https://developer.mozilla.org/es/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP>
- <https://medium.com/platform-engineer/evolution-of-http-69cfe6531ba0>
- <https://code.tutsplus.com/es/tutorials/http-succinctly-http-web-architecture--net-33716>

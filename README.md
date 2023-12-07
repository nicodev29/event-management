# Event Management Web App

Este es un proyecto de prueba técnica correspondiente al proceso de selección de Wiselink.


CONSIDERACIONES PREVIAS Y REQUISITOS GENERALES.

* JDK 17 (min version)
* ANGULAR CLI
* MySQL

El proyecto se desarrollo con la version 17 de Java, por lo que es requisito indispensable tener como minimo la version 17 del JDK para que compile.
Se utilizo Spring Boot en la version 3.1 y todo el ecosistema en la version mas actual.
Spring, desde la version 3.0 exige como minimo la version 17 JDK, a considerar.

Con respecto al frontend, se desarrollo con Angular 17, de manera que en la carpeta del frontend, ejecutar el comando: 
* npm install y luego para agregar angular en caso de no tenerlo
* npm install -g @angular/cli

Luego de instalar, ejecutar normalmente con el comando

* ng serve

Accediendo a localhost:4200 se podra observar el proyecto corriendo.


Se utilizo una base de datos relacional, MySQL en este caso, la cual se conecta con nuestro proyecto a traves de los parametros definidos en el archivo
application.properties, encontraran valores por defecto para: database, user y password. Cambiarlos segun sus necesidades. 

Una vez generada la conexion a la base de datos, es suficiente para correr la app y probarla.

En resumen:

Descargar o clonar el proyecto.
Hacer la instalacion de npm y angular en la carpeta del front.
Conectarse a MySQL con los datos de su entorno.

Ejecutar el proyecto.

Primer acceso a la app

![1](https://github.com/nicodev29/event-management/assets/104247851/7183bddd-5190-4f70-845a-a9fd234f00c2)

Login de acceso, datos:

user: admin
###
password: admin

![2](https://github.com/nicodev29/event-management/assets/104247851/a91c0210-9ad9-462f-8574-b72975b3f743)


Panel administrador, con posibilidad de crear eventos, ver todo tipo de evento y ver eventos de tipo publicos.

![3](https://github.com/nicodev29/event-management/assets/104247851/7edb2b91-543b-4067-9db7-702e146cf5a1)

Formulario para la creacion de un evento, datos segun requisitos.

![4](https://github.com/nicodev29/event-management/assets/104247851/d4e42ba5-70e8-4357-b0d0-873fcaf33e6e)

Listado de eventos creados, con la posibilida de editar o eliminar eventos.

![5](https://github.com/nicodev29/event-management/assets/104247851/36478cc7-e24e-4223-8feb-6fc6cfff5ac8)

Formulario para editar un evento, recibiendo todos los datos previos a la edicion del evento seleccionado.

![6](https://github.com/nicodev29/event-management/assets/104247851/97c170ad-3306-4c3d-b5de-a083b7d59c33)

Eliminando evento.

![7](https://github.com/nicodev29/event-management/assets/104247851/f8625031-9612-4702-bbe9-23d6e43928b5)

Panel de usuario. Con las opciones solicitadas.

![8](https://github.com/nicodev29/event-management/assets/104247851/e4774de6-2b09-4a2e-bd49-3d4a02423ce6)

Listado de eventos a futuro, de tipo publico, con la posibilidad de que el usuario se inscriba, el resto de eventos no se muestran.

![9](https://github.com/nicodev29/event-management/assets/104247851/f3cb4343-7515-40ca-944b-dc37495c675f)

Inscribiendo a un evento.

![10](https://github.com/nicodev29/event-management/assets/104247851/6024abb0-dc1f-4371-a4d8-b602a5a937d8)

Listado de eventos a los que estamos inscriptos.

![11](https://github.com/nicodev29/event-management/assets/104247851/8c2d7a28-d741-45e2-bb99-49a7d9a4d236)


Hasta las ultimas pruebas realizadas, todo se actualizaba en tiempo real sin necesidad de actualizar la pagina.

El proyecto queda abierto a sugerencias, cambios y mejoras segun comentarios!


## Descripción del Proyecto

Una compañía que se dedica a organizar eventos desea validar su negocio en Internet. Para ello, decide contratarte para realizar un MVP que resuelva las siguientes necesidades:

### Características Principales

- La aplicación debe ser web y contar con una API para la interacción con el frontend. Tanto el backend (modelo y reglas de negocio) como la API deberá desarrollarse preferentemente en Golang. No se especifica ningún framework en particular.

- Los eventos podrán gestionarse (alta, baja, modificación) solo por un rol **administrador**.

- Los eventos cuentan con un título, descripción corta, descripción larga, fecha y hora, organizador, lugar y un estado (borrador o publicada).

- Cuando una publicación tiene estado borrador, solo los administradores pueden visualizarla.

- Los usuarios pueden visualizar e inscribirse en eventos publicados, siempre y cuando la fecha del evento sea futura.

- Los eventos cuya fecha y hora ya hayan transcurrido pueden visualizarse pero no inscribirse.

- Los usuarios (administradores o no) pueden visualizar los eventos activos (publicados y con fecha-hora en el futuro), así como los eventos completados (publicados pero con fecha y hora en el pasado). Este listado de eventos se debe poder filtrar por fecha, estado y título.

- Se contará con un endpoint en el cual se mostrarán todos los eventos inscriptos, filtrándose por activos o completados.

### Consideraciones Generales

- Puedes utilizar algún framework o combinación de ellos para resolver el problema, así como paquetes o librerías Golang que solucionen problemas puntuales.

- Se espera poder reproducir el entorno de desarrollo fácilmente (gestión de dependencias mediante un docker, etc).

- El estilo de código debe seguir los estándares del lenguaje.

- Debe seguirse la clean architecture y los patrones de diseño.

### Entregables

Como entregable se espera:

- Un repositorio Git con el desarrollo que evidencia su utilización durante el desarrollo.

- Un alto porcentaje de los requisitos cubiertos, especificando requisitos no alcanzados por el MVP.

- Deseable: tests automáticos (unitarios y/o integración).

## Opcional

De manera opcional, puedes desarrollar el frontend que interactúe con la API desarrollada. Esta aplicación web deberá ser desarrollada preferentemente en React.

En esta web, podrás:

- Ver el listado de eventos general, con los filtros disponibles.

- Visualizar un evento de forma detallada.

- Inscribirte al evento.

- Ver un listado de eventos suscritos.






# EnvironmentAngularjsForComponents
Environment for AngularJsForCreateComponents.

Entorno para utilizar AngularJs en la versión 1.7 y poder crear componentes.

##Instalación.
npm i
##Ejecución.
npm run server

###Entorno.
Dentro de /app dispondremos nuestra aplicación 
Dentro de /server tenemos los archivos generados el index.html es el marco de inicio y la etiqueta <c-app></c-app>Es la etiqueta de arranque.

Prueba técnica Frontend (AngularJS)

Descripción
Se requiere desarrollar una aplicación con angularJS consistente en un  CRUD de usuarios. Al acceder a la aplicación se carga una pantalla con el listado de usuarios
1. Pantalla listado de usuarios. Cada fila ha de tener una opción para ver, borrar y editar los datos del usuario. Añadir 2 botones sobre el listado:
a. Nuevo usuario
b. Borrar médicos

2. Pantalla con el detalle de un usuario, agrupando los datos relacionados por pestañas (datos personales, dirección, aseguradoras…)

Existen dos tipos de usuarios: pacientes y profesionales. Los datos requeridos para cada uno de ellos son:
Paciente:
Datos personales
NHC (número de historia clínica) * 
Nombre *
1er Apellido *
2º apellido
Género
Fecha de nacimiento
NIF o Pasaporte
Dirección:
Calle
Numero
Puerta
Código postal
Ciudad
Listado aseguradoras
Nombre aseguradora
Tipo de seguro (salud, familiar, dental…)
Número de la tarjeta

Nombre aseguradora
Tipo de seguro (salud, familiar, dental…)
Número de la tarjeta
…

Profesional:
Datos personales
Nº colegiado *
Nombre *
1er Apellido *
2º apellido
Género
Fecha de nacimiento
NIF o Pasaporte
Tipo de profesional
Médico
Enfermero
Administrativo
Dirección:
Calle
Numero
Puerta
Código postal
Ciudad

Marcados con asterisco los datos obligatorios
Tareas
Desarrollar la app mediante AngularJS, JS, HTML5 y SCSS. 

La hoja de estilo debe ser flexible con unidades de medidas relativas cómo % o em. No es importante el diseño final, sí el posicionamiento y composición de la pantalla.

Inicialmente se mostrará el listado de usuarios con datos cargados, por ejemplo desde un JSON. 

Desde la lista de usuarios, el botón  “Nuevo usuario” nos lleva a la pantalla de creación de nuevo usuario donde tenemos que implementar la validación de los datos obligatorios del formulario. Indicar el motivo del rechazo debajo de cada control.

Si supera la validación de formulario, simular el submit. Por ejemplo, guardar los datos introducidos en un fichero de texto. Estos datos deberán verse en el listado de usuarios.

Desde la lista de usuarios, el botón de editar un usuario nos lleva a la pantalla de editar usuario con la misma lógica  que en el apartado anterior pero con los datos precargados.

Desde la lista de usuario el botón borrar nos lanza un popup con el texto “¿Está seguro de que desea borrar el usuario?”. Si aceptamos se borra del listado el usuario.

Desde la listado de usuarios, al clicar el botón “Borrar médicos”, se lanza un popup de confirmación y si aceptamos se borran todos los usuarios profesionales de tipo médico.
i. Usar ES6
ii. De ser posible, hacer uso de las funciones call o apply

Implementar de forma factorizada y unificada toda la funcionalidad común en objetos y funciones. Implementar la solución de forma estructurada con delegación de responsabilidades (capa controlador, servicio, factoría, vista)

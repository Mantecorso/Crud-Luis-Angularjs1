export const viewPacienteComponent = {
 template:  
  `
<h1 class="subheader">Información del usuario: {{user.id}}</h1>
<div class="container-fluid espace alto">
    <div class="row">
    <div class="col-4">
    <p>Usuario: {{user.usuario}}</p>
    <p>NHC:{{user.NHC}}</p>
    <p>Nombre: {{user.nombre}}</p>
    <p>Apellido1: {{user.erApellido}}</p>
    <p>Apellido2: {{user.doApellido}}</p>
    <p>Género: {{user.Genero}}</p>
    <p>Fecha Nacimiento: {{user.FechaDeNacimiento}}</p>
    <p>NIFPasaporte: {{user.NIFPasaporte}}</p>
    <p>Telefono: {{user.Telefono}}</p>
    </div>
    <div class="col-4">
<legend>Dirección</legend>
    <p>Calle: {{user.Calle}}</p>
    <p>Número: {{user.Numero}}</p>
    <p>Puerta: {{user.Puerta}}</p>
    <p>CP: {{user.CodigoPostal}}</p>
    <p>Ciudad: {{user.Ciudad}}</p>
    <p>Provincia: {{user.Provincia}}</p>
    </div>
    <div class="col-4">
    <legend>Listado Aseguradoras</legend>
    <p>Nombre Aseguradora:{{user.NombreAseguradora}}</p>
    <p>Tipo De Seguro:{{user.TipoDeSeguro}}</p>
    <p>Número De La Tarjeta:{{user.NumeroDeLaTarjeta}}</p>
    </div>
    </div>
</div>
    `
}


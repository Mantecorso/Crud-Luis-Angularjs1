export const viewPacienteComponent = {
 template:  
  `
<h1 class="subheader">Información del usuario: {{user.id}}</h1>

<div class="container-fluid espace alto">
    <div class="row">
        <div class="tab">
            <button class="links" onclick="openUser(event, 'DatosPersonales')">Datos Personales</button>
            <button class="links" onclick="openUser(event, 'Direccion')">Dirección</button>
            <button class="links" onclick="openUser(event, 'ListadoAseguradoras')">Listado de Aseguradoras</button>
        </div>
        <div id="DatosPersonales" class="col-4 cuadro">

            <legend>Datos Personales</legend>
            <p>Usuario: {{user.usuario}}</p>
            <p>NHC:{{user.nhc}}</p>
            <p>Nombre: {{user.nombre}}</p>
            <p>Apellido1: {{user.erApellido}}</p>
            <p>Apellido2: {{user.doApellido}}</p>
            <p>Género: {{user.Genero}}</p>
            <p>Fecha de Nacimiento: {{user.FechadeNacimiento}}</p>
            <p>NIF o Pasaporte: {{user.NIF}}</p>
            <p>Telefono: {{user.Telefono}}</p>
        </div>
        <div id="Direccion" class="col-4 cuadro">

            <legend>Dirección</legend>
            <p>Calle: {{user.Calle}}</p>
            <p>Número: {{user.Numero}}</p>
            <p>Puerta: {{user.Puerta}}</p>
            <p>CP: {{user.CodigoPostal}}</p>
            <p>Ciudad: {{user.Ciudad}}</p>
            <p>Provincia: {{user.Provincia}}</p>
        </div>
        <div id="ListadoAseguradoras" class="col-4 cuadro">

            <legend>Listado Aseguradoras</legend>
            <p>Nombre Aseguradora:{{user.NombreAseguradora}}</p>
            <p>Tipo De Seguro:{{user.TipodeSeguro}}</p>
            <p>Número De La Tarjeta:{{user.NumerodeTarjeta}}</p>
        </div>
    </div>
</div>
    `
}


import controller from './viewProf.controller';

export const viewProfComponent = {
 template:  
  `
<h1 class="subheader">Información del usuario: {{user.id}}</h1>

<div class="container-fluid espace alto">
    <div class="row">
        <div class="tabulador">
            <button class="links" onclick="openUser(event, 'DatosPersonales')">Datos Personales</button>
            <button class="links" onclick="openUser(event, 'Direccion')">Dirección</button>
        </div>
        <div id="DatosPersonales" class="col-6 rectangulo">

            <legend>Datos Personales</legend>
            <p>Usuario: {{user.usuario}}</p>
            <p>Numero de Colegiado:  {{user.Numero_de_colegiado}}</p>
            <p>Nombre: {{user.nombre}}</p>
            <p>Apellido1: {{user.erApellido}}</p>
            <p>Apellido2: {{user.doApellido}}</p>
            <p>Género: {{user.Genero}}</p>
            <p>Fecha de Nacimiento: {{user.FechadeNacimiento}}</p>
            <p>NIF o Pasaporte: {{user.NIF}}</p>
            <p>Telefono: {{user.Telefono}}</p>
            <p>Tipo: {{user.Tipo}}</p>
        </div>
        <div id="Direccion" class="col-6 rectangulo">

            <legend>Dirección</legend>
            <p>Calle: {{user.Calle}}</p>
            <p>Número: {{user.Numero}}</p>
            <p>Puerta: {{user.Puerta}}</p>
            <p>CP: {{user.CodigoPostal}}</p>
            <p>Ciudad: {{user.Ciudad}}</p>
            <p>Provincia: {{user.Provincia}}</p>
        </div>
    </div>
</div>
    `
}

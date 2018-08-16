import controller from './viewProf.controller';

export const viewProfComponent = {
    bindings: {
        viewProfesional: '<'
    },
    controller,
 template:  
  `
<p></p>  
<h1 class="subheader">Información del usuario: {{$ctrl.viewProfesional.nombre}}</h1>

<div class="container-fluid espace alto">
    <div class="row">
        <div class="col-2"></div>
        <div class="col-8 tabulador">
            <button class="links" onclick="openUser(event, 'DatosPersonales')">Datos Personales</button>
            <button class="links" onclick="openUser(event, 'Direccion')">Dirección</button>
        </div>
        <div class="col-2"></div>
        <div class="col-2"></div>
        <div id="DatosPersonales" class="col-4 rectangulo">

            <legend>Datos Personales</legend>
            <p>Usuario: {{$ctrl.viewProfesional.usuario}}</p>
            <p>Numero de Colegiado:  {{$ctrl.viewProfesional.Numero_de_colegiado}}</p>
            <p>Nombre: {{$ctrl.viewProfesional.nombre}}</p>
            <p>Apellido1: {{$ctrl.viewProfesional.erApellido}}</p>
            <p>Apellido2: {{$ctrl.viewProfesional.doApellido}}</p>
            <p>Género: {{$ctrl.viewProfesional.Genero}}</p>
            <p>Fecha de Nacimiento: {{$ctrl.viewProfesional.FechadeNacimiento}}</p>
            <p>NIF o Pasaporte: {{$ctrl.viewProfesional.NIF}}</p>
            <p>Telefono: {{$ctrl.viewProfesional.Telefono}}</p>
            <p>Tipo: {{$ctrl.viewProfesional.Tipo}}</p>
        </div>
        <div id="Direccion" class="col-4 rectangulo">

            <legend>Dirección</legend>
            <p>Calle: {{$ctrl.viewProfesional.Calle}}</p>
            <p>Número: {{$ctrl.viewProfesional.Numero}}</p>
            <p>Puerta: {{$ctrl.viewProfesional.Puerta}}</p>
            <p>CP: {{$ctrl.viewProfesional.Codigo_Postal}}</p>
            <p>Ciudad: {{$ctrl.viewProfesional.Ciudad}}</p>
            <p>Provincia: {{$ctrl.viewProfesional.Provincia}}</p>
        </div>
    </div>
</div>
    `
}

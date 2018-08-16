import controller from './viewPaciente.controller';

export const viewPacienteComponent = {
    bindings: {
        viewPaciente: '<'
    },
    controller,
 template:  
  `
<h1 class="subheader">Información del usuario: {{$ctrl.viewPaciente.nombre}}</h1>

<div class="container-fluid espace alto">
    <div class="row">
        <div class="col-2"></div>
        <div class="tabulador col-9">
            <button class="links" onclick="openUser(event, 'DatosPersonales')">Datos Personales</button>
            <button class="links" onclick="openUser(event, 'Direccion')">Dirección</button>
            <button class="links" onclick="openUser(event, 'ListadoAseguradoras')">Listado de Aseguradoras</button>
        </div>
        <div class="col-1"></div>
        <div class="col-2"></div>
        <div id="DatosPersonales" class="col-3 cuadro">

            <legend>Datos Personales</legend>
            <p>Usuario: {{$ctrl.viewPaciente.usuario}}</p>
            <p>NHC:{{$ctrl.viewPaciente.NHC}}</p>
            <p>Nombre: {{$ctrl.viewPaciente.nombre}}</p>
            <p>Apellido1: {{$ctrl.viewPaciente.erApellido}}</p>
            <p>Apellido2: {{$ctrl.viewPaciente.doApellido}}</p>
            <p>Género: {{$ctrl.viewPaciente.Genero}}</p>
            <p>Fecha de Nacimiento: {{$ctrl.viewPaciente.FechadeNacimiento}}</p>
            <p>NIF o Pasaporte: {{$ctrl.viewPaciente.NIF}}</p>
            <p>Telefono: {{$ctrl.viewPaciente.Telefono}}</p>
        </div>
        <div id="Direccion" class="col-3 cuadro">

            <legend>Dirección</legend>
            <p>Calle: {{$ctrl.viewPaciente.Calle}}</p>
            <p>Número: {{$ctrl.viewPaciente.Numero}}</p>
            <p>Puerta: {{$ctrl.viewPaciente.Puerta}}</p>
            <p>CP: {{$ctrl.viewPaciente.Codigo_Postal}}</p>
            <p>Ciudad: {{$ctrl.viewPaciente.Ciudad}}</p>
            <p>Provincia: {{$ctrl.viewPaciente.Provincia}}</p>
        </div>
        <div id="ListadoAseguradoras" class="col-3 cuadro">

            <legend>Listado Aseguradoras</legend>
            <p>Nombre Aseguradora:{{$ctrl.viewPaciente.NombreAseguradora}}</p>
            <p>Tipo De Seguro:{{$ctrl.viewPaciente.TipodeSeguro}}</p>
            <p>Número De La Tarjeta:{{$ctrl.viewPaciente.NumerodeTarjeta}}</p>
        </div>
    </div>
</div>
    `
}


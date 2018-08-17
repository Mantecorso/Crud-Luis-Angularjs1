import controller from './viewPaciente.controller';

export const viewPacienteComponent = {
    bindings: {
        viewPaciente: '<'
    },
    controller,
 template:  
  `
  <h2></h2>
  <h1 class="subheader color" id="cuerpo">Información del usuario: <div class="Patrick">{{$ctrl.viewPaciente.nombre}}</div></h1>

<div class="container-fluid espace alto" id="cuerpo">
    <div class="row justify-content-center">
        
        <div class="tabulador col-12">
            <button class="links btn btn-outline-danger" onclick="openUser(event, 'DatosPersonales')">Datos Personales</button>
            <button class="links btn btn-outline-success" onclick="openUser(event, 'Direccion')">Dirección</button>
            <button class="links btn btn-outline-danger" onclick="openUser(event, 'ListadoAseguradoras')">Listado de Aseguradoras</button>
        </div>
        
        <div id="DatosPersonales" class="cuadro">

            <legend class="color">Datos Personales</legend>
            <div class="luis"><p>Usuario:<div class="Patrick"> {{$ctrl.viewPaciente.usuario}}</div></p></div>
            <div class="luis"><p>NHC:<div class="Patrick">{{$ctrl.viewPaciente.NHC}}</div></p></div>
            <div class="luis"><p>Nombre: <div class="Patrick">{{$ctrl.viewPaciente.nombre}}</div></p></div>
            <div class="luis"><p>Apellido1: <div class="Patrick">{{$ctrl.viewPaciente.erApellido}}</div></p></div>
            <div class="luis"><p>Apellido2: <div class="Patrick">{{$ctrl.viewPaciente.doApellido}}</div></p></div>
            <div class="luis"><p>Género: <div class="Patrick">{{$ctrl.viewPaciente.Genero}}</div></p></div>
            <div class="luis"><p>Fecha de Nacimiento: <div class="Patrick">{{$ctrl.viewPaciente.FechadeNacimiento}}</div></p></div>
            <div class="luis"><p>NIF o Pasaporte: <div class="Patrick">{{$ctrl.viewPaciente.NIF}}</div></p></div>
            <div class="luis"><p>Telefono: <div class="Patrick">{{$ctrl.viewPaciente.Telefono}}</div></p></div>
            
        </div>
        <div id="Direccion" class="cuadro">

        <legend class="color">Dirección</legend>
        <div class="luis"><p>Calle: <div class="Patrick">{{$ctrl.viewPaciente.Calle}}</div></p></div>
        <div class="luis"><p>Número: <div class="Patrick">{{$ctrl.viewPaciente.Numero}}</div></p></div>
        <div class="luis"><p>Puerta: <div class="Patrick">{{$ctrl.viewPaciente.Puerta}}</div></p></div>
        <div class="luis"><p>CP: <div class="Patrick">{{$ctrl.viewPaciente.Codigo_Postal}}</div></p></div>
        <div class="luis"><p>Ciudad: <div class="Patrick">{{$ctrl.viewPaciente.Ciudad}}</div></p></div>
        <div class="luis"><p>Provincia: <div class="Patrick">{{$ctrl.viewPaciente.Provincia}}</div></p></div>
        </div>
        <div id="ListadoAseguradoras" class="cuadro">

            <legend class="color">Listado Aseguradoras</legend>
            <div class="luis"><p>Nombre Aseguradora:<div class="Patrick">{{$ctrl.viewPaciente.NombreAseguradora}}</div></p></div>
            <div class="luis"><p>Tipo De Seguro:<div class="Patrick">{{$ctrl.viewPaciente.TipodeSeguro}}</div></p></div>
            <div class="luis"><p>Número De La Tarjeta:<div class="Patrick">{{$ctrl.viewPaciente.NumerodeTarjeta}}</div></p></div>
        </div>
    </div>
</div>
    `
}


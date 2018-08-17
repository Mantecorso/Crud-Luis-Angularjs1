import controller from './viewProf.controller';

export const viewProfComponent = {
    bindings: {
        viewProfesional: '<'
    },
    controller,
 template:  
  `
<p></p>  
<h1 class="subheader" id="cuerpo">Información del usuario: <div class="Patrick"{{$ctrl.viewProfesional.nombre}}</div></h1>

<div class="container-fluid espace alto" id="cuerpo">
    <div class="row">
        <div class="col-2"></div>
        <div class="col-8 tabulador">
            <button class="links btn btn-outline-success" onclick="openUser(event, 'DatosPersonales')">Datos Personales</button>
            <button class="links btn btn-outline-danger" onclick="openUser(event, 'Direccion')">Dirección</button>
        </div>
        <div class="col-2"></div>
        <div class="col-2"></div>
        <div id="DatosPersonales" class="col-4 cuadro">

            <legend>Datos Personales</legend>
            <div class="luis"><p>Usuario:<div class="Patrick"> {{$ctrl.viewPaciente.usuario}}</div></p></div>
            <div class="luis"><p>Numero de Colegiado:  <div class="Patrick">{{$ctrl.viewProfesional.Numero_de_colegiado}}</div></p></div>
            <div class="luis"><p>Nombre: <div class="Patrick">{{$ctrl.viewPaciente.nombre}}</div></p></div>
            <div class="luis"><p>Apellido1: <div class="Patrick">{{$ctrl.viewPaciente.erApellido}}</div></p></div>
            <div class="luis"><p>Apellido2: <div class="Patrick">{{$ctrl.viewPaciente.doApellido}}</div></p></div>
            <div class="luis"><p>Género: <div class="Patrick">{{$ctrl.viewPaciente.Genero}}</div></p></div>
            <div class="luis"><p>Fecha de Nacimiento: <div class="Patrick">{{$ctrl.viewPaciente.FechadeNacimiento}}</div></p></div>
            <div class="luis"><p>NIF o Pasaporte: <div class="Patrick">{{$ctrl.viewPaciente.NIF}}</div></p></div>
            <div class="luis"><p>Telefono: <div class="Patrick">{{$ctrl.viewPaciente.Telefono}}</div></p></div>
            <div class="luis"><p>Tipo: <div class="Patrick">{{$ctrl.viewProfesional.Tipo}}</div></p></div>
        </div>
        <div id="Direccion" class="col-4 cuadro">

            <legend>Dirección</legend>
            <div class="luis"><p>Calle: <div class="Patrick">{{$ctrl.viewPaciente.Calle}}</div></p></div>
            <div class="luis"><p>Número: <div class="Patrick">{{$ctrl.viewPaciente.Numero}}</div></p></div>
            <div class="luis"><p>Puerta: <div class="Patrick">{{$ctrl.viewPaciente.Puerta}}</div></p></div>
            <div class="luis"><p>CP: <div class="Patrick">{{$ctrl.viewPaciente.Codigo_Postal}}</div></p></div>
            <div class="luis"><p>Ciudad: <div class="Patrick">{{$ctrl.viewPaciente.Ciudad}}</div></p></div>
            <div class="luis"><p>Provincia: <div class="Patrick">{{$ctrl.viewPaciente.Provincia}}</div></p></div>

        </div>
    </div>
</div>
    `
}

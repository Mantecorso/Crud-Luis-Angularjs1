import controller from './viewProf.controller';

export const viewProfComponent = {
    bindings: {
        viewProfesional: '<'
    },
    controller,
 template:  
  `
 
<h1 class="subheader color cuerpo">Información del usuario: <div class="Patrick">{{$ctrl.viewProfesional.nombre}}</div></h1>

<div class="container-fluid espace alto cuerpo">
    <div class="row justify-content-center">
        
        <div class="col-12 tabulador">
            <button class="links btn btn-outline-success" onclick="viewUser(event, 'DatosPersonales')">Datos Personales</button>
            <button class="links btn btn-outline-danger" onclick="viewUser(event, 'Direccion')">Dirección</button>
        </div>

        <div id="DatosPersonales" class="cuadro">

            <legend>Datos Personales</legend>
            <div class="luis"><p>Usuario:<div class="Patrick"> {{$ctrl.viewProfesional.usuario}}</div></p></div>
            <div class="luis"><p>Numero de Colegiado:  <div class="Patrick">{{$ctrl.viewProfesional.Numero_de_colegiado}}</div></p></div>
            <div class="luis"><p>Nombre: <div class="Patrick">{{$ctrl.viewProfesional.nombre}}</div></p></div>
            <div class="luis"><p>Apellido1: <div class="Patrick">{{$ctrl.viewProfesional.erApellido}}</div></p></div>
            <div class="luis"><p>Apellido2: <div class="Patrick">{{$ctrl.viewProfesional.doApellido}}</div></p></div>
            <div class="luis"><p>Género: <div class="Patrick">{{$ctrl.viewProfesional.Genero}}</div></p></div>
            <div class="luis"><p>Fecha de Nacimiento: <div class="Patrick">{{$ctrl.viewProfesional.FechadeNacimiento}}</div></p></div>
            <div class="luis"><p>NIF o Pasaporte: <div class="Patrick">{{$ctrl.viewProfesional.NIF}}</div></p></div>
            <div class="luis"><p>Telefono: <div class="Patrick">{{$ctrl.viewProfesional.Telefono}}</div></p></div>
            <div class="luis"><p>Tipo: <div class="Patrick">{{$ctrl.viewProfesional.Tipo}}</div></p></div>
        </div>
        <div id="Direccion" class="cuadro">

            <legend>Dirección</legend>
            <div class="luis"><p>Calle: <div class="Patrick">{{$ctrl.viewProfesional.Calle}}</div></p></div>
            <div class="luis"><p>Número: <div class="Patrick">{{$ctrl.viewProfesional.Numero}}</div></p></div>
            <div class="luis"><p>Puerta: <div class="Patrick">{{$ctrl.viewProfesional.Puerta}}</div></p></div>
            <div class="luis"><p>CP: <div class="Patrick">{{$ctrl.viewProfesional.Codigo_Postal}}</div></p></div>
            <div class="luis"><p>Ciudad: <div class="Patrick">{{$ctrl.viewProfesional.Ciudad}}</div></p></div>
            <div class="luis"><p>Provincia: <div class="Patrick">{{$ctrl.viewProfesional.Provincia}}</div></p></div>

        </div>
    </div>
</div>
    `
}

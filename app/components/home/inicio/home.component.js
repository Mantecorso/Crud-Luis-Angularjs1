import controller from './home.controller'

export const HomeComponent = {
    bindings:{
        dataResult: '<'
    },
    controller,
    template: `
    <div class="container-fluid" id="cuerpo">
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6 espace">
            
                <div class="listadoPrincipal">
                    <h4> Nombre </h4>
                    <h4> Apellido </h4>
                    <h4> Usuario </h4>
                    <h4> Editar </h4>
                    <h4> Ver </h4>
                    <h4> Borrar </h4>
                </div>
                <table class="table table-hover ">
                                
                                <tbody>                                     
                                  <tr ng-repeat="user in $ctrl.dataResult">
                                     
                                    <td>{{user.nombre}}</td>
                                    <td>{{user.erApellido}}</td>
                                    <td>{{user.usuario}}</td>
                                    <td>
                                        <div ng-if="user.usuario === 'paciente'"><a ui-sref="editPaciente/{{id}}" class=""> Editar Paciente</a></div>
                                        <div ng-if="user.usuario === 'profesional'"><a ui-sref="editProf/{{id}}" class="">Editar Profesional</a></div>
                                    </td>
                                    <td>
                                        <div ng-if="user.usuario === 'paciente'"><a ui-sref="viewPaciente/{{id}}" class="btn btn-dark nerea">Ver Paciente</a></div>
                                        <div ng-if="user.usuario === 'profesional'"><a ui-sref="viewProf/{{id}}" class="btn btn-dark nerea">Ver Profesional</a></div>
                                    </td>
                                    
                                    <td>                                           
                                        <a data-toggle="modal" data-target="#deleteUsers" class="btn btn-dark nerea">X</a>
                                        <div class="modal " id="deleteUsers" tabindex="-1" role="dialog" aria-labelledby="EliminarUsers" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title">
                                                        Borrar Usuario
                                                    </h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    Advertencia, vas a borrar a este usuario ¿Estás seguro?
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="submit" class="btn btn-secondary">
                                                        Si
                                                    </button>
                                                    <button type="button" class="btn btn-primary" data-dismiss="modal">
                                                        No
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    
                                  </tr>
                                  
                                </tbody>
                            </table>
            </div>
            <div class="col-3"></div>
        </div>
    </div>
    `
}


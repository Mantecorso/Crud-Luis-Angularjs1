import controller from './home.controller'

export const HomeComponent = {
    bindings:{
        dataResult: '<'
    },
    controller,
    template: `
    <div class="container-fluid" id="cuerpo">
    {{dataResult}}
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6 espace">
            

                <table class="table table-hover ">
                                
                                <tbody>   
                                <tr>
                                
                    <td><h4> Nombre </h4></td>
                    <td><h4> Apellido </h4></td>
                    <td><h4> Usuario </h4></td>
                    <td><h4> Editar </h4></td>
                    <td><h4> Ver </h4></td>
                    <td><h4> Borrar </h4></td>
                
                                </tr>
                                  <tr ng-repeat="user in $ctrl.dataResult">
                                     
                                    <td>{{user.nombre}}</td>
                                    <td>{{user.erApellido}}</td>
                                    <td>{{user.usuario}}</td>
                                    <td>
                                        <div ng-if="user.usuario === 'paciente'"><a ui-sref="editPaciente/{{userID: user.id}}" ng-click="" class="btn btn-dark nerea"> Edit</a></div>
                                        <div ng-if="user.usuario === 'profesional'"><a ui-sref="editProf/{{userID: user.id}}" class="btn btn-dark nerea">Edit</a></div>
                                    </td>
                                    <td>
                                        <div ng-if="user.usuario === 'paciente'"><a ui-sref="viewPaciente/{{id}}" class="btn btn-dark nerea">View</a></div>
                                        <div ng-if="user.usuario === 'profesional'"><a ui-sref="viewProf/{{id}}" class="btn btn-dark nerea">View</a></div>
                                    </td>
                                    
                                    <td>                                           
                                        <a data-toggle="modal" data-target="#deleteUsers" class="btn btn-dark nerea">Delete</a>
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
//<div class="listadoPrincipal">
//<h4> Nombre </h4>
//<h4> Apellido </h4>
//<h4> Usuario </h4>
//<h4> Editar </h4>
//<h4> Ver </h4>
//<h4> Borrar </h4>
//</div>

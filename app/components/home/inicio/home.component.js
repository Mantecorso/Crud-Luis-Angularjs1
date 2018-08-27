import controller from './home.controller'

export const HomeComponent = {
    bindings:{
        dataResult: '<'
    },
    controller,
    template: `
    <div class="container-fluid d-none d-md-block cuerpo">
   
        <div class="row subheader">
        <div class="col-3"></div>
        <div class="col-6">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th> Total Clientes </th>
                        <th> Total Pacientes </th>
                        <th> Total Profesionales </th>
                        <th> Total Medicos </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="doublecenter">
                        <td>{{$ctrl.customTotal.total}}</td>
                        <td>{{$ctrl.customTotal.pacientes}}</td>
                        <td>{{$ctrl.customTotal.profesionales}}</td>
                        <td>{{$ctrl.customTotal.medicos}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-3"></div>
        <div class="col-2"></div>
            <div class=" col-8 espace table-responsive-sm">
                <table class="table table-hover"
                    <thead class="thead-dark">
                        <tr>                    
                            <th><h4> Nombre </h4></th>
                            <th><h4> Apellido </h4></th>
                            <th><h4> Usuario </h4></th>
                            <th><h4> Editar </h4></th>
                            <th><h4> Ver </h4></th>
                            <th><h4> Borrar </h4></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="user in $ctrl.dataResult track by user.id">
                                     
                            <td>{{user.nombre}}</td>
                            <td>{{user.erApellido}}</td>
                            <td>{{user.usuario}}</td>
                            <td>
                                <div ng-if="user.usuario === 'paciente'"><a ui-sref="editPaciente({userID:{{ user.id}}})" class="btn btn-dark nerea"> Edit</a></div>
                                <div ng-if="user.usuario === 'profesional'"><a ui-sref="editProf({userID:{{ user.id}}})" class="btn btn-dark nerea">Edit</a></div>                                </td>
                            <td>
                                <div ng-if="user.usuario === 'paciente'"><a ui-sref="viewPaciente({userID:{{user.id}}})" class="btn btn-dark nerea">View</a></div>
                                <div ng-if="user.usuario === 'profesional'"><a ui-sref="viewProf({userID:{{user.id}}})" class="btn btn-dark nerea">View</a></div>
                            </td>            
                            <td>                                           
                                <a data-toggle="modal" data-target="#deleteUser{{user.id}}" href="#" class="btn btn-dark nerea">Delete</a>
                                <div class="modal " id="deleteUser{{user.id}}" tabindex="-1" role="dialog" aria-labelledby="EliminarUsers" aria-hidden="true">
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
                                                <button type="submit" ng-click="$ctrl.deleteUser(user.id)" class="btn btn-secondary">
                                                    Si
                                                </button>
                                                <button type="button" class="btn btn-primary" data-dismiss="modal">
                                                    No
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>            
                        </tr>
                                  
                    </tbody>
                </table>
            </div>
            <div class="col-2"></div>
        </div>
    </div>
    <div class="container-fluid d-block d-md-none cuerpo">
    
        <div class="row" subheader>
        
        <div class="col-12">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th> Total Clientes </th>
                        <th> Total Pacientes </th>
                        <th> Total Profesionales </th>
                        <th> Total Medicos </th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr class="doublecenter">
                        <td>{{$ctrl.customTotal.total}}</td>
                        <td>{{$ctrl.customTotal.pacientes}}</td>
                        <td>{{$ctrl.customTotal.profesionales}}</td>
                        <td>{{$ctrl.customTotal.medicos}}</td>
                    </tr>
            
                </tbody>
            </table>
        </div>
        
            <div class="col-12 espace table-responsive-sm">
                <table class="table table-hover"
                    <thead class="thead-dark">
                        <tr>                    
                            <th><h4> Nombre </h4></th>
                            <th><h4> Editar </h4></th>
                            <th><h4> Ver </h4></th>
                            <th><h4> Borrar </h4></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr ng-repeat="user in $ctrl.dataResult track by user.id">
                                     
                            <td>{{user.nombre}}</td>
                            <td>
                                <div ng-if="user.usuario === 'paciente'"><a ui-sref="editPaciente({userID:{{ user.id}}})" class="btn btn-dark nerea"> Edit</a></div>
                                <div ng-if="user.usuario === 'profesional'"><a ui-sref="editProf({userID:{{ user.id}}})" class="btn btn-dark nerea">Edit</a></div>                                </td>
                            <td>
                                <div ng-if="user.usuario === 'paciente'"><a ui-sref="viewPaciente({userID:{{user.id}}})" class="btn btn-dark nerea">View</a></div>
                                <div ng-if="user.usuario === 'profesional'"><a ui-sref="viewProf({userID:{{user.id}}})" class="btn btn-dark nerea">View</a></div>
                            </td>            
                            <td>                                           
                                <a data-toggle="modal" data-target="#deleteUser{{user.id}}" href="#" class="btn btn-dark nerea">Delete</a>
                                <div class="modal " id="deleteUser{{user.id}}" tabindex="-1" role="dialog" aria-labelledby="EliminarUsers" aria-hidden="true">
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
                                                <button type="submit" ng-click="$ctrl.deleteUser(user.id)" class="btn btn-secondary">
                                                    Si
                                                </button>
                                                <button type="button" class="btn btn-primary" data-dismiss="modal">
                                                    No
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>            
                        </tr>
                                  
                    </tbody>
                </table>
            </div>
            
        </div>
    </div>
    `
}

import controller from './header.controller'

export const HeaderComponent = {
   
    controller,
    template: `
    <header>
    
        <div class= "container-fluid d-none d-md-block">
            <div class= "row">
                <div class= "col-1">
                    <a href="https://alfatecsistemas.es/" target="_blanck"><img src="./images/th.jpeg" class="logo2"></img></a>
                </div>
                <div class= "col-10 header2">
                    <h1>Listado de Usuarios</h1>                                        
                                                
                            
                                <a ui-sref="pacienteoprof" class="btn btn-success">Nuevo Usuario</a>
                            
                                <button type="button" class="btn btn btn-danger" data-toggle="modal" data-target="#borrarMedicos">
                                    Borrar Medicos
                                </button>
                            
                            <div class="modal fade" id="borrarMedicos" tabindex="-1" role="dialog" aria-labelledby="borrarMedicos" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">
                                                Borrar Medicos
                                            </h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            Advertencia, vas a borrar a todos los registros de profesionales medicos, <br> ¿Estás seguro?.
                                        </div>
                                        <div class="modal-footer">
                                            <button type="submit" value= "deleteall" ng-click="$ctrl.deleteMedic()" data-dismiss="modal" class="btn btn-secondary">
                                                Si
                                            </button>
                                            <button type="button" class="btn btn-primary" data-dismiss="modal">
                                                No
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                    
                </div>
                <div class= "col-1">
                    <a href="https://mantecorso.github.io/LuisJuradoQ/" target="_blanck"><img src="./images/Luislogo.png" class="logo"></img></a>
                </div>
            </div>
        </div>
        <div class= "container-fluid d-block d-md-none">
            <div class= "row">
               
                <div class= "col-12 mobile">                                                                                                            
                            <div>
                                <a ui-sref="pacienteoprof" class="btn btn-success">Nuevo Usuario</a>
                            </div>
                            <div>
                                <button type="button" class="btn btn btn-danger" data-toggle="modal" data-target="#borrarMedicos">
                                    Borrar Medicos
                                </button>
                            </div>
                            <div class="modal fade" id="borrarMedicos" tabindex="-1" role="dialog" aria-labelledby="borrarMedicos" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">
                                                Borrar Medicos
                                            </h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            Advertencia, vas a borrar a todos los registros de profesionales medicos, <br> ¿Estás seguro?.
                                        </div>
                                        <div class="modal-footer">
                                            <button type="submit" value= "deleteall" ng-click="$ctrl.deleteMedic()" data-dismiss="modal" class="btn btn-secondary">
                                                Si
                                            </button>
                                            <button type="button" class="btn btn-primary" data-dismiss="modal">
                                                No
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                </div>
                
            </div>
            <h2 class="mobile">Listado de Usuarios</h2>
        </div>
        
    </header>
    
    `
}



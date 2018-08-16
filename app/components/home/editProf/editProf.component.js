import controller from './editProf.controller';

export const EditProfComponent = {
    bindings: {
        editProfesionales: '<'
    },
    controller,
    template: `
    <div class="container-fluid alto">
        <div class="row">
            
            <div class="col-3"></div>
            <div class="col-6">
             
            <form class="needs-validation" name="formulario"  ng-submit="$ctrleditProfUser(formulario)" novalidate>
                <div class="form-row">

                    <div class="col-md-6 mb-3">
                    <h3>Datos Personales</h3>  
                        
                    </div>

                    <div class="col-md-6 mb-3">
                        
                        <input type="text" class="form-control" id="validationCustom01" ng-model="$ctrl.editProfesionales.Numero_de_colegiado" placeholder="Numero de Colegiado" required>
                        <div class="invalid-feedback">
                            Por favor, introduzca un numero de historial correcto.
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        
                        <input type="text" class="form-control" id="validationCustom02" ng-model="$ctrl.editProfesionales.nombre" placeholder="Nombre" required>
                        <div class="invalid-feedback">
                            Por favor, introduzca un nombre correcto.
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        
                        <input type="text" class="form-control" id="validationCustom03" ng-model="$ctrl.editProfesionales.erApellido" placeholder="1er Apellido" required>
                        <div class="invalid-feedback">
                            Primer apellido obligatorio.
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        
                        <input type="text" class="form-control" id="validationDefault04" ng-model="$ctrl.editProfesionales.doApellido" placeholder="2do Apellido">
                    </div>
                    <div class="col-md-4 mb-3">

                        <fieldset class="form-group">
                            <div class="row">
                                <legend class="col-form-label col-sm-4 pt-0" ng-model="$ctrl.editProfesionales.Genero">Genero</legend>
                                <div class="col-sm-8">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
                                        <label class="form-check-label" for="gridRadios1">
                                            Masculino
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                                        <label class="form-check-label" for="gridRadios2">
                                            Femenino
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3">
                                        <label class="form-check-label" for="gridRadios3">
                                            Sin especificar
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        
                    </div>
                    <div class="col-md-4 mb-3">
                        
                        <input type="date" class="form-control" id="validationDefault06" ng-model="$ctrl.editProfesionales.FechadeNacimiento" placeholder="Fecha de Nacimiento">
                    </div>
                    <div class="col-md-4 mb-3">
                        
                        <input type="text" class="form-control" id="validationDefault07" ng-model="$ctrl.editProfesionales.NIF" placeholder="NIF o Pasaporte">
                    </div>
                    <div class="col-md-4 mb-3">
                        <p>Tipo de Profesional</p>
                        <select class="custom-select my-1 mr-sm-2" ng-model="$ctrl.editProfesionales.Tipo" id="inlineFormCustomSelectPref">
                            <option selected>Escoge...</option>
                            <option value="1">Medico</option>
                            <option value="2">Enfermero</option>
                            <option value="3">Administrativo</option>
                        </select>
                        
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                        <h3>Direccion</h3>  
                    </div>
                    <div class="col-md-6 mb-3">
                    </div>
                    <div class="col-md-4 mb-3">
                        
                        <input type="text" class="form-control" id="validationDefault08" ng-model="$ctrl.editProfesionales.Calle" placeholder="Calle">
                    </div>
                    <div class="col-md-4 mb-3">
                    
                        <input type="text" class="form-control" id="validationDefault09" ng-model="$ctrl.editProfesionales.Numero" placeholder="Numero">
                    </div>
                    <div class="col-md-4 mb-3">
                    
                        <input type="text" class="form-control" id="validationDefault10" ng-model="$ctrl.editProfesionales.Puerta" placeholder="Puerta">
                    </div>
                    <div class="col-md-4 mb-3">
                    
                        <input type="text" class="form-control" id="validationDefault11" ng-model="$ctrl.editProfesionales.Codigo_Postal" placeholder="Codigo Postal">
                    </div>
                    <div class="col-md-4 mb-3">
                    
                        <input type="text" class="form-control" id="validationDefault12" ng-model="$ctrl.editProfesionales.Ciudad" placeholder="Ciudad">
                    </div>
                    <div class="col-md-4 mb-3">
                    
                        <input type="text" class="form-control" id="validationDefault13" ng-model="$ctrl.editProfesionales.Provincia" placeholder="Provincia">
                    </div>
                    
                </div>
                  
                <div class="center">  
                    <button class="btn btn-primary" type="submit" value= "edit">Editar registro</button>
                </div>        
            </form>


    `


}
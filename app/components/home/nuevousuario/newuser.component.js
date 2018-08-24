import controller from './newuser.controller';

export const NuevoUsuarioComponent = {
    bindings: {
        newUser: '<'
    },
    controller,
    template: `

    <div class="container-fluid alto">
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                    
            <form class="needs-validation"  name="formulario" ng-submit="$ctrl.addUser(formulario)" novalidate>
                <div class="form-row">

                    <div class="col-md-6 mb-3">
                    <h3>Datos Personales</h3>      
                    </div>

                    <div class="col-md-6 mb-3">
                        
                        <input type="text" class="form-control" id="validationCustom01" ng-model="$ctrl.newUser.NHC" placeholder="NHC (numero de historia clinica)" required>
                        <div class="invalid-feedback">
                            Por favor, introduzca un numero de historial correcto.
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        
                        <input type="text" class="form-control" id="validationCustom02" ng-model="$ctrl.newUser.nombre" placeholder="Nombre" required>
                        <div class="invalid-feedback">
                            Por favor, introduzca un nombre correcto.
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        
                        <input type="text" class="form-control" id="validationCustom03" ng-model="$ctrl.newUser.erApellido" placeholder="1er Apellido" required>
                        <div class="invalid-feedback">
                            Primer apellido obligatorio.
                        </div>
                    </div>
                    <div class="col-md-4 mb-3">
                        
                        <input type="text" class="form-control" id="validationDefault04" ng-model="$ctrl.newUser.doApellido" placeholder="2do Apellido">
                    </div>
                    <div class="col-md-4 mb-3">

                            <label>Género</label>
                            <select ng-model="$ctrl.newUser.Genero">
                                <option value="hombre">Hombre</option>
                                <option value="mujer">Mujer</option>
                                <option value="Sin especificar">Sin especificar</option>
                            </select>
                        
                    </div>
                    <div class="col-md-4 mb-3">
                        
                        <input type="date" class="form-control" id="validationDefault06" ng-model="$ctrl.newUser.FechadeNacimiento" placeholder="Fecha de Nacimiento">
                    </div>
                    <div class="col-md-4 mb-3">
                        
                        <input type="text" class="form-control" id="validationDefault07" ng-model="$ctrl.newUser.NIF" placeholder="NIF o Pasaporte">
                    </div>
                    
                </div>
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                        <h3>Direccion</h3>  
                    </div>
                    <div class="col-md-6 mb-3">
                    </div>
                    <div class="col-md-4 mb-3">
                        
                        <input type="text" class="form-control" id="validationDefault08" ng-model="$ctrl.newUser.Calle" placeholder="Calle">
                    </div>
                    <div class="col-md-4 mb-3">
                    
                        <input type="number" class="form-control" id="validationDefault09" ng-model="$ctrl.newUser.Numero" placeholder="Numero">
                    </div>
                    <div class="col-md-4 mb-3">
                    
                        <input type="text" class="form-control" id="validationDefault10" ng-model="$ctrl.newUser.Puerta" placeholder="Puerta">
                    </div>
                    <div class="col-md-4 mb-3">
                    
                        <input type="number" class="form-control" id="validationDefault11" ng-model="$ctrl.newUser.Codigo_Postal" placeholder="Codigo Postal">
                    </div>
                    <div class="col-md-4 mb-3">
                    
                        <input type="text" class="form-control" id="validationDefault12" ng-model="$ctrl.NewUser.Ciudad" placeholder="Ciudad">
                    </div>
                    <div class="col-md-4 mb-3">
                    
                        <input type="text" class="form-control" id="validationDefault13" ng-model="$ctrl.newUser.Provincia" placeholder="Provincia">
                    </div>
                    
                </div>
                <div class="form-row">
                    <div class="col-md-6 mb-3">
                        <h3>Listado de Aseguradora</h3>  
                    </div>
                    <div class="col-md-6 mb-3">
                    </div>
                    <div class="col-md-4 mb-3">
                        <p>Aseguradora</p>
                        <input type="text" class="form-control" id="validationDefault14" ng-model="$ctrl.newUser.NombreAseguradora" placeholder="Nombre Aseguradora">
                    </div>
                    <div class="col-md-4 mb-3">
                        <p>Tipo de Seguro Medico</p>
                        <select class="custom-select my-1 mr-sm-2" ng-model="$ctrl.newUser.TipodeSeguro" id="inlineFormCustomSelectPref">
                            <option selected>Escoge...</option>
                            <option value="1">Salud</option>
                            <option value="2">Familiar</option>
                            <option value="3">Dental</option>
                        </select>
                        
                    </div>
                    <div class="col-md-4 mb-3">
                        <p>Tarjeta</p>
                        <input type="number" class="form-control" id="validationDefault16" ng-model="$ctrl.newUser.NumerodeTarjeta" placeholder="Numero de Tarjeta">
                    </div>
                </div>  
                <div class="center">  
                    <button class="btn btn-primary" value="anyadir" type="submit">
                    Añadir </button>
                    
                </div>        
            </form>

            </div>
            <div class="col-3"></div>
        </div>
    </div>
    
    `
}
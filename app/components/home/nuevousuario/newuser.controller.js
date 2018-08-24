class NewUserController {
     
    constructor(datosService, $state) {
        this.state = $state;        
        this.datosService = datosService;
        this.newUser = [];
    }

    addUser(formulario) {   
        console.log("aqui llega");
        
        if (formulario.$invalid === true) {
            return
        } else {
            console.log("aqui llega llega");
            this.newUser.usuario = 'paciente';
            this.datosService.newUser(this.newUser);
            this.state.go('home');
        }
        console.log("aqui tambien llega");
    }

    
}

export default NewUserController;
class NewUserController {
    constructor(datosService) {

        this.datosService = datosService;
        this.newUser = [];
    }

    createNewUser(){
        this.newUser.tipo= 'paciente';
        this.datosService.newUser(this.newUser);
        
    }
}

export default NewUserController;
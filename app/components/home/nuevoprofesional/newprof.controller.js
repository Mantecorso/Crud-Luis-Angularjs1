class NewProfController {
    constructor(datosService) {

        this.datosService = datosService;
        this.newUser = [];
    }

    createNewUser(){
        this.newUser.tipo= 'profesional';
        this.datosService.newUser(this.newUser);
        
    }
}

export default NewProfController;
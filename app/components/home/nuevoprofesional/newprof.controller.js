class NewProfController {

    constructor(datosService, $state) {
        this.state= $state;
        this.datosService = datosService;
        this.newUser = [];
    }
 
    addUser(formulario) {
        if (formulario.$invalid === true) {
            return
        } else {
            this.newUser.usuario = 'profesional';
            this.dataService.newUser(this.newUser);
            this.state.go('home');
        } 

    }
}

export default NewProfController;

class NewUserController {

    constructor(datosService, $state) {
        this.state = $state;
        this.datosService = datosService;
        this.newUser = [];
    }

    addUser(formulario) {
        if (formulario.$invalid === true) {
            return
        } else {
            this.newUser.usuario = 'paciente';
            this.datosService.newUser(this.newUser);
            this.state.go('home');
        }
    }
}

export default NewUserController;
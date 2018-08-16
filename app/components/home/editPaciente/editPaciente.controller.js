class EditPacienteController{ 

    constructor(datosService, $location, $state) {
        this.state = $state;
        let path = $location.$$path.split('/')
        
        this.datosService = datosService;
        this.getID(path[path.length -1]);
        this.editPacientes = [];
    }

    getID(id){
        this.datosService.getData()
            .then(resultado =>{
                 
                this.editPacientes = resultado.filter(item => item.id == + id)[0];
            })
    }
    editPaciUser(formulario){

        if(formulario.$invalid === true) {
            return
        } else {
           this.datosService.editPacifUser(this.editPacientes);
           this.state.go('home');
        }    
    }
        
}

export default EditPacienteController;


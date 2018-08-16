class EditProfController{

    constructor(datosService, $location, $state) {
        this.state = $state;
        let path = $location.$$path.split('/')
        
        this.datosService = datosService;
        this.getID(path[path.length -1]);
        this.editProfesionales = []; 
    }

    getID(id){
        this.datosService.getData()
            .then(resultado =>{   
                this.editProfesionales = resultado.filter(item => item.id == + id)[0];
            })
    }

    editProfUser(formulario){

        if(formulario.$invalid === true) {
            return
        } else {
           this.datosService.editProfUser(this.editProfesionales);
           this.state.go('home');
        }    
    }
}

export default EditProfController;
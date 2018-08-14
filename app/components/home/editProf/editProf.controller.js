class EditProfController{

    constructor(datosService, $location, $state) {
        this.state = $state;
        let path = $location.$$path.split('/')
        
        this.datosService = datosService;
        this.getID(path[path.length -1]);
        
    }

    getID(id){
        this.datosService.getData()
            .then(resultado =>{   
                this.datauser = resultado.filter(item => item.id == + id)[0];
            })
    }

    editProfUser(formulario){

        if(form.$invalid === true) {
            return
        } else {
           this.dataService.editProfUser(this.datauser);
           this.state.go('home');
        }    
    }
}

export default EditProfController;
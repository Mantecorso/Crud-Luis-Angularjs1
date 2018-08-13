class HomeController{
    constructor(datosService){
        this.datosService = datosService;
        this.getData();
    }

    getData(){
        this.datosService.getData()
            .then(resultado=>{
                this.dataResult = resultado;             
            })
    }
    
     deleteUser(id){
            console.log(id);
            this.datosService.deleteUser(id);
            let modal = $('#borrarUsuario' + id);
            modal.modal('hide')
 //           $('#deleteUsers'+id).modal('hide')
     }
     
     deleteMedic(){
        console.log("Hola esto es para borrar medicos");
                this.datosService.deleteMedic();
            }        
}

export default HomeController;
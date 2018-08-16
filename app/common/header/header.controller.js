class HeaderController{
    constructor(datosService){
        this.datosService = datosService;
        this.getData();
    }

    getData(){
        
        this.datosService.getData()
            .then(resultado=>{
                this.medicos = resultado;             
            })
    }
     
     deleteMedic(Tipo="medico"){
        
                this.datosService.deleteMedic(Tipo="medico");
                
            }        
}

export default HeaderController;
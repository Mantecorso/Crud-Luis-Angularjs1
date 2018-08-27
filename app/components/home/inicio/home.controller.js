class HomeController{
    constructor(datosService){
        this.datosService = datosService;
        this.getData();
    }


    extractInfo(data){
        return new Promise((resolve,reject)=>{
            let med = 0;
            let paci = 0;
            let prof = 0;
            let result={};
            for(let i=0; i<data.length; i++)
             {
                 if (data[i].Tipo === "Medico"){
                     med++;
                 }
                 result.medicos = med;
                if (data[i].usuario === "paciente") {
                    paci++;
                 }
                 result.pacientes = paci;
                if (data[i].usuario === "profesional") {
                    prof++;
                } 
                result.profesionales = prof;
             }
             result.total=data.length;
             
            resolve (result);
        })
    }
    getData(){
        
        this.datosService.getData()
            .then(resultado=>{
                this.extractInfo(resultado)
                 .then(res=>{
                    this.customTotal= res;
                 });
                this.dataResult = resultado;             
            })
    }
    
     deleteUser(id){
            console.log(id);
            this.datosService.deleteUser(id);
            let modal = $('#deleteUser' + id)
            modal.modal('hide');
     }
     
     deleteMedic(){
        console.log("Hola esto es para borrar medicos");
                this.datosService.deleteMedic();
            }        
}

export default HomeController;
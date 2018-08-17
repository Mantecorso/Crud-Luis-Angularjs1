class HeaderController {
    
    constructor(datosService) {
        this.datosService = datosService;
    }

    deleteMedic() {
        this.datosService.deleteMedic();
    }
}

export default HeaderController;
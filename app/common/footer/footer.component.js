export const FooterComponent = {
    template: `
    <footer>
    
        <div class= "container-fluid d-none d-md-block footer1">
            <div class= "row">
                <div class="col-2">
                    <a ui-sref="inicio" class="btn btn-warning">Volver inicio</a>
                </div>
                <div class= "col-5">
                    <h3>Create by Luis</h3>
                </div>
                <div class= "col-4"></div>
                <div class= "col-1">
                    <a href="https://mantecorso.github.io/LuisJuradoQ/" target="_blanck"><img src="./images/Luislogo.png" class="logo"></img></a>
                </div>
            </div>
        </div>
        <div class= "container-fluid d-block d-md-none footer1">
            <div class= "row">
                <div class="col-4">
                    <a ui-sref="inicio" class="btn btn-warning">Volver inicio</a>
                </div>
                <div class= "col-5">
                    <h3>Create by Luis</h3>
                </div>
                
                <div class= "col-3">
                    <a href="https://mantecorso.github.io/LuisJuradoQ/" target="_blanck"><img src="./images/Luislogo.png" class="logo"></img></a>
                </div>
            </div>
        </div>
    </footer>
    `
}

export const viewProfComponent = {
    template:  
     `
   <h1 class="subheader">Información del usuario: {{user.id}}</h1>
   <div class="container-fluid espace alto">
       <div class="row">
            <div class="col-4">
                <p>Usuario: {{user.usuario}}</p>
                <p>Numero de Colegiado:  {{user.colegiado}}</p>
                <p>Nombre: {{user.nombre}}</p>
                <p>Apellido1: {{user.erApellido}}</p>
                <p>Apellido2: {{user.doApellido}}</p>
                <p>Género: {{user.Genero}}</p>
                <p>Fecha Nacimiento: {{user.FechaDeNacimiento}}</p>
                <p>NIFPasaporte: {{user.NIFPasaporte}}</p>
                <p>Telefono: {{user.Telefono}}</p>
                <p>Tipo: {{user.Tipo}}</p>
            </div>
            <div class="col-4">
                <legend>Dirección</legend>
                <p>Calle: {{user.Calle}}</p>
                <p>Número: {{user.Numero}}</p>
                <p>Puerta: {{user.Puerta}}</p>
                <p>CP: {{user.CodigoPostal}}</p>
                <p>Ciudad: {{user.Ciudad}}</p>
                <p>Provincia: {{user.Provincia}}</p>
            </div>
       </div>
   </div>
       `
   }
   
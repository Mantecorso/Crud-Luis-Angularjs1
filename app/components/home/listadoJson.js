export default class datosService {
    constructor($http) {
        this.$http = $http;
        this.users = [];
        this.loadData();
    }

    getData() {
        if (!this.users) {
            return this.getJson()
        } else {

            return Promise.resolve(this.users);
        }
    }

    saveData() {
        localStorage.setItem('users', JSON.stringify(this.users))
    }

    getJson() {
        return this.$http.get('datos/user.json')
            .then(response => {
                this.users = response.user;
                this.saveData();
                
                return this.users
            })
    }

    loadData() {
        this.users = JSON.parse(localStorage.getItem('users'))
    }

    deleteUser(id) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].id === id) {
                this.users.splice(i, 1);
            }
        }
        this.saveData();
    }

    deleteMedic() {
        let profesion = "medico";
        for (var i = this.users.length - 1; i >= 0; i--) {
            if (this.users[i].Tipo === profesion) {
                this.users.splice(i, 1)
            }
        }
        this.saveData();
    }

    editUser(user) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].id === user.id) {
                this.users[i] = user;
            }
        }
        this.saveData();
    }

    newUser(nuevo){
        nuevo.id = Math.random().toString(19).substring(2, 12) + Math.random().toString(11);
        this.users.push(nuevo)
        this.saveData()
    }

}
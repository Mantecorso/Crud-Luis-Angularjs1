export default class datosService {
    constructor($http) {
        this.$http = $http;
        this.users = [];
        this.loadData();
    }

    getData() {
        return Promise.resolve(this.users);
    }

    saveData() {
        localStorage.setItem('users', JSON.stringify(this.users))
    }

    getJson() {
        return this.$http.get('datos/user.json')
            .then(response => {
                this.users = response.data;
                console.log(this.users);
                
                return this.users
            })
    }

    loadData() {
        this.users = JSON.parse(localStorage.getItem('users'))
    }

    deleteUser(id) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].id === id) {
                var usuario = this.users[i]
                this.users.splice(i, 1);
            }
        }
        this.saveData();
    }

    deleteMedic() {
        let profesion = "medico";
        for (var i = this.users.length - 1; i >= 0; i--) {
            if (this.users[i].tipo === profesion) {
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

    addUser(user){
        user.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(11);
        this.users.push(user)
        this.saveData()
    }

}
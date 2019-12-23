class Authentication {
    
    constructor ({username, password}) {

        this.username = username;
        this.password = password;
        this.query_user = {};
        this.status = false;
        this.message = '';
        this.user = '';

    }

    async authenticate (){

        this.status = true;
        this.message = "Usuário logado!";

        return {
            status: this.status,
            message: this.message,
            user: this.user,
        };

  }

}

module.exports = Authentication;

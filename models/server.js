
const express = require('express')
var cors = require('cors')
class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT
        //Routes paths
        this.usersPath = '/api/users'

        //Middlewares
        this.middlewares();

        //Routes of app
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use(cors())

        // Read & Parsing body
        this.app.use( express.json() );

        // DIR public
        this.app.use( express.static('public'))

    }

    routes(){
        this.app.use(this.usersPath, require('../routes/users.routes'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("SRV corriendo en puerto", this.port)
        })
    }

}

module.exports = Server
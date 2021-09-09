
const express = require('express')
var cors = require('cors')
var { dbConnection } = require('../db/config.db')
class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT

        //Routes paths
        this.usersPath = '/api/users'

        //DB Connect
        this.connectDB();

        //Middlewares
        this.middlewares();

        //Routes of app
        this.routes();
    }

   async connectDB() {

        await dbConnection();

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
const express = require('express');
const cors = require('cors');
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            sendEmailPath: "/api/send-email",
            sendSmsPath: "/api/send-sms"
        };
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }
    routes() {
        this.app.use(this.paths.sendEmailPath, require('../routes/send-emails'))
        this.app.use(this.paths.sendSmsPath, require('../routes/send-sms'))
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}

module.exports = Server;
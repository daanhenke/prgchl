const express = require('express');
const app = express();

const settings = require('./settings.json');

app.use('/game', express.static("../Client"));

app.listen(settings.WebServer.Port, function () {
    console.log("The PRGCHL webserver is currently running, visit it at http://localhost:" + settings.WebServer.Port + "/game");
});
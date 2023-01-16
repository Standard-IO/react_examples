const express = require("express");
const path = require("path");
const http = require("http");
const PORT = process.env.PORT || 8080;

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, "/public")));
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/index.html'));
});
server.listen(PORT, () => {
     console.log(`el servidor esta corriendo en el puerto ${PORT}`)
});



const app = require('express')();
const server = require('http').createServer(app);
const PORT = 4000;


//Setting up port for backend
server.listen(PORT, ()=>{
    console.log('Hello, I\'m listening on port 4000');
})


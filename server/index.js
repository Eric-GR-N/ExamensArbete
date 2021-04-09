const express = require('express');
const app = express();
const server = require('http').createServer(app);
const PORT = 4000;
const mysql = require("mysql");
const cors = require("cors");
const socket = require('socket.io');
require('dotenv').config()

const io = socket(server);

app.use(cors());
app.use(express.json());


//Connecting database
const db = mysql.createConnection({
    host: "localhost",
    user: "Eric",
    password: process.env.DB_PASSWORD,
    database: "homepage"
  })


  app.post("/tasks", (req, res) =>{

    const task = req.body.task;
    const sqlInsertTask = 'INSERT INTO todo (task) VALUES (?)';

    db.query(
        sqlInsertTask,
        [task],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send("Values Inserted");
          }
        }
      );
  })

  app.get("/todo", (req, res) => {
    db.query("SELECT task FROM todo", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

//Setting up port for backend
server.listen(PORT, ()=>{
    console.log('Hello, I\'m listening on port 4000');
})

io.on('connection', (socket)=>{
  console.log('We have a connection!')

  socket.on('task',(task)=>{
    console.log(task);
    const sqlDeleteTask = `DELETE FROM todo WHERE task=(?)`;
    db.query(sqlDeleteTask,[task],(err,result)=>{
      if(err){
        console.log(err)
      }else{
        console.log('Item Deleted');
      }
    })

  })
})



const express = require('express');
const app = express();
const server = require('http').createServer(app);
const PORT = 4000;
const mysql = require("mysql");
const cors = require("cors");
require('dotenv').config()


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
    const deadline = req.body.deadline;
    const sqlInsertTask = 'INSERT INTO todo (task, deadline) VALUES (?, ?)';

    db.query(
        sqlInsertTask,
        [task,deadline],
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
    db.query("SELECT task, status, deadline, reminder FROM todo", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.put("/updatestatus", (req, res) => {
    const task = req.body.task;
    const status = 'DONE';

    db.query(
      "UPDATE todo SET status = ? WHERE task = ?",
      [status, task],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

  app.put("/updatedeadline", (req, res) => {
    const task = req.body.task;
    const deadline = req.body.deadline;


    db.query(
      "UPDATE todo SET deadline = ? WHERE task = ?",
      [deadline, task],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

  app.put("/updatereminder", (req, res) => {
    const task = req.body.task;
    const reminder = req.body.reminder;

    db.query(
      "UPDATE todo SET reminder = ? WHERE task = ?",
      [reminder, task],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });


//Setting up port for backend
server.listen(PORT, ()=>{
    console.log('Hello, I\'m listening on port 4000');
})


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

  app.post("/groceries", (req, res) =>{
    const grocery = req.body.grocery;
    const sqlInsertTask = 'INSERT INTO inventory (grocery) VALUES (?)';

    db.query(
        sqlInsertTask,
        [grocery],
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
    db.query("SELECT task, status FROM todo", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/groceries", (req, res) => {
    db.query("SELECT grocery FROM inventory", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/iot", (req, res) => {
    db.query("SELECT flower, temp, leak FROM iotvalues", (err, result) => {
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

  app.delete("/deletegrocery/:id", (req, res) => {
    const grocery = req.params.id;

    db.query(
      "DELETE from inventory WHERE grocery = ?",
      [grocery],
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


const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
require("dotenv").config();

console.log(process.env.MYV);

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "managementSystem",
});

db.connect((err) =>
  err ? console.log("cant connect") : console.log("connected")
);

app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employee", (err, result) => {
    if (!err) {
      res.send(result);
    }
  });
});

app.post("/createEmployee", (req, res) => {
  let eid = null;
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let position = req.body.position;
  let salary = req.body.salary;
  let bid = 1;

  const query =
    "INSERT INTO employee (eid, firstName, lastName, position, salary, bid) VALUES (?, ?, ?, ?, ?, ?)";

  db.query(
    query,
    [eid, firstName, lastName, position, salary, bid],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/createResident", (req, res) => {
  let rid = null;
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;
  let phoneNumber = req.body.phoneNumber;
  let imgURL = req.body.imgURL;
  let apartment = req.body.apartment;
  let bid = req.body.bid;

  let query =
    "INSERT INTO resident (rid, firstName, lastName, email, phoneNumber, imgURL, apartment, bid) VALUES (?,?,?,?,?,?,?,?)";

  db.query(
    query,
    [rid, firstName, lastName, email, phoneNumber, imgURL, apartment, bid],
    (err, result) => {
      if (err) console.log(err);
      res.send(result);
    }
  );
});

app.get("/residents", (req, res) => {
  let query = "SELECT * FROM resident where bid = ?";

  db.query(query, [1], (err, result) => {
    err ? console.log(err) : res.send(result);
  });
});

app.listen(3001, () => "server is up");

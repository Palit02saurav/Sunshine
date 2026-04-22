const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Kolp9090@",
  database: "testdb"
});

const connectDB = (app) => {
  db.connect((err) => {
    if (err) {
      console.log("DB Error:", err);
      return;
    }

    console.log("DB Connected");

    app.locals.db = db;

    const { createContactTable } = require("../model/contactModel");
    createContactTable(db);
  });
};

module.exports = connectDB;
const { insertContact } = require("../model/contactModel");

const createContact = async (req, res) => {
  try {
    const db = req.app.locals.db;
    const { name, phone, email, message } = req.body;



    if (!name || !phone || !email || !message) {
      return res.status(400).json({ message: "All fields required" });
    }


    await insertContact(db, name, phone, email, message);
    res.status(201).json({ message: "Contact saved successfully" });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createContact };
const express = require("express");
const router = express.Router();
const { createContact } = require("../controller/contactController");
    

router.post("/contact", createContact);

module.exports = router;
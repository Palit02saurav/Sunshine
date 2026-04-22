const express = require("express");
const app = express();

const cors = require("cors");
const connectDB = require("./config/db");

app.use(cors());
app.use(express.json());

connectDB(app);

const contactRoute = require("./route/contactRoute");
app.use(contactRoute);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
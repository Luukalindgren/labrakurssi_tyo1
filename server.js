// Load .env file
require("dotenv").config();

// Import modules
const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Connect to DB, get URL from .env file
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

// Middleware
app.use(express.json());

// Routes
const customersRouter = require("./routes/customers");
app.use("/customers", customersRouter);

const itemsRouter = require("./routes/items")
app.use("/items", itemsRouter);

app.listen(3000, () => console.log("Server Started"));

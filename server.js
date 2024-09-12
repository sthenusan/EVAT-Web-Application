const express = require("express");
const cors = require("cors");

// const connectDB = require('./src/config/db');
const connectDB = require("./db/db");
const { signup } = require("./controllers/AuthController");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(cors());

// Define Routes
app.use("/api/auth", require("./routes/auth"));

// Simple Hello World Route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

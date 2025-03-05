// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

// Connect to MongoDB (use your own MongoDB URI)
mongoose.connect("mongodb://localhost:27017/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check if connected
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

// Define a schema and model
const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const Item = mongoose.model("Item", itemSchema);

// API route to fetch data
app.get("/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

// POST route to add data
app.post("/items", async (req, res) => {
  try {
    const { name, price } = req.body;
    const newItem = new Item({ name, price });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).send("Error adding item");
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

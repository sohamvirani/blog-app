const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
// const path = require("path");
require("./config/db");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static('uploads'));

// app.use("/profile", express.static(path.join(__dirname, "uploads")));

const blogRoutes = require("./routes/blogRoutes")
const userRoutes = require("./routes/userRoutes")
app.use("/api/v1",blogRoutes)
app.use("/api/v1",userRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
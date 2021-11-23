const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
dotenv.config();

const PORT = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE;

const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");

app.use(cookieParser());
app.use(express.json());
mongoose
  .connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DATABASE CONNECTED");
  });

app.use("/api", userRoute);
app.use("/api", productRoute);

app.get("/", (req, res) => {
  res.json({ message: "seerver is running" });
});

app.listen(PORT, () => console.log("Server is running at 8000 port"));

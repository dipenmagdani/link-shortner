const express = require("express");
const app = express();
const connectDB = require("./config/db");

const authRoutes = require("./routes/auth.routes");

const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connectDB();

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "OK",
  });
});

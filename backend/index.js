const express = require("express");
const app = express();
const connectDB = require("./config/db");

const authRoutes = require("./routes/auth.routes");
const linkRoutes = require("./routes/link.routes");
const authMiddleware = require("./middlewares/auth.middleware");

const PORT = 3000;

app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);

// Import link controller for public routes
const {
  redirectLink,
  getLinkByQuery,
} = require("./controllers/link.controller");

// Public routes (no authentication)
app.get("/api/link", getLinkByQuery); // For query parameter access
app.get("/:shortId", redirectLink); // For direct path access

// Protected routes for link management
app.use("/api/link", authMiddleware, linkRoutes);

app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "OK",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

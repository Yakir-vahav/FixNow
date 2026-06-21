const express = require("express");
const cors = require("cors");
const workersRoutes = require("./routes/workers");
const requestsRoutes = require("./routes/requests");
const db = require("./config/db");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/workers", workersRoutes);
app.use("/api/requests", requestsRoutes);

app.get("/", (req, res) => {
  res.send("FixNow backend is running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
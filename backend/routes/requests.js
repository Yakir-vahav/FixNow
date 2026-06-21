const express = require("express");
const db = require("../config/db");

const router = express.Router();

router.post("/", (req, res) => {
  const { profession, description, address, phone } = req.body;

  const query = `
    INSERT INTO service_requests
    (customer_id, profession, description, address, phone)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(query, [1, profession, description, address, phone], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        message: "Database error",
      });
    }

    res.status(201).json({
      message: "Service request created successfully",
      id: result.insertId,
    });
  });
});

router.get("/", (req, res) => {
  const query = "SELECT * FROM service_requests";

  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        message: "Database error",
      });
    }

    res.json(results);
  });
});

module.exports = router;
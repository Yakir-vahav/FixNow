const express = require("express");

const router = express.Router();

const serviceRequests = [];

router.post("/", (req, res) => {
  const { profession, description, address, phone } = req.body;

  const newRequest = {
    id: serviceRequests.length + 1,
    profession,
    description,
    address,
    phone,
    status: "Open",
    createdAt: new Date()
  };

  serviceRequests.push(newRequest);

  res.status(201).json({
    message: "Service request created successfully",
    request: newRequest
  });
});

router.get("/", (req, res) => {
  res.json(serviceRequests);
});

module.exports = router;
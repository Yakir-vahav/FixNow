const express = require("express");

const router = express.Router();

const workers = [
  {
    id: 1,
    name: "יוסי כהן",
    profession: "חשמלאי",
    city: "חולון",
    rating: 4.9
  },
  {
    id: 2,
    name: "אבי לוי",
    profession: "אינסטלטור",
    city: "בת ים",
    rating: 4.8
  },
  {
    id: 3,
    name: "משה ישראלי",
    profession: "מנעולן",
    city: "ראשון לציון",
    rating: 5.0
  }
];

router.get("/", (req, res) => {
  res.json(workers);
});

module.exports = router;
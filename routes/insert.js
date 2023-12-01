const express = require("express");
const router = express.Router();
const {
  addBudget,
  addCategory,
  addFinance,
  addExpense,
} = require("../db/queries/insert");

router.post("/budget", async (req, res) => {
  try {
    const data = await addBudget(req.body);
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/category", async (req, res) => {
  try {
    const data = await addCategory(req.body);
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/finance", async (req, res) => {
  try {
    const data = await addFinance(req.body);
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/expense", async (req, res) => {
  try {
    const data = await addExpense(req.body);
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

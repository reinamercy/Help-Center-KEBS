const express = require('express');
const router = express.Router();
const db = require('../db'); // Updated db import
console.log("faqRoutes loaded");

// Add FAQ (POST)
router.post('/faqs', async (req, res) => {
  const { question, answer, module } = req.body;

  if (!question || !answer || !module) {
    return res.status(400).send('All fields are required');
  }

  const sql = 'INSERT INTO FAQs (question, answer, module) VALUES (?, ?, ?)';
  try {
    await db.query(sql, [question, answer, module]);
    res.status(201).send('FAQ added successfully');
  } catch (err) {
    console.error('Error adding FAQ:', err.message);
    res.status(500).send('Error adding FAQ');
  }
});

// Get FAQs (GET)
router.get('/faqs', async (req, res) => {
  const { module } = req.query; // Read 'module' from query params
  let sql = 'SELECT * FROM FAQs';
  const params = [];

  if (module) {
    sql += ' WHERE module = ?';
    params.push(module);
  }

  try {
    const [results] = await db.query(sql, params);
    res.status(200).json(results);
  } catch (err) {
    console.error('Error fetching FAQs:', err.message);
    res.status(500).send('Error fetching FAQs');
  }
});

// Edit FAQ (PUT)
router.put('/faqs/:id', async (req, res) => {
  const { id } = req.params;
  const { question, answer, module } = req.body;

  if (!question || !answer || !module) {
    return res.status(400).send("All fields are required");
  }

  const sql = 'UPDATE FAQs SET question = ?, answer = ?, module = ? WHERE id = ?';
  try {
    const [result] = await db.query(sql, [question, answer, module, id]);
    if (result.affectedRows > 0) {
      res.status(200).send("FAQ updated successfully");
    } else {
      res.status(404).send("FAQ not found");
    }
  } catch (err) {
    console.error("Error updating FAQ:", err.message);
    res.status(500).send("Error updating FAQ");
  }
});



// DELETE FAQ
router.delete('/faqs/:id', async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send('FAQ ID is required');
  }

  const sql = 'DELETE FROM FAQs WHERE id = ?';
  try {
    const [result] = await db.query(sql, [id]);
    if (result.affectedRows > 0) {
      res.status(200).send('FAQ deleted successfully');
    } else {
      res.status(404).send('FAQ not found');
    }
  } catch (err) {
    console.error('Error deleting FAQ:', err.message);
    res.status(500).send('Error deleting FAQ');
  }
});


module.exports = router; // Only this statement should be at the end of the file.

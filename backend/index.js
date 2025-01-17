const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db'); // Import the db connection
const faqRoutes = require('./routes/faqRoutes');
const cors = require('cors');

const app = express(); // Initialize the Express application
app.use(cors()); // Enable CORS
app.use(bodyParser.json());

// Test database connection
db.getConnection()
    .then(connection => {
        console.log('Connected to the FAQ_FINAL database');
        connection.release();
    })
    .catch(err => {
        console.error('Database connection failed:', err.message);
    });

// Serve static files from the 'frontend' folder
app.use(express.static(path.join(__dirname, '../frontend')));

// Mount FAQ routes
console.log("faqRoutes mounted at /api");
app.use('/api', faqRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Navigate to: http://localhost:${PORT}`);
});

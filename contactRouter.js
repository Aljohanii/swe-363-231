const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'contact_us.html'));
});

module.exports = router;

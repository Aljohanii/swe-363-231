const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/sourses', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'sourses.html'));
});

module.exports = router;
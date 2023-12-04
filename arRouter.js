const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/ar', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'swe363-Ar.html'));
});

module.exports = router;

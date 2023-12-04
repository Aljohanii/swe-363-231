const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/thank', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'thankYou.html'));
});

module.exports = router;

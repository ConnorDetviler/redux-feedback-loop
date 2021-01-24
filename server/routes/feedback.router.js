const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
const feedbackRouter = express.Router();

router.post('/', (req,res) => {
    const newFeedback = req.body;

})

module.exports = feedbackRouter;
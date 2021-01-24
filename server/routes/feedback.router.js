const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
const feedbackRouter = express.Router();

// POST
router.post('/', (req,res) => {
    const feedback = req.body;
    const queryText =
    `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "flagged", "date")
    VALUES ($1, $2, $3, $4, $5, date);`;

    pool.query(queryText,
            [feedback.feeling,
            feedback.understanding,
            feedback.support,
            feedback.comments,
            false
            ]
        ).then((result) => {
            console.log(result);
            res.sendStatus(201);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

module.exports = feedbackRouter;
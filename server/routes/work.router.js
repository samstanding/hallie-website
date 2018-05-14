const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body);
    if(req.isAuthenticated()) {
        pool.query('INSERT INTO artwork (title, type, media_url) VALUES ($1, $2, $3);',
        [req.body.work.title, req.body.work.type, req.body.work.media_url.url], (error, result) => {
        if(error) {
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
} else {
    res.sendStatus(403);
}
});












module.exports = router;
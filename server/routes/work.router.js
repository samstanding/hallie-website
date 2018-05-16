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
            console.log(error);
            
        } else {
            res.sendStatus(200);
        }
    });
} else {
    res.sendStatus(403);
}
});

router.post('/carousel', (req, res) => {
    console.log(req.body);
    if(req.isAuthenticated()) {
        pool.query('INSERT INTO carousel (display, photo_url) VALUES ($1, $2);',
        [req.body.carouselPhoto.order, req.body.carouselPhoto.photo_url.url], (error, result) => {
            if(error) {
                res.sendStatus(500);
                console.log(error);
            } else {
                res.sendStatus(200);
            }
        })
    } else {
        res.sendStatus(403);
    }
});

router.get('/carousel', (req, res) => {
    pool.query('SELECT * FROM carousel ORDER BY display ASC;')
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        res.sendStatus(500);
    })
});












module.exports = router;
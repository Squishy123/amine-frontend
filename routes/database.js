var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/media"

// Schemas
const Source = require('./schemas/sourceSchema.js');
const Episode = require('./schemas/episodeSchema.js');
const Anime = require('./schemas/animeSchema.js');

/* GET home page. */
router.get('/animelist', function(req, res, next) {
    (async () => {
        await mongoose.connect(url)
        await Anime.find({}, (err, animes) => {
            //if(err) throw err;
            res.render('index', {animelist: animes})
            //res.status(200).send(animes)
        })
        await mongoose.disconnect();
    })()
});

/** 
router.post('/api', function(req, res, next) {
    res
})*/

module.exports = router;

const pug = require('pug')
const mongoose = require('mongoose');
const fs = require('fs');
const url = "mongodb://localhost:27017/media"

// Schemas
const Source = require('./routes/schemas/sourceSchema.js');
const Episode = require('./routes/schemas/episodeSchema.js');
const Anime = require('./routes/schemas/animeSchema.js');

(async () => {
    await mongoose.connect(url)
    await Anime.find({}, (err, animes) => {
        if (err) throw err;
        let render = pug.renderFile('./views/index.pug', { animelist: animes });
        fs.writeFile('./index.html', render, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Render Exported");
        });

        //res.status(200).send(animes)
    })
    await mongoose.disconnect();
})()
const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: String,
    rating: Number,
    genre: String,
    duration: Number,
    language: String,
    poster: String
})

const Movie= mongoose.model('Movie', movieSchema);
module.exports = Movie
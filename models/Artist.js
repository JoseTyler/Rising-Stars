// requirements: require db/connection as 'mongoose'
const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Artist = new Schema({
    Name: String,
    DOB: String,
    Ethnicity: String,
    Location: String
})

module.exports = mongoose.model('Artist', Artist)
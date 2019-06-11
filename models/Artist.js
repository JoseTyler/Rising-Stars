// requirements: require db/connection as 'mongoose'
const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Artist = new Schema({
    name: String,
    dob: String,
    ethnicity: String,
    location: String
})

module.exports = mongoose.model('Artist', Artist)
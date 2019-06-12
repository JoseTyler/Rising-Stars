// requirements: require db/connection as 'mongoose'
const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Actor = new Schema({
    name: String,
    dob: String,
    ethnicity: String,
    location: String,
    photo: String
})

module.exports = mongoose.model('Actor', Actor)
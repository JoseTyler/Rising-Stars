// requirements: require db/connection as 'mongoose'
const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Model = new Schema({
    name: String,
    dob: String,
    ethnicity: String,
    location: String,
    photo1: String,
    photo2: String,
    photo3: String,
    photo4: String,
})

module.exports = mongoose.model('Model', Model)
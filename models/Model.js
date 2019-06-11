// requirements: require db/connection as 'mongoose'
const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Model = new Schema({
    name: String,
    dob: String,
    ethnicity: String,
    location: String
})

module.exports = mongoose.model('Model', Model)
const mongoose = require('mongoose')

const publisherSchema = new mongoose.Schema( {
    name : String,
    headQuater : String

},{timestams : true});

module.exports = mongoose.model('Publisher', publisherSchema)
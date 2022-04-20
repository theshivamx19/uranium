const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const bookSchema = new mongoose.Schema( {
    name : String,
    author_id : {
        type : ObjectId,
        ref : "Author2"

    },
    author : String,
    price : Number,
    publisher : {
        type : ObjectId,
        ref : "Publisher"
    }
}, 
{
    timestamps : true
});

module.exports = mongoose.model('Book2', bookSchema)





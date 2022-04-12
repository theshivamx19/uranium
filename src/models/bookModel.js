const { default: mongoose } = require("mongoose");

const bookSchema = new mongoose.Schema({
    bookName : {
        type: String,
        required : true
    },
    authorName : String,
    category : String,
    year : Number
}, {timestamps:true })
module.exports = mongoose.model('Book', bookSchema) //in database it will be books(plural with first letter smallcase)

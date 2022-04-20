const bookModel = require('../models/bookModel')
const authorModel = require('../models/authorModel')
const publisherModel = require('../models/publisherModel')
const createNewBook = async function(req, res){
    let data = req.body
    let authorId = data.author
    let publisherId = data.publisher

    if(!authorId){
        return res.send({msg : "Author Id must be present in the book details"})
    }
    let author = await authorModel.findById(authorId)
    if(!author){
        return res.send({msg : "Please enter a valid Author Id"})
    }
    if(!publisherId){
        return res.send({msg : "Publisher id is required"})
    }
    let publisher = await publisherModel.findById(publisherId)
    if(!publisher){
        return res.send({msg : "Please enter a valid publisher Id"})
    }

    let createBook = await bookModel.create(data)
    res.send({msg : createBook})
}
    const getAllBooks = async function(req, res){
        let libraryBooks = await bookModel.find().populate('publisher author')
        res.send({data : libraryBooks})
    }
module.exports.createNewBook = createNewBook
module.exports.getAllBooks = getAllBooks






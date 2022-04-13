const { count } = require("console")
const BookModel = require('../models/bookModel')

const createBook = async function(req, res){
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({msg : savedData})
}
const getBooksData = async function(req, res){
    let listAllBooks = await BookModel.find({totalpages : {$gt : 500}})
    res.send({msg: listAllBooks})
}
module.exports.createBook = createBook
module.exports.getBooksData = getBooksData

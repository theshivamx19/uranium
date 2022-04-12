const BookModel = require('../models/bookModel')
const getNewBook = async function (req, res) {
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({msg: savedData})
}

const getListBook = async function(req, res){
    let listAllBooks = await BookModel.find()
    res.send({msg : listAllBooks})
}
module.exports.getNewBook = getNewBook
module.exports.getListBook = getListBook
const authorModel = require('../models/authorModel')
const createAuthor = async function(req, res) {
    let author = req.body
    let createAuth = await authorModel.create(author)
    res.send({msg : createAuth})

}
module.exports.createAuthor = createAuthor


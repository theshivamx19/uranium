const express = require('express');
const router = express.Router();

// const authorController= require("../controllers/authorController")
// const bookController= require("../controllers/bookController")
const authorController = require('../controllers/authorController')
const publisherController = require('../controllers/publisherController')
const bookController = require('../controllers/bookController')
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post('/createAuthor', authorController.createAuthor)
router.post('/createPublisher', publisherController.createPublisher)
router.post ('/createNewBook', bookController.createNewBook)
router.get('/getAllBooks', bookController.getAllBooks)




module.exports = router;
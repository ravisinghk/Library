const express = require('express')
const router = express.Router()
const Book = require('../models/book') // schema
const Author = require('../models/author')


// All Books route
router.get('/', (req, res) => {
    res.send('All Books')
})

// New Book route
router.get('/new', async(req, res) => {
   try{
    const authors = await Author.find({})
    const book = new Book()
    res.render('books/new', {
        authors: authors,
        book: book
    })
   }catch(err){
    // res.redirect("/books")
    console.log(err)
   }
})

// Create Book route
router.post('/', (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        publishDate: new Date(req.body.publishDate),
        pageCount: req.body.pageCount,
        description: req.body.description
    })
})

module.exports = router 

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { save, read, readRows } = require('./save')

app.use(bodyParser.json())

//Obtener un libro
app.get('/books/:id', function(req, res) {
    const id = Number(req.params.id)
    const book = books.find(x => x.id === id)
    return res.json(book)
})

app.get('/booksISBN/:ISBN', function(req,res){
    const ISBN = Number(req.params.ISBN)
    const book = books.find(x => x.ISBN === ISBN)
    return res.json(book)
})

//Devolver un libro
app.get('/books', function(req, res){
     readRows(boooks, function(err,data){
        res.json(data)
    })
})


//Crear un libro
var boooks = 'Books.txt'
app.post('/books', function(req, res){
    const id = req.body.id
    const author = req.body.author
    const title = req.body.title
    const publisher = req.body.publisher
    const year = req.body.year
    const ISBN = req.body.ISBN
    const price = req.body.price
    const stock = req.body.stock

    const model = {
        id,
        author,
        title,
        publisher,
        year,
        ISBN,
        price,
        stock
    }
    save(boooks, model, function(){
        res.json({ok: true, model})
    })
})

//Actualizar un libro
app.put('/booksISBN/:ISBN', function(req, res){
    const ISBN = Number(req.params.ISBN)
    const book = books.find(x => x.ISBN === ISBN)
    return res.json(book)
})

//Borrar un libro
app.delete('booksISBN/:ISBN', (req,res) => {
    const ISBN = Number(req.params.ISBN)
})



app.listen(3000, function(){
    console.log('Listening on port 3000')
})


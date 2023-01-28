const router = require('express').Router();
const books = require('./src/books');

var booksDirectory = books;

router.get('/books', (req, res) =>{
    res.send(booksDirectory);
});

router.get('/books/:id', (req, res) =>{
    const { id } = req.params;

    const book = booksDirectory.find(b => b.id === id);

    if(!book) return res.status(404).send('Book does not exist');
    
    res.send(book);
});

router.post('/books', (req, res) =>{
    const {
        id,
        Title,
        Author,
        Genre,
        Detail
    } = req.body;

    const bookExist = booksDirectory.find(b => b.id === id);
    if(bookExist) return res.send('Book already exist');

    const book = {
        id,
        Title,
        Author,
        Genre,
        Detail
    };

    booksDirectory.push(book);
    res.send(book);
});

router.put('/books/:id', (req, res) =>{
    const { id } = req.params;
    const {
        Title,
        Author,
        Genre,
        Detail
    } = req.body;

    const book = booksDirectory.find(b => b.id === id);
    
    if(!book) return res.send('Book does not exist');

    const updateFiled = (val, prev) => !val ? prev : val;

    const updatedook = {
        ...book,
        Title: updateFiled(Title, book.Title),
        Author: updateFiled(Author, book.Author),
        Genre: updateFiled(Genre, book.Genre),
        Detail: updateFiled(Detail, book.Detail),
    };
    
    const bookIndex = booksDirectory.findIndex(b => b.id === id);
    booksDirectory.splice(bookIndex, 1, updatedook);

    res.send(updatedook);
});

router.delete('/books/:id', (req, res) =>{
    const { id } = req.params;

    let book = booksDirectory.find(b => b.id === id);

    if(!book) return res.status(404).send('Book does not exist');

    booksDirectory = booksDirectory.filter(b => b.id !== id);

    res.send('Succes');
});

module.exports = router;
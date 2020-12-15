const express = require('express')
const Joi = require('joi')
const router = express.Router()

const books = [
    {id:1, name:'hello'},
    {id:2, name:'bonjour'},
    {id:3, name:'hola'},
]


router.get('/', (req,res)=>{
    res.send(books)
})

// app.get('/api/articles/:year/:month', (req,res)=>{
//         res.send(req.query)
// })
router.post('/', (req,res)=>{
    
    const {error} = validateBook(req.body)
    if(error){
        return res.status(400).send(error.details[0].message)
    }

    const book = {
            id: books.length + 1,
            name: req.body.name
        }
        books.push(book)
        res.status(201).send(book)
    })
    

    router.get('/:id', (req,res)=>{
        const book = books.find(b => b.id === parseInt(req.params.id))
        if(!book)
            return  res.status(404).send('Berilgan IDga teng bo\'lgan kitob topilmadi')
        res.send(book) 
    })

    router.put('/:id', (req,res)=>{
        //not founded
        const book = books.find(b => b.id === parseInt(req.params.id))
        if(!book)
            return  res.status(404).send('Berilgan IDga teng bo\'lgan kitob topilmadi')

        //validation 400
        const {error} = validateBook(req.body)
        if(error) {
            return res.status(400).send(error.details[0].message)
        }
        //yangilash
        book.name = req.body.name
        //qaytarish
        res.send(book)
    })
    router.delete('/:id', (req,res)=>{
        const book = books.find(b => b.id === parseInt(req.params.id))
        if(!book)
            return  res.status(404).send('Berilgan IDga teng bo\'lgan kitob topilmadi')
        const bookIndex = books.indexOf(book)
        books.splice(bookIndex,1)
        res.send(book)
    })
    
    function validateBook(book) {
        const bookSchema = {
            name: Joi.string().required().min(3)
        }
        return Joi.validate(book, bookSchema)
    }

    module.exports = router
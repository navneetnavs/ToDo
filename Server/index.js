const express = require ('express')
const mongoose = require('mongoose')
const cars = require('cars')
const todomodel = require('./Models/Todo')
const app = express()
app.use(cars())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/test')


app.get('/get', (req.res) => {
    todomodel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err) )
})
app.put('/update/:id', (req,res)=>{
    const {id} = req.params;
    todomodel.findByIdAndUpdate({_id : id}, {done: true})
    .then(result => res.jsonp(result))
    .catch(err => res.json(err))
})
app.delete('/delete/:id',(req,res) => {
    const {id} = req.params;
    todomodel.findByIdAndDelete({_id:id})
    .then(result => res.jsonp(result))
    .catch(err => res.json(err))
})

app.post('/add',(req,res) => {
    const task = req.body.task;
    todomodel.create({
        task:task
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})
app.listen(3001, () => {
    console.log("Server is running")
})
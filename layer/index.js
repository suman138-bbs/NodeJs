const express = require('express')
const bodyParser=require('body-parser')
const app = express()
const PORT = 3001

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
let blogsList = []

app.get('/blogs', (req, res) => {
    res.status(200).json({
        data: blogsList,
        success:true,
    })
})

app.post('/blogs', (req, res) => {
    blogsList.push({
        title: req.body.title,
        content: req.body.content
    })

    res.json({
        "success":true
    })
})

app.get('/blogs/:id', (req, res) => {
    console.log(req.params)
});

app.delete('/blogs/:id', (req, res) => {
    
})
app.listen(PORT, () => {
    console.log("Server Started on PORT",PORT)
})
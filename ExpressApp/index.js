const express = require('express')

const app = express()
const PORT = 3000;


app.get('/', (req,res) => {
    res.send("hello world")
})

app.post('/home', (res,req) => {
    res.send("welcome to home")
})
app.listen(PORT, () => {
    console.log("Server started")
})
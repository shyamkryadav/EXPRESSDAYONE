const express = require('express')
const app = express()
const port = 5000
app.use(express.json())
// database conenction  
const conenction = require('./db/connection');

// user schema 
const User = require('./models/users');
const Userlogin =require('./models/userLogin')

// call data base 
conenction();


app.post('/register',(req,res)=>{
    User.create({userName:"shyam",password:'shyam123',})
    // User.create(req.body)
})

app.post('/login',(req,res)=>{
  Userlogin.create({userName:"shyam",password:'12345',})
    // User.create(req.body)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const express = require('express')
const app = express()
const port = 5000
app.use(express.json())

// const users=['ram','shyam','kaylin','rupesh']
const users=[
        {id:232,name:'shyam',address:'jnk'},
        {id:252,name:'Ram',address:'ktm'},
        {id:262,name:'Hari',address:'pokhara'},
    ]

// app.get('/users/:id', (req, res) => {
//     const result = users.find((item)=>{
//         return item.id === req.params.id
//     })
//     console.log(result)
// })


// app.post('/register', (req, res) => {
//   const matchlist=  users.find((item,id)=>{
//         if(item.name === req.body.name){
//             return item
//         }
//     })
//     if(matchlist.length>0){
//         res.json({
//             msg:'user already exist'
//         })
//     }else{
//         res.json({msg:'registe sucessfully'})
//     }
// })



// app.put('/users/:id',(req,res)=>{
//  const updateuser=users.map((item,id)=>{
//     if(item.id == req.params.id){
//         item.name=req.params.name
//         item.address=req.params.address
//     }
//  })
//  res.json(updateuser)
// })

app.put('/users/:id',(req,res)=>{
    let id=req.params.id;
    let userIndex=users.findIndex((item)=>{
        return item.id===id
        });

})

app.delete('/users/:id',(req,res)=>{
    const deleteuser = users.filter((item)=>{

        return item.id != req.params.id;
        });
        res.json(deleteuser);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

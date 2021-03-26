const express = require('express')
const app = express()

// const rootCall = (req,res)=>res.send('thank you very much');

const users= [
    "asad","mahin","shuvo","joy","piash"
]

app.get('/',(req,res)=>{
    const fruit={
        product: 'ada',
        price: '220',
    }
    res.send(fruit)
} );
app.get('/fruits/banana',(req,res)=>{
     res.send({fruit:'banana',price:'20'});
 })

 app.get('/users/:id',(req,res)=>{
   const id = req.params.id;
   const name = users[id]
   console.log(req.query)
   res.send({id,name});
 })
app.listen(3000, ()=> console.log('listening to port 3000'))
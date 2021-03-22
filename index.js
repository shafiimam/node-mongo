const express = require('express')
const app = express()

// const rootCall = (req,res)=>res.send('thank you very much');
app.get('/',(req,res)=>{
    res.send('I know how to open node!! yeeey')
} )
app.listen(3000, ()=> console.log('listening to port 3000'))
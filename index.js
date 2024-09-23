import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const server=express();
server.get('/',(req,res)=>{
    res.send('hello world');
})
server.get('/twitter',(req,res)=>{
    res.send('nithin');
})
server.get('/login',(req,res)=>{
    res.send('<h1>please connect me in my portfolio</h1>')
})
server.listen(process.env.PORT,()=>{
    console.log("server listening...")
})
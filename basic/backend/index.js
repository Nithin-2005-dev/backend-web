import express from 'express';
const server=express();
server.get('/',(req,res)=>{
    res.send('hello')
})
const jokes=[
    {
        id:1,
        title:'A joke',
        content:'this is a joke'
    },
    {
        id:2,
        title:'second joke',
        content:'this is a second joke'
    },
    {
        id:3,
        title:'third joke',
        content:'this is a third joke'
    },
    {
        id:4,
        title:'fourth joke',
        content:'this is a fourth joke'
    },
    {
        id:5,
        title:'fifth joke',
        content:'this is a fifth joke'
    }
]
server.get('/api/jokes',(req,res)=>{
    res.send(jokes);
})
server.listen(8080,()=>{
    console.log('server listening...')
})
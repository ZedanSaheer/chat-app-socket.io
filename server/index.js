const express = require("express");
const app = express();
const http = require("http").createServer(app);
const {addUser,removeUser,getUser,getUserInRoom} = require("./users")
const cors = require("cors")
require('dotenv').config();

const io = require("socket.io")(http, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });


const router = require('./router');
const PORT = process.env.PORT;

app.use(cors())
app.use(router)

io.on('connect',(socket)=>{
    socket.on('join',({name,room},callback)=>{
    const {error , user} = addUser({id:socket.id,name,room});
    
    if(error)return callback(error); 
    
    socket.emit('message',{user:'admin',text:`${user.name},welcome to the room ${user.room}`});

    socket.broadcast.to(user.room).emit('message',{user:'admin',text:`${user.name},has joined!`});

    socket.join(user.room);
    
    callback();
    });

    socket.on('sendMessage',(message , callback)=>{
        const user = getUser(socket.id);

        io.to(user.room).emit('message',{user:user.name,text: message});

        callback();
    })

    socket.on('diconnect',()=>{
        console.log('User had left');
    });
});

http.listen(PORT,()=> console.log(`Server has started on port ${PORT}`));
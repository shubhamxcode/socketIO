import http from 'http'
import express from 'express';
import { Server } from 'socket.io';
//handling socket.io
const app=express();
const server=http.createServer(app);
const io=new Server(server )
io.on("connection",(socket)=>{
  socket.on('user-message',message=>{
    io.emit("message",message)
  })
})
//handling routes
app.use(express.static(("./public")));
app.get("/",(req,res)=>{
    return res.send("/public/index.html")
})
server.listen(9000,(port)=>console.log('server is listning at port 9000'));
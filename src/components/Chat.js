import React,{useState , useEffect} from 'react'
import queryString from 'query-string'
import { io } from 'socket.io-client'
import "./Chat.css"

let socket;

const Chat = () => {

    const [name, setName] = useState("");
    const [room , setRoom] = useState("");
    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
       
        const {name,room} = queryString.parse(window.location.search);
        socket = io(ENDPOINT);
        setName(name);
        setRoom(room);

        socket.emit('join',{name,room},()=>{
            
        });

        return ()=>{
            socket.emit('disconnect')
            socket.off()
        }
    },[ENDPOINT])

    return (
       <h1>{`Hello Welcome ${name} to ${room}`}</h1>
    )
}

export default Chat

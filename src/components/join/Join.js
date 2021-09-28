import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import "./Join.css"

const Join = () => {

    const [name, setName] = useState("");
    const [room , setRoom] = useState("");

    return (
      <div className="joinOuterContainer">
          <div className="joinInnerContainer">
              <h1>Join</h1>
              <div><input type="text" className="joinInput" placeholder="Name" onChange={(e)=>setName(e.target.value)}/><input type="text" className="joinInput" placeholder="Room" onChange={(e)=>setRoom(e.target.value)}/></div>
              <Link onClick={(e)=>(!name || !room) && e.preventDefault()} to={`/chat?name=${name}&room=${room}`}>
                  <button className="button" type="submit">Sign in</button>
              </Link>
          </div>
      </div>
    )
}

export default Join

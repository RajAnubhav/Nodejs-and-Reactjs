import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
const axios=require('axios')
function Users() {
    const [users, setusers] = useState([])
   useEffect(() => {
    axios.get("http://localhost:3001/test").then((response) => {
        // It is returning a json object as we are sending it in the index.js in the server
       console.log(response.data)
        setusers(response.data)
      })
   
   }, [])
   
    
  return (
    <div>
       {users.map((item,key)=>{
        return( <div>
            <p>{item.name}</p>
            <br/>
            <p>{item.class}</p>
        </div>)
       })}
        <Link to="/">Go to Home</Link>
    </div>
  )
}

export default Users
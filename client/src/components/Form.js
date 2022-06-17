import {useState} from 'react'
import {Link} from 'react-router-dom';

const axios = require('axios');
function Form() {
    
    const [username, setusername] = useState('')
    const [clas, setclas] = useState('')
    const submitHandler = (e)=>{        
        const data={
            name:username,
            class:clas,
        }
        axios.post(
            'http://localhost:3001/test',
            data,
            (res)=>{
                console.log(res);
            }
        )
        console.log(data);
        e.preventDefault();
    }
  return (
    <div>
        <form action="/form" method="post" onSubmit={submitHandler}>
            <div className='col'>
                <input type="text" placeholder="Username" onChange={(e)=>setusername(e.target.value)}/>
            </div>
            <div className='col'>
                <input type="password" placeholder="Password" onChange={(e)=>setclas(e.target.value)}/>
            </div>
            <input type="submit" value={'Submit'}/>
        </form>
        <Link to={'/'}>Home</Link>
    </div>
  )
}

export default Form
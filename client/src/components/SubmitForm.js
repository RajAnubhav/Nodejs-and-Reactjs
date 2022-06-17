import {useState} from 'react'

const axios = require('axios');

function SubmitForm() {

    const [name, setname] = useState('')
    const [pw, setpw] = useState('')

    const submitHandler=(e)=>{
        const data={
            name:name,
            password:pw,
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
        <form action="/subform" method="post" onsubmit={submitHandler}>
            <input type="text" placeholder="Name" onchange={(e)=>setname(e.target.value)}/>
            <input type="password" placeholder="Password" onchange={(e)=>setpw(e.target.value)}/>
            <input type="submit" value="Submit"/>
        </form>
    </div>
  )
}

export default SubmitForm
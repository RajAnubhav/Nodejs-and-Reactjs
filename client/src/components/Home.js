import React from 'react'
import {Link} from 'react-router-dom';


// just type rfce to get a emmet

function Home() {
  return (
    <div>
        Welcome to the home page
        <br/>
        <Link to='/about'>About</Link>
        <br/>
        <Link to='/contact'>Contact Me</Link>
        <br/>
        <Link to='/subform'>SubmitForm</Link>
        <br/>
        <Link to='/form'>Form</Link>
        <br/>
        <Link to='/users'>Users</Link>
        <br/>
    </div>
  )
}

export default Home
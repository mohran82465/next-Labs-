
import React from 'react'
import '@/app/todos/add/add.css'
import { signIn } from '../_lib/auth'
import { async } from './../_lib/data-service';

const page = () => {

  async function  login(){
    "use server"
    await signIn("google",{redirectTo:"/"}); 
  }


  return (
    <div>
      <h1>Login</h1>
      <form className='form_container'>
        <label for="fname">Title</label>
        <input type="text" id="fname" name="title" placeholder="Your name.." />

        <label for="lname">Status</label>
        <input type="text" id="lname" name="status" placeholder="Your last name.." />



        <input type="submit" value="Submit" />
      </form>
      <form action={login}>

        <button>Login using gmail</button>
      </form>
    </div>
  )
}

export default page
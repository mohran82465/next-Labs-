"use client";
import React, { useState } from 'react'
import './add.css'
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter();
    const [user, setUser] = useState({
        name: "",
        email: ""
    });

    const handleChange = (evt) => {

        setUser({ ...user, [evt.target.name]: evt.target.value })

    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch("http://localhost:3000/api/users", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (res.status == 201) {
            router.push('/users')
        }
        else {
            console.log("failed")
        }
    }

    return (<>
        <div className='form_container'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">name</label>
                <input onChange={(e) => { handleChange(e) }} type="text" id="fname" name="name" placeholder="Your name.." />

                <label htmlFor="lname">email</label>
                <input onChange={(e) => { handleChange(e) }} type="text" id="lname" name="email" placeholder="Your email.." />



                <input type="submit" value="Submit" />
            </form>
        </div>

    </>
    )
}

export default page





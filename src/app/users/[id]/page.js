import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

const page = async ({ params: { id } }) => {
    let user;
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        user = await res.json();

    } catch (error) {
        redirect('/not-found')
    }

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                textAlign: "center",
            }}>
                <h1 >{user.name}</h1>
                <h2>username : {user.username}</h2>
                <h4>phone : {user.phone}</h4>
                <h4>email : {user.email}</h4>
                <h4>website : {user.website}</h4>
                <Link href={"/contact-us"}>
                    <button style={{ backgroundColor: "#B92B27", width: "400px", height: "100px", color: "#DDD", fontWeight: "800", fontSize: "40px", marginTop:"150px" }} >contact us</button>
                </Link>
            </div>

        </>
    )
}

export default page
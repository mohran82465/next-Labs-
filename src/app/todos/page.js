import React from 'react'
import { GET } from '../api/todos/route'

const page = async () => {
    const res = await GET()
    console.log(res);
    const { data: todos } = await res.json()
    console.log(todos);

    return (
        <>
        
        {todos.map((t)=><li key={t._id}>{t.title}</li>)}
        </>
    )
}

export default page
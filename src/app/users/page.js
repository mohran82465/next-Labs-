import React from 'react'
import style from './users.module.css';
import Link from 'next/link';
import { GET } from '../api/users/route';




const page = async () => {
    const res = await GET()
    console.log(res);
    const { data: users } = await res.json()
    console.log(users);

    return (
        <>
            <div className={style.parent}>

                {users.map((user) => <div key={user._id} className={style.card} >
                    <div >
                        <div className={style.container}>
                            <h2 className={style.center}><b>{user.name}</b></h2>
                            <h4>email : {user.email}</h4>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </>

    )
}

export const revalidate = 60;
export default page
import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { signOut } from '@/app/_lib/auth';

const pages = [
    { name: "Home", link: '/' },
    { name: "About us", link: '/about-us' },
    { name: "Contact", link: '/contact-us' },
    { name: "Login", link: '/login' },
    { name: "Products", link: '/products' },
    { name: "Users", link: '/users' },
    { name: "Todos", link: '/todos' },
]

const Header = () => {
    async function logout () {
        "use server"
        await signOut({redirectTo:'/login'})
    }
    return (
        <div className={styles.container}>
            {pages.map((page) => <div key={page.name} className={styles.link_container} >
                <Link href={page.link} className={styles.link_color} > {page.name}</Link>
            </div>)}
            <form action={logout}> 
                <button>logout</button>
            </form>
        </div>

    )
}

export default Header
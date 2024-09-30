import { getAllProducts } from '@/app/_lib/data-service';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import style from '@/app/products/products.module.css';


const ProductList = async () => {
    const {data:products} = await getAllProducts()
    console.log(products);
    return (
        <>
            <div className={style.parent}>

                {products.map((prd) => <Link key={prd.id} className={style.card} href={`/products/${prd.id}`}>
                    <div >
                        <Image width={100} height={300} layout='responsive' src={prd.image} alt="Avatar" style={{ width: "100%" }} />
                        <div className={style.container}>
                            <h4><b>{prd.title}</b></h4>
                            <p>{prd.description}</p>
                        </div>
                    </div>
                </Link>

                )}
            </div>
        </>
    )
}

export default ProductList
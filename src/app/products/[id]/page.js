import { getAllProducts, getSingleProducts } from '@/app/_lib/data-service';
import { notFound, redirect } from 'next/navigation';
import React from 'react'


export async function generateMetadata({ params: { id } }) {
    const { data: product } = await getSingleProducts(id);
    return {
        title: product.title
    }
}
export async function generateStaticParams() {

    const { data: products } = await getAllProducts()
    const ids = products.map((prd) => ({ id: prd.id.toString() }))
    return ids;
}
const Page = async ({ params: { id } }) => {
    const { data: product } = await getSingleProducts(id);

    return (
        <div>
            <h2>{product.title} </h2>
            <p>{product.description}</p>
        </div>
    )
}

export default Page
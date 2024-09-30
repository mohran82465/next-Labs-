import React, { Suspense } from 'react'
import Link from 'next/link';
import { getAllProducts } from '../_lib/data-service';
import Image from 'next/image';
import ProductList from '../_components/productList/Index';
export const metadata = {
  title: "products page",

}

const page = async () => {




  return (
    <>
      <h1>Products Page</h1>
      <p> this is a product page to display products from Api </p>
      <Suspense fallback={<>loading products...........</>}>
        <ProductList />
      </Suspense>
    </>
  )
}
export const revalidate = 60; // isr increamental static revalidation 
export default page
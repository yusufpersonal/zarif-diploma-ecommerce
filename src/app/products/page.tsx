import Cta from '@/components/cta'
import Feature from '@/components/feature'
import Product from '@/components/product'
import Statistics from '@/components/statistics'
import { ProductType } from '@/interface'
import React from 'react'

const Products = async() => {
     const res = await fetch(`https://fakestoreapi.com/products/category/jewelery`)
     const products: ProductType[] = await res.json()
  return (
    <main className='min-h-screen max-w-7xl mx-auto px-8 xl:px-0 '>
        <Feature/>
            <section className='flex flex-col space-y-12'>
            <h1 className='text-5xl font-bold text-center'>
            Zarif&CO
            </h1>
            <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
            {
                products.map((product) => (
                <Product key={product.id} product={product} />
                ))
            }
            </div>
        </section>
        <Cta/>
        <Statistics/>
    </main>
  )
}

export default Products
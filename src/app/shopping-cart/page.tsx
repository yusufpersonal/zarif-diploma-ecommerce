"use client"

import CustomImage from "@/components/image";
import { ProductType } from "@/interface"
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ShoppingCart = () => {
    useEffect(()=> {
        setProducts(JSON.parse(localStorage.getItem('carts') as string) || []) 
    },[])
    const [total, setTotal] = useState<number>(0)
    const [products, setProducts] = useState<ProductType[]>([])
        
    const removeProduct =(id: number)=>{
        const updatedCart = products.filter(product => product.id !== id)
        if (typeof window !== 'undefined') {
            // Perform localStorage action
            localStorage.setItem('carts', JSON.stringify(updatedCart))
          }
        setProducts(updatedCart)
    }
    const router = useRouter();
    const handleIncrement = (id: number) => {
		const updatedCart = products.map(product => {
			if (product.id === id) {
				return {
					...product,
					quantity: product.quantity + 1,
				};
			}

			return product;
		});
        if (typeof window !== 'undefined') {
            // Perform localStorage action
            localStorage.setItem('carts', JSON.stringify(updatedCart));
          }
        
		setProducts(updatedCart);
	};

    const handleDecrement = (id: number) => {
		const existProduct = products.find(product => product.id === id);

		if (existProduct?.quantity === 1) {
			removeProduct(existProduct.id);
		} else {
			const updatedCart = products.map(product => {
				if (product.id === id) {
					return {
						...product,
						quantity: product.quantity - 1,
					};
				}

				return product;
			});
            if (typeof window !== 'undefined') {
                // Perform localStorage action
                localStorage.setItem('carts', JSON.stringify(updatedCart));
              }
			setProducts(updatedCart);
		}
	};

    useEffect(()=>{
        const total = products.reduce((acc, item) => {
            return acc + item.price * item.quantity
        }, 0)
        setTotal(total)
    },[products])

    return (
        <>
            {
                products.length ? (
                    <div className="h-screen bg-gray-100 pt-20">
                            <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
                            <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                                <div  className="rounded-lg md:w-2/3 overflow-y-auto max-h-[500px] ">
                                {products.map(product => (
                                        <div key={product.id} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                                        {/* <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product-image" className="w-full rounded-lg sm:w-40" /> */}
                                        <div className="relative w-52">
                                            <CustomImage product={product} fill/>
                                        </div>
                                        <div className="sm:ml-4 sm:flex sm:w-full gap-x-4 sm:justify-between">
                                            <div className="mt-5 sm:mt-0">
                                            <h2 className="text-lg font-bold text-gray-900 line-clamp-2">{product.title}</h2>
                                            <p className="mt-1 text-xs text-gray-700 line-clamp-2">{product.description}</p>
                                            <div className='flex items-center text-sm my-4'>
                                                        <p>{product?.rating.rate}</p>
                                                        {product?.rating.rate && (
                                                            <div className='flex items-center ml-2 mr-6'>
                                                                {Array.from(
                                                                    {
                                                                        length: Math.floor(product.rating.rate),
                                                                    },
                                                                    (_, i) => (
                                                                        <StarIcon
                                                                            key={i}
                                                                            className='h-4 w-4 text-yellow-500'
                                                                        />
                                                                    )
                                                                )}
                                                                {Array.from(
                                                                    {
                                                                        length:
                                                                            5 - Math.floor(product.rating.rate),
                                                                    },
                                                                    (_, i) => (
                                                                        <StarIconOutline
                                                                            key={i}
                                                                            className='h-4 w-4 text-yellow-500'
                                                                        />
                                                                    )
                                                                )}
                                                                {/* <ReactStars value={product.rating.count} half={false} /> */}
                                                            </div>
                                                        )}
                                                        <p className='text-blue-600 hover:underline cursor-pointer text-xs'>
                                                            See all {product?.rating.count} reviews
                                                        </p>
                                                    </div>
                                            </div>
                                            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                            <div className="flex items-center border-gray-100">
                                                <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                                    onClick={()=> handleDecrement(product.id)}
                                                > - </span>
                                                <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={product.quantity} min="1" />
                                                <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                                    onClick={()=> handleIncrement(product.id)}
                                                > + </span>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <p className="text-sm">{(product?.price * product?.quantity).toLocaleString('en-US', {style: 'currency', currency: 'usd'})}</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                                                    onClick={()=> removeProduct(product.id)}
                                                >
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </div>
                                            </div>
                                        
                                        </div>
                                        </div>
                                    
                                        ))
                                }
                                
                                </div>
                                <div>
                                    <div className="w-100 mt-6  rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-3/3 mb-3">
                                    <div className="mb-2 flex justify-between">
                                    <p className="text-gray-700">Subtotal</p>
                                    <p className="text-gray-700">{total.toLocaleString('en-US', {
                                        currency: 'usd',
                                        style: 'currency'
                                    })}</p>
                                    </div>
                                    <div className="flex justify-between">
                                    <p className="text-gray-700">Shipping</p>
                                    <p className="text-gray-700">{(10).toLocaleString('en-US', {
                                        currency: 'usd',
                                        style: 'currency'
                                    })}</p>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="flex justify-between">
                                    <p className="text-lg font-bold">Total</p>
                                    <div className="">
                                        <p className="mb-1 text-lg font-bold">{(total + 10).toLocaleString('en-US', {
                                        currency: 'usd',
                                        style: 'currency'
                                    })}</p>
                                        <p className="text-sm text-gray-700">including VAT</p>
                                    </div>
                                    </div>
                                    <button onClick={() => {
                                        localStorage.removeItem('carts');
                                        router.push('/products')}} className="mt-6 w-full rounded-md bg-blue-500 py-4 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                                    </div>
                                    <form action="#" className=" rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:max-w-xl lg:p-8 overflow-y-auto max-h-[500px]">
                                        <div className="mb-6 grid grid-cols-2 gap-4">
                                            <div className="col-span-2 sm:col-span-1">
                                            <label htmlFor="full_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Full name (as displayed on card)* </label>
                                            <input type="text" id="full_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Bonnie Green" required />
                                            </div>

                                            <div className="col-span-2 sm:col-span-1">
                                            <label htmlFor="card-number-input" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Card number* </label>
                                            <input type="text" id="card-number-input" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="xxxx-xxxx-xxxx-xxxx" pattern="^4[0-9]{12}(?:[0-9]{3})?$" required />
                                            </div>

                                            <div>
                                            <label htmlFor="card-expiration-input" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Card expiration* </label>
                                            <div className="relative">
                                                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                                                <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                    fill-rule="evenodd"
                                                    d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                                                    clip-rule="evenodd"
                                                    />
                                                </svg>
                                                </div>
                                                <input  datepicker-format="mm/yy" id="card-expiration-input" type="text" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="12/23" required />
                                            </div>
                                            </div>
                                            <div>
                                            <label htmlFor="cvv-input" className="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white">
                                                CVV*
                                                <button data-tooltip-target="cvv-desc" data-tooltip-trigger="hover" className="text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white">
                                                <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z" clip-rule="evenodd" />
                                                </svg>
                                                </button>
                                                <div id="cvv-desc" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700">
                                                The last 3 digits on back of card
                                                <div className="tooltip-arrow" data-popper-arrow></div>
                                                </div>
                                            </label>
                                            <input type="number" id="cvv-input" aria-describedby="helper-text-explanation" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="•••" required />
                                            </div>
                                        </div>

                                        <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Pay now</button>
                                    </form>
                                </div>
                                
                            </div>
                    </div>
                ) : (
                    <div className='flex h-[calc(100vh-80px)] items-center justify-center p-5 bg-white w-full'>
					<div className='text-center'>
						<div className='inline-flex rounded-full bg-yellow-100 p-4'>
							<div className='rounded-full stroke-yellow-600 bg-yellow-200 p-4'>
								<svg
									className='w-16 h-16'
									viewBox='0 0 28 28'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M14.0002 9.33337V14M14.0002 18.6667H14.0118M25.6668 14C25.6668 20.4434 20.4435 25.6667 14.0002 25.6667C7.55684 25.6667 2.3335 20.4434 2.3335 14C2.3335 7.55672 7.55684 2.33337 14.0002 2.33337C20.4435 2.33337 25.6668 7.55672 25.6668 14Z'
										// stroke-width='2'
										// stroke-linecap='round'
										// stroke-linejoin='round'
									></path>
								</svg>
							</div>
						</div>
						<h1 className='mt-5 text-[36px] font-bold text-slate-800 lg:text-[50px]'>
							Shopping cart is empty
						</h1>
						<p className='text-slate-600 mt-5 lg:text-lg'>
							The page you are looking for doesn't exist or <br />
							has been removed.
						</p>
						<Link href={'/products'}>
							<button className='button bg-blue-600 mt-4 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black'>
								Products
							</button>
						</Link>
					</div>
				</div>
                )
            }
        </>
        
    )
}

export default ShoppingCart
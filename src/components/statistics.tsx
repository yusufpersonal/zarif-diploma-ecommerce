import Image from 'next/image'
import React from 'react'

const Statistics = () => {
  return (
     <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                <div className="w-full sm:p-4 px-4 mb-6">
                    <h1 className="title-font font-medium text-xl mb-2 text-gray-900">Zarif Jewellery in numbers</h1>
                    <div className="leading-relaxed">Building beauty, trust, and connection — one jewel at a time.</div>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                    <p className="leading-relaxed">Users</p>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <h2 className="title-font font-medium text-3xl text-gray-900">1.8K</h2>
                    <p className="leading-relaxed">Subscribes</p>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <h2 className="title-font font-medium text-3xl text-gray-900">35</h2>
                    <p className="leading-relaxed">Downloads</p>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
                    <p className="leading-relaxed">Products</p>
                </div>
                </div>
                <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                {/* <img className="object-cover object-center w-full h-full" src="https://dummyimage.com/600x300" alt="stats"/> */}
                <Image
                                                       src={'/zarif1.png'}
                                                       alt={'logo'}
                                                       width={600}
                                                       height={300}
                                                       style={{width:"600px",height: "300px"}}
                                                   /> 
                </div>
            </div>
            </section>
  )
}

export default Statistics
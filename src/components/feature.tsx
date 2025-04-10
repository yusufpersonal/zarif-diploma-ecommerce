import React from 'react'

const Feature = () => {
  return (
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">Crafted with care
            <br className="hidden sm:block"/>designed to shine
            </h1>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                <svg fill="none" stroke="currentColor"
                //  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                 className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
                </div>
                <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Timeless Craftsmanship</h2>
                <p className="leading-relaxed text-base">Each Zarif piece is thoughtfully handmade with precision and passion, ensuring beauty that lasts generations.</p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor"
                    //  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                     className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                <svg fill="none" stroke="currentColor"
                //  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                 className="w-6 h-6" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
                </div>
                <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2"> Custom Jewellery Design</h2>
                <p className="leading-relaxed text-base">Have something special in mind? We craft personalized pieces that tell your unique story in gold and gems.</p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" 
                    // stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                <svg fill="none" stroke="currentColor"
                //  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                 className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
                </div>
                <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Trusted by 2,000+ Happy Customers</h2>
                <p className="leading-relaxed text-base">From weddings to anniversaries, Zarif jewellery has added sparkle to life’s most precious moments.</p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor"
                    //  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                     className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                </div>
            </div>
            </div>
        </div>
        </section>
  )
}

export default Feature
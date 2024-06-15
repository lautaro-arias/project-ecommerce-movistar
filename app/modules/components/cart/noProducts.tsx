import Link from 'next/link';
import React from 'react'

const NoProducts = () => {
    return (
        <section>
            <div className=" relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
                <div className="bg-gray-50 py-12 flex w-full mx-auto text-left">
                    <div className="relative inline-flex items-center mx-auto align-middle">
                        <div className="text-center">
                            <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                                Tu carro se encuentra vacio <br className="hidden lg:block" />
                            </h1>
                            <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-500">¡Tenemos mucha variedad de productos para ti no te lo pierdas!</p>
                            <div className="inline-flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                                <div className=" mt-8 rounded-lg sm:mt-8">
                                    <Link href="/" className="px-5 py-4 text-base font-medium text-center b text-white transition duration-500 ease-in-out transform bg-sky-800 lg:px-10 rounded-xl hover:bg-sky-600  focus:outline-none focus:ring-2 shadow-lg focus:ring-offset-2 focus:ring-blue-500">Ver productos</Link>
                                </div>
                                <div className="mt-4 rounded-lg sm:mt-4 sm:ml-3">
                                    <Link  href="/ofertas" className="items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-sky-700  bg-white hover:shadow-xl transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">Ver ofertas</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default NoProducts;
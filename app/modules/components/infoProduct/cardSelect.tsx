'use client'
import React from 'react';
import { useCart } from '../../handlers/addCart';
import celular4 from '../../../../public/assets/celular4.webp'
import Image from 'next/image'
import Caracteristicas from './caracteristicas';


const CardSelect = () => {
  const { selectedProductsArray } = useCart();
  return (
    <>
      <section >
        <div className=" px-4 mt-12 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div className="flex flex-wrap items-center mx-auto max-w-7xl">

            <div className="w-full sm:ml-4 xl:ml-0 lg:max-w-lg lg:w-1/2 rounded-xl">
              <div>
                <div className="relative w-full rounded-lg max-w-lg">
                  <div className="relative ">
                    <Image className=" h-[450px] md:w-[450px] xl:w-[500px]     lg:h-[400px]  xl:h-[500px] sm:mb-6 md:mb-8 lg:mb-12 xl:mb-0 object-cover border border-gray-200 object-center mx-auto rounded-lg shadow-2xl" alt="hero" src={celular4} />
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-xl lg:shadow-sm sm:me-4 lg:me-0  xl:w-1/2 w-full bg-white ml-5 lg:pl-10 py-12 px-6 mt-12 lg:mt-0">
              {selectedProductsArray.map((product, indexSelect) => (
                <>
                  <h2 key={indexSelect} className="text-sm title-font text-gray-500 tracking-widest">{product.brand}</h2>
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
                  <div className="flex mb-4">
                    <span className="flex items-center">
                      <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <span className="text-gray-600 ml-3">4 Reviews</span>
                    </span>
                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                      <a className="text-gray-500">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="text-gray-500">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="text-gray-500">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                  <p className="leading-relaxed">{product.description}</p>
                  <div className="flex text-sky-600 hover:text-sky-400 mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                    Aprovecha hasta un <span className='font-bold ml-1 me-1'> {product.discountPercentage}%</span> de descuento solo por hoy
                  </div>
                  <div className="flex">
                    <span className="title-font font-medium text-2xl text-gray-900">${product.price}</span>
                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Caracteristicas />
    </>
  )
}

export default CardSelect;
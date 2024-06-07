'use client'
import React from 'react';
import { useCart } from '../../handlers/addCart';
import celular4 from '../../../../public/assets/celular4.webp'
import Image from 'next/image'
import Caracteristicas from './caracteristicas';
import { Products } from '../../model/productModel';
import Link from 'next/link';


const CardSelect = () => {
  const { selectedProductsArray, handleClickAddProductCart, handleClickAddOne} = useCart();

  return (
    <>
     <section>
  <div className="px-4 mt-12 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
    <div className="container lg:flex   items-center mx-auto max-w-7xl">
      <div className="w-full sm:ml-4 xl:ml-0 lg:max-w-lg lg:w-1/2 rounded-xl">
        <div>
          <div className="relative w-full rounded-lg max-w-lg">
            <div className="relative">
              <Image
                className="h-[450px] md:w-[500px] md:h-[500px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] sm:mb-6 md:mb-8 lg:mb-12 xl:mb-0 object-cover border border-gray-200 object-center mx-auto rounded-lg shadow-2xl"
                alt="hero"
                src={celular4}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-xl flex flex-col lg:shadow-sm sm:me-4 lg:me-0 md:w-4/6 lg:w-6/12 bg-white lg:pl-10 py-12 px-4 mt-12 lg:mt-0">
        {selectedProductsArray.map((product, index) => (
          <div key={index}>
            <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.brand}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
            <p className="leading-relaxed">{product.description}</p>

            <div className="mt-2 flex justify-end border-b border-gray-200 pt-4 pb-4 mb-4">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd className="line-through text-gray-400 text-lg">{product.price}</dd>
                  </div>
                  <div className="flex mb-4 justify-between">
                    <dt>Descuento</dt>
                    <dd className="bg-sky-400 rounded-lg">-{product.discountPercentage}%</dd>
                  </div>
                  <div className="flex justify-between text-3xl pt-4">
                    <dd>
                      $ {Math.round((product.price - product.price * product.discountPercentage / 100) * 100) / 100}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="inline-flex mx-auto">
              <Link
                href="/cart"
                onClick={() => {
                  handleClickAddOne(true);
                  handleClickAddProductCart(product);
                }}
                className="justify-center mt-2 border hover:scale-95 duration-300 relative group cursor-pointer text-sky-50 overflow-hidden h-12 w-64 md:w-96 rounded-md bg-sky-200 p-2 flex items-center font-extrabold"
              >
                <div className="absolute right-32 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-sky-900"></div>
                <div className="absolute right-2 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150 duration-500 bg-sky-800"></div>
                <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150 duration-500 bg-sky-700"></div>
                <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-500 bg-sky-600"></div>
                <p className="z-10 inline-flex">
                  Comprar
                  <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#ffffff">
                    <path d="M273.2-121.77q-24.92 0-42.16-17.41-17.23-17.42-17.23-42.35t17.41-42.16q17.42-17.23 42.35-17.23 24.92 0 42.16 17.41 17.23 17.42 17.23 42.34 0 24.93-17.41 42.17-17.42 17.23-42.35 17.23Zm412.43 0q-24.93 0-42.17-17.41-17.23-17.42-17.23-42.35t17.42-42.16q17.41-17.23 42.34-17.23 24.93 0 42.16 17.41 17.23 17.42 17.23 42.34 0 24.93-17.41 42.17-17.41 17.23-42.34 17.23Zm-436.4-583.42 88.39 204.31h289.65q3.46 0 6.15-1.74 2.7-1.73 4.62-4.8l79.31-187q2.3-4.23.38-7.5-1.92-3.27-6.54-3.27H249.23Zm-20.05-47.96h524.47q15.35 0 22.02 10.91 6.67 10.92 1.48 23.01l-94.29 228.35q-6.67 16.96-21.73 27.46t-33.52 10.5H318.62l-45.12 78.23q-3.08 4.61-.19 10 2.88 5.38 8.65 5.38h463.42v47.96H285.53q-37.07 0-54.17-29.72-17.09-29.73 1.1-59.62l55.08-93.63-130.83-305.26H76.08v-47.96h112.8l40.3 94.39Zm108.44 252.27h296.96-296.96Z" />
                  </svg>
                </p>
              </Link>
            </div>
          </div>
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
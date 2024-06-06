'use client'
import React from 'react'
import Filter from './filter';
import fechData from '../../handlers/fechData';
import CardImg from './cardImg';
import { useCart } from '../../handlers/addCart';
import Link from 'next/link';
import ModalAddProduct from './modalAddProduct';
// SE ESNCUENTRA EN NOSHOW PARA NO MOSTRARSE EN OFERTAS //

const CardsProduct = () => {
    const { datas } = fechData();
    const { handleClickAddOne, handleClickShowProduct, handleClickAddProductCart } = useCart();
    return (
        <>
            <div className="flex flex-col flex-1 w-0 overflow-hidden">
                <main className="relative flex-1 overflow-y-auto focus:outline-none">
                    <div className="py-6">
                        <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                            <h1 className="text-lg text-neutral-600">Todos nuestros productos</h1>
                        </div>
                        <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                            <Filter />
                            <div className="py-4">

                                <article className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                                    {datas.map((product: any, index: any) => (
                                        <div key={index} className="bg-white rounded-md  group block">
                                            <Link onClick={() => handleClickShowProduct(product)} href="/infoProduct">
                                                <CardImg />
                                            </Link>
                                            <div className=" mt-2 pb-10 text-center rounded-b-lg  px-20">
                                                <dl>
                                                    <div>
                                                        <dt className="sr-only">Precio</dt>
                                                        <dd className="text-sm text-gray-500">${product.price}</dd>
                                                    </div>
                                                    <div>
                                                        <dt className="sr-only">Address</dt>
                                                        <dd className="font-medium">{product.title}</dd>
                                                    </div>
                                                </dl>
                                                <div className=" mt-6 flex  justify-center gap-2 text-xs">
                                                    <div className="inline-flex shrink-0  items-center gap-2 me-2">
                                                        <div className="mt-1.5 sm:mt-0">
                                                            <p className="text-sky-700 font-bold">Descuento</p>
                                                            <p className="font-medium">{product.discountPercentage}%</p>
                                                        </div>
                                                    </div>
                                                    <div className="inline-flex shrink-0 items-center gap-2 me-2">
                                                        {product.availabilityStatus === "Out of Stock" ? (
                                                            <>
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D80E0E"><path d="M171.31-739.27v-47.88h618.46v47.88H171.31Zm4.58 565.95v-247.24h-49.56v-47.89l44.98-199.65H789.1l45.23 199.65v47.89h-49.55v247.24H736.9v-247.24H542.22v247.24H175.89Zm47.88-47.88h270.56v-199.36H223.77v199.36Zm-49.78-247.25h612.96-612.96Zm0 0h612.96l-34.4-151.77H208.38l-34.39 151.77Z" /></svg>
                                                                <div className="mt-1.5 sm:mt-0">
                                                                    <p className="text-gray-500">No stock</p>
                                                                    <p className="font-medium">{product.availabilityStatus}</p>
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#6CD627"><path d="M171.31-739.27v-47.88h618.46v47.88H171.31Zm4.58 565.95v-247.24h-49.56v-47.89l44.98-199.65H789.1l45.23 199.65v47.89h-49.55v247.24H736.9v-247.24H542.22v247.24H175.89Zm47.88-47.88h270.56v-199.36H223.77v199.36Zm-49.78-247.25h612.96-612.96Zm0 0h612.96l-34.4-151.77H208.38l-34.39 151.77Z" /></svg>
                                                                <div className="mt-1.5 sm:mt-0">
                                                                    <p className="text-gray-500">En stock</p>
                                                                    <p className="font-medium">{product.availabilityStatus}</p>
                                                                </div>
                                                            </>
                                                        )
                                                        }
                                                    </div>
                                                    <div className="inline-flex  items-center gap-2 me-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#59E100"><path d="M227.17-181.9q-45.25 0-77.39-32.22t-32.14-77.84H58.62V-715.6q0-24.54 17.69-42.34 17.69-17.79 42.5-17.79h549.68v153.79h96.34L901.91-438.7v146.74h-66.42q0 45.62-32.44 77.84-32.43 32.22-77.9 32.22-45.37 0-77.45-32.22-32.08-32.22-32.08-77.84H337.51q0 45.84-32.54 77.95t-77.8 32.11Zm.14-47.88q25.75 0 44.04-18.02 18.28-18.02 18.28-44.03 0-26.02-18.24-44.04-18.25-18.02-43.81-18.02-26.02 0-44.04 18.02t-18.02 44.04q0 26.01 18.02 44.03t43.77 18.02ZM106.5-339.85h23.46q12.08-26.71 38.41-44.28 26.34-17.58 58.64-17.58 31.53 0 58.06 17.49 26.52 17.49 39.34 44.37H620.6v-388H118.81q-4.81 0-8.56 3.85-3.75 3.85-3.75 8.46v375.69Zm618.79 110.07q25.75 0 44.03-18.02t18.28-44.03q0-26.02-18.24-44.04t-43.81-18.02q-26.01 0-44.03 18.02t-18.02 44.04q0 26.01 18.02 44.03t43.77 18.02Zm-56.8-192.09h186.6L739.86-574.05h-71.37v152.18Zm-304.73-106.9Z" /></svg>
                                                        <div className="mt-1.5 sm:mt-0">
                                                            <p className="text-gray-500">Envio</p>
                                                            <p className="font-medium">Gratis</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className=' flex justify-center'>
                                                    <button onClick={() => { handleClickAddOne(true), handleClickAddProductCart(product) }} className=" mt-2 border hover:scale-95 duration-300 relative group cursor-pointer text-sky-50  overflow-hidden h-12 w-64 rounded-md bg-sky-200 p-2 flex justify-center items-center font-extrabold">
                                                        <div className="absolute right-32 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-sky-900"></div>
                                                        <div className="absolute right-2 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150  duration-500 bg-sky-800"></div>
                                                        <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150  duration-500 bg-sky-700"></div>
                                                        <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-500 bg-sky-600"></div>
                                                        <p className="z-10"> <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#ffffff"><path d="M273.2-121.77q-24.92 0-42.16-17.41-17.23-17.42-17.23-42.35t17.41-42.16q17.42-17.23 42.35-17.23 24.92 0 42.16 17.41 17.23 17.42 17.23 42.34 0 24.93-17.41 42.17-17.42 17.23-42.35 17.23Zm412.43 0q-24.93 0-42.17-17.41-17.23-17.42-17.23-42.35t17.42-42.16q17.41-17.23 42.34-17.23 24.93 0 42.16 17.41 17.23 17.42 17.23 42.34 0 24.93-17.41 42.17-17.41 17.23-42.34 17.23Zm-436.4-583.42 88.39 204.31h289.65q3.46 0 6.15-1.74 2.7-1.73 4.62-4.8l79.31-187q2.3-4.23.38-7.5-1.92-3.27-6.54-3.27H249.23Zm-20.05-47.96h524.47q15.35 0 22.02 10.91 6.67 10.92 1.48 23.01l-94.29 228.35q-6.67 16.96-21.73 27.46t-33.52 10.5H318.62l-45.12 78.23q-3.08 4.61-.19 10 2.88 5.38 8.65 5.38h463.42v47.96H285.53q-37.07 0-54.17-29.72-17.09-29.73 1.1-59.62l55.08-93.63-130.83-305.26H76.08v-47.96h112.8l40.3 94.39Zm108.44 252.27h296.96-296.96Z" /></svg>
                                                            </p>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </article>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <ModalAddProduct />
        </>
    )
}
export default CardsProduct;
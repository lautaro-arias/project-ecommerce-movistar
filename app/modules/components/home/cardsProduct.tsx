'use client'
import React from 'react'
import Filter from './filter';
import { useData } from '../../handlers/fechData';
import { useCart } from '../../handlers/addCart';
import ArraysImg from '../../utils/arraysImg';
import Image from 'next/image';
import Link from 'next/link';

// SE ESNCUENTRA EN NOSHOW PARA NO MOSTRARSE EN OFERTAS //

const CardsProduct = () => {
    const { datas, all } = useData();
    const { handleClickShowProduct, handleClickId } = useCart();
    const { arrayImg } = ArraysImg();

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
                                <article className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                                    {all.map((product: any, index: any) => {
                                        const imgData = arrayImg.find(img => img.id === product.id);

                                        return (
                                            <div key={index} className="bg-white rounded-md group block">
                                                {imgData && (
                                                    <div className="relative h-[450px] md:h-[350px] overflow-hidden">
                                                        <Link onClick={() => { handleClickShowProduct(product), handleClickId(product.id) }} href="/infoProduct">
                                                            <Image
                                                                width={900}
                                                                height={900}
                                                                key={index}
                                                                className="absolute   inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                                                                src={imgData.img}
                                                                alt='celular'
                                                            />
                                                            <Image
                                                                width={900}
                                                                height={900}
                                                                className="absolute  inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                                                                src={imgData.img2}
                                                                alt='celular'
                                                            />
                                                        </Link>
                                                    </div>
                                                )}

                                                <div className="mt-2 pb-10 text-center rounded-b-lg px-20">
                                                    <dl>
                                                        <div>
                                                            <dt className="sr-only">Precio</dt>
                                                            <dd className="text-sm text-gray-500">${product.price}</dd>
                                                        </div>
                                                        <div>
                                                            <dt className="sr-only">Title</dt>
                                                            <dd className="font-medium">{product.title}</dd>
                                                        </div>
                                                    </dl>
                                                    <div className="mt-6 flex justify-center gap-2 text-xs">
                                                        <div className="inline-flex shrink-0 items-center gap-2 me-2">
                                                            <div className="mt-1.5 sm:mt-0">
                                                                <p className="text-sky-700 font-bold">Descuento</p>
                                                                <p className="font-medium">{product.discountPercentage}%</p>
                                                            </div>
                                                        </div>
                                                        <div className="inline-flex shrink-0 items-center gap-2 me-2">
                                                            {product.availabilityStatus === "Out of Stock" ? (
                                                                <>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D80E0E">
                                                                        <path d="M171.31-739.27v-47.88h618.46v47.88H171.31Zm4.58 565.95v-247.24h-49.56v-47.89l44.98-199.65H789.1l45.23 199.65v47.89h-49.55v247.24H736.9v-247.24H542.22v247.24H175.89Zm47.88-47.88h270.56v-199.36H223.77v199.36Zm-49.78-247.25h612.96-612.96Zm0 0h612.96l-34.4-151.77H208.38l-34.39 151.77Z" />
                                                                    </svg>
                                                                    <div className="mt-1.5 sm:mt-0">
                                                                        <p className="text-gray-500">No stock</p>
                                                                        <p className="font-medium">{product.availabilityStatus}</p>
                                                                    </div>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#6CD627">
                                                                        <path d="M171.31-739.27v-47.88h618.46v47.88H171.31Zm4.58 565.95v-247.24h-49.56v-47.89l44.98-199.65H789.1l45.23 199.65v47.89h-49.55v247.24H736.9v-247.24H542.22v247.24H175.89Zm47.88-47.88h270.56v-199.36H223.77v199.36Zm-49.78-247.25h612.96-612.96Zm0 0h612.96l-34.4-151.77H208.38l-34.39 151.77Z" />
                                                                    </svg>
                                                                    <div className="mt-1.5 sm:mt-0">
                                                                        <p className="text-gray-500">En stock</p>
                                                                        <p className="font-medium">{product.availabilityStatus}</p>
                                                                    </div>
                                                                </>
                                                            )}
                                                        </div>
                                                        <div className="inline-flex items-center gap-2 me-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#59E100">
                                                                <path d="M227.17-181.9q-45.25 0-77.39-32.22t-32.14-77.84H58.62V-715.6q0-24.54 17.69-42.34 17.69-17.79 42.5-17.79h549.68v153.79h96.34L901.91-438.7v146.74h-66.42q0 45.62-32.44 77.84-32.43 32.22-77.9 32.22-45.37 0-77.45-32.22-32.08-32.22-32.08-77.84H337.51q0 45.84-32.54 77.95t-77.8 32.11Zm.14-47.88q25.75 0 44.04-18.02 18.28-18.02 18.28-44.03 0-26.02-18.24-44.04-18.25-18.02-43.81-18.02-26.02 0-44.04 18.02t-18.02 44.04q0 26.01 18.02 44.03t43.77 18.02ZM106.5-339.85h23.46q12.08-26.71 38.41-44.28 26.34-17.58 58.64-17.58 31.53 0 58.06 17.49 26.52 17.49 39.34 44.37H620.6v-388H118.81q-4.81 0-8.56 3.85-3.75 3.85-3.75 8.46v375.69Zm618.79 110.07q25.75 0 44.03-18.02t18.28-44.03q0-26.02-18.24-44.04t-43.81-18.02q-26.01 0-44.03 18.02t-18.02 44.04q0 26.01 18.02 44.03t43.77 18.02Zm-56.8-192.09h186.6L739.86-574.05h-71.37v152.18Zm-304.73-106.9Z" />
                                                            </svg>
                                                            <div className="mt-1.5 sm:mt-0">
                                                                <p className="text-gray-500">Envio</p>
                                                                <p className="font-medium">Gratis</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </article>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
export default CardsProduct;
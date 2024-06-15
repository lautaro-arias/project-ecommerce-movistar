import React from 'react';
import arrayIngresos from '../../utils/arrayNuevosIngresos';
import Image from 'next/image';

const News = () => {
    const { dataPhone } = arrayIngresos()
    return (
        <section className="px-4 pb-12 pt-12 mt-24  mb-24 mx-auto max-w-4xl bg-white ">
            <h2 className="pb-8 mb-12 text-2xl font-extrabold leading-tight text-gray-900 border-b border-gray-200 md:text-4xl">Nuevos Ingresos!</h2>
            <div className="w-full   xl:w-5/6 ">
                <div className="flex justify-center flex-col space-y-16">
                    {dataPhone.map((item, index) => (
                        <div key={index} className=" grid grid-cols-1 gap-6 md:grid-cols-4">
                            <div className='flex-shrink-0 relative   overflow-hidden'>
                                <Image width={300} height={300} src={item.img} className="p-0 transition-transform duration-300 transform scale-100 hover:scale-110 object-cover object-no-repeat w-full h-full md:h-44 lg:h-60 xl:h-40 col-span-1 bg-center" alt="Kutty" loading="lazy" />
                            </div>
                            <div className="border-b pb-12 md:pb-2 col-span-1 md:col-span-3">
                                <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">{item.fecha}</p>
                                <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                                    <span className="cursor-pointer text-gray-900 hover:text-cyan-600">{item.name}</span>
                                </h2>
                                <p className="mb-3 text-sm font-normal text-gray-500">
                                    {item.description}
                                </p>
                                <div className="tooltip tooltip-right" data-tip="No hay info de momento">
                                    <button className=" rounded-md hover:from-sky-300 hover:to-sky-100 bg-gradient-to-l from-slate-300 to-slate-100  bg-sky-200 w-40" >Info</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pt-10 mt-10 border-t border-gray-200">
                    <ol className="flex justify-center gap-1 text-xs font-medium">
                        <li>
                            <span className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180">
                                <span className="sr-only">Prev Page</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </li>
                        <li>
                            <span className="block size-8 rounded border border-blue-600 bg-blue-600 text-white text-center leading-8">
                                1
                            </span>
                        </li>
                        <li className="block size-8 rounded border-gray-100 bg-white text-center leading-8  text-gray-900">
                            2
                        </li>
                        <li className='className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"'>
                            3
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    )
}
export default News;
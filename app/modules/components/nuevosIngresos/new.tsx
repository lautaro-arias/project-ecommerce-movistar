import React from 'react'
import arrayIngresos from '../../utils/arrayNuevosIngresos'
import Image from 'next/image'

const News = () => {
    const { dataPhone } = arrayIngresos()
    return (
        <section className="px-4 pb-12 pt-12 mt-24  mb-24 mx-auto max-w-6xl bg-white ">
            <h2 className="pb-8 mb-12 text-2xl font-extrabold leading-tight text-gray-900 border-b border-gray-200 md:text-4xl">Nuevos Ingresos!</h2>
            <div className="w-full xl:w-4/6 bg-white">
                <div className="flex flex-col space-y-16">
                    {dataPhone.map((item, index) => (
                        <div key={index} className="grid grid-cols-1 gap-6 md:grid-cols-4">
                            <Image width={300} height={300} src={item.img} className="object-cover object-no-repeat w-full h-full md:h-44 lg:h-60 xl:h-40 col-span-1 bg-center" alt="Kutty" loading="lazy" />
                            <div className="col-span-1 md:col-span-3">
                                <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">{item.fecha}</p>
                                <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                                    <a href="#" className="text-gray-900 hover:text-cyan-600">{item.name}</a>
                                </h2>
                                <p className="mb-3 text-sm font-normal text-gray-500">
                                    {item.description}
                                </p>
                                <div className="tooltip tooltip-right" data-tip="No hay info de momento">
                                    <button   className=" btn btn-light btn-sm w-40" >Info</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="pt-10 mt-10 border-t border-gray-200">

                    <ol className="flex justify-center gap-1 text-xs font-medium">
                        <li>
                            <a
                                href="#"
                                className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                            >
                                <span className="sr-only">Prev Page</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3 w-3"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="block size-8 rounded border border-blue-600 bg-blue-600 text-white text-center leading-8 text-gray-900"
                            >
                                1
                            </a>
                        </li>

                        <li className="block size-8 rounded border-gray-100 bg-white text-center leading-8  text-gray-900">
                            2
                        </li>

                        <li>
                            <a
                                href="#"
                                className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                            >
                                3
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                            >
                                4
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                            >
                                <span className="sr-only">Next Page</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3 w-3"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>

    )
}

export default News
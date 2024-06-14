'use client'
import { useForm } from '@/app/modules/handlers/form'
import React from 'react'

const PagoTarjeta = () => {
    const { handleClickPago} = useForm()

    return (
        <section className=" px-2 py-2 shadow-xl rounded-lg border-2  bg-gradient-to-l from-slate-300 to-slate-100  ">
            <form  className="form">
                <div className='flex flex-wrap justify-center pt-2 md:inline-flex'>
                    <div className="mx-auto mt-4 md:ml-4 md:me-4 mb-3  ">
                        <label htmlFor="nombre" className='rounded-xl py-1 relative block  bg-white border border-sky-200 shadow-lg focus-within:shadow-xl focus-within:shadow-sky-200 focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-600'>
                            <input
                                className=" py-2 peer border-none rounded-md pt-4 text-gray-500  bg-white placeholder-gray-300 focus:border-transparent focus:outline-none focus:ring-0"
                                type="text"
                                name="input-name"
                                minLength={6}
                                maxLength={15}
                                title="Input title"
                                placeholder="Nombre completo"
                            />
                            <span className="pointer-events-none absolute start-2 text-xs top-0 -translate-y-1/2 bg-gradient-to-l from-slate-300 to-slate-100 rounded-xl  px-1 text-dark transition-all peer-placeholder-shown:top-2/2 peer-placeholder-shown:text-sm peer-focus:top-2/2 peer-focus:text-sky-600 peer-focus:text-xs">
                                Nombre completo
                            </span>
                        </label>
                    </div>
                    <div className="mt-4  mb-3  ">
                        <label htmlFor="nombre" className='border-sky-200 bg-white rounded-xl py-1 relative block  border shadow-lg focus-within:shadow-xl focus-within:shadow-sky-200 focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-600'>
                            <input
                                id="serialCardNumber"
                                className=" py-2 peer border-none rounded-xl pt-4 text-gray-500  bg-white placeholder-gray-300 focus:border-transparent focus:outline-none focus:ring-0"
                                type="number"
                                minLength={16}
                                maxLength={16}
                                name="input-name"
                                title="Input title"
                                placeholder="0000 0000 0000 0000"
                            />
                            <span className="pointer-events-none absolute start-2 text-xs top-0 -translate-y-1/2 bg-gradient-to-l from-slate-300 to-slate-100 rounded-xl  px-1 text-dark transition-all peer-placeholder-shown:top-2/2 peer-placeholder-shown:text-sm peer-focus:top-2/2 peer-focus:text-sky-600 peer-focus:text-xs">
                                Numero de tarjeta
                            </span>
                        </label>
                    </div>
                </div>
                <div className='flex  justify-center flex-wrap md:inline-flex'>
                    <div className="mb-3 mt-4 md:ml-4 md:me-4">
                        <label htmlFor="nombre" className='rounded-xl bg-white py-1 relative block  border border-sky-200 shadow-lg focus-within:shadow-xl focus-within:shadow-sky-200 focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-600'>
                            <input
                                id="ExDate"
                                className=" py-2 peer border-none rounded-md pt-4 bg-white text-gray-500  placeholder-gray-300 focus:border-transparent focus:outline-none focus:ring-0"
                                type="text"
                                name="input-name"
                                title="Expiry Date"
                                minLength={5}
                                maxLength={5}
                                placeholder="01/23"
                            />
                            <span className="pointer-events-none absolute start-2 text-xs top-0 -translate-y-1/2 bg-gradient-to-l from-slate-300 to-slate-100 rounded-xl  px-1 text-dark transition-all peer-placeholder-shown:top-2/2 peer-placeholder-shown:text-sm peer-focus:top-2/2 peer-focus:text-sky-600 peer-focus:text-xs">
                                Fecha de expiración
                            </span>
                        </label>
                    </div>
                    <div className="mt-4  mb-3  ">
                        <label htmlFor="nombre" className='rounded-xl bg-white py-1 relative block  border border-sky-200 shadow-lg focus-within:shadow-xl focus-within:shadow-sky-200 focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-600'>
                            <input
                                id="cvv"
                                className=" py-2 peer border-none text-gray-500 rounded-md pt-4 bg-white placeholder-gray-300 focus:border-transparent focus:outline-none focus:ring-0"
                                type="number"
                                name="cvv"
                                minLength={3}
                                maxLength={3}
                                title="CVV"
                                placeholder="CVV"
                            />
                            <span className="pointer-events-none absolute start-2 text-xs top-0 -translate-y-1/2 bg-gradient-to-l from-slate-300 to-slate-100 rounded-xl  px-1 text-dark transition-all peer-placeholder-shown:top-2/2 peer-placeholder-shown:text-sm peer-focus:top-2/2 peer-focus:text-sky-600 peer-focus:text-xs">
                                CVV
                            </span>
                        </label>
                    </div>
                </div>
                    <div className="flex justify-center mt-8">
                        <button onClick={handleClickPago} className=" h-10 rounded-full shadow-md bg-sky-400 w-56 hover:bg-gradient-to-l hover:from-sky-300 hover:to-sky-100 border-2 border-white text-white font-light">
                            Comprar
                        </button>
                    </div>
            </form>
        </section>

    )
}

export default PagoTarjeta;
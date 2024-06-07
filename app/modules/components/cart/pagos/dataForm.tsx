'use client'
import React from 'react'
import Pago from './pago';
import { useCart } from '@/app/modules/handlers/addCart';
import NoProducts from '../noProducts';

const DataForm = () => {
  const {showCart} = useCart();
  return (
    <>
      {showCart ? (
        <>
        <div className ="flex justify-center mt-10 text-center">
            <div className=' justify-center md:text-xl'>
              <span className='bg-sky-400 text-xl px-4 py-2 md:px-6 md:py-4 me-2 rounded-full text-white'>1</span>Ingresá tus datos
            </div>
            <span className=''>
                <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="100px" fill="#666666"><path d="M249-744v-15h462v15H249Z"/></svg>
            </span>
            <div className=' justify-center text-xl'>
              <span className='bg-gray-300 px-2 md:px-4 md:py-2 me-2 rounded-full text-white'>2</span>Aboná tu equipo
            </div>
          </div>
      <section className='flex  justify-center mx-auto   md:py-20'>
        <div className="mt-4  mx-auto w-96 lg:w-6/12 bg-sky-950 rounded-lg p-12 shadow-sm">
          <h2 className="text-white font-bold text-md">Datos personales</h2>

          <div className="mt-4 me-4 mb-3 lg:w-96 ">
            <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
              <input type="text" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0" placeholder="Username" />
              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-sky-950 p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Email <span className='text-red-400 text-xl'>*</span>
              </span>
            </label>
          </div>
          <div className='flex  flex-wrap md:inline-flex ' >
            <div className="mt-4 me-4 mb-3  ">
              <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                <input type="text" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0" placeholder="Username" />
                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-sky-950 p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Nombre <span className='text-red-400 text-xl'>*</span>
                </span>
              </label>
            </div>
            <div className="mt-4 me-4 mb-3  ">
              <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                <input type="text" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0" placeholder="Username" />
                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-sky-950 p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Apellido <span className='text-red-400 text-xl'>*</span>
                </span>
              </label>
            </div>
          </div>
          <div className='flex flex-wrap md:inline-flex ' >
            <div className="mt-4 me-4 mb-3  ">
              <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                <input type="text" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0" placeholder="Username" />
                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-sky-950 p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  DNI <span className='text-red-400 text-xl'>*</span>
                </span>
              </label>
            </div>
            <div className="mt-4 me-4 mb-3  ">
              <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                <select id="Username" className=" rounded-md peer border-none bg-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0" >
                  <option className='text-dark' value="">Selecciona</option>
                  <option value="JM">John Mayer</option>
                </select>
              </label>
            </div>
          </div>
          <div className='flex flex-wrap md:inline-flex ' >
            <div className="mt-4 me-4 mb-3  ">
              <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                <input type="text" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0" placeholder="Username" />
                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-sky-950 p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Celular <span className='text-red-400 text-xl'>*</span>
                </span>
              </label>
            </div>
            <div className="mt-4 me-4 mb-3  ">
              <select id="Username" className=" w-24 me-2 mb-2 md:mb-0  rounded-md peer border-none bg-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0" >
                <option className='text-dark' value="">Dia</option>
                <option value="JM">John Mayer</option>
              </select>
              <select id="Username" className=" w-24 me-2  mb-2 md:mb-0 rounded-md peer border-none bg-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0" >
                <option className='text-dark' value="">Mes</option>
                <option value="JM">John Mayer</option>
              </select>
              <select id="Username" className=" w-24 me-2  rounded-md peer border-none bg-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0" >
                <option className='text-dark' value="">Año</option>
                <option value="JM">John Mayer</option>
              </select>
            </div>
          </div>

          <h4 className="text-white font-bold pt-8 text-md">Domicilio</h4>

          <div className='flex flex-wrap md:inline-flex ' >
            <div className="mt-4 me-4 mb-3  ">
              <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                <input type="text" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0" placeholder="Username" />
                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-sky-950 p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Calle <span className='text-red-400 text-xl'>*</span>
                </span>
              </label>
            </div>
            <div className="mt-4 me-4 mb-3  ">
              <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                <input type="text" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0" placeholder="Username" />
                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-sky-950 p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Altura <span className='text-red-400 text-xl'>*</span>
                </span>
              </label>
            </div>
            <div className="mt-4 me-4 mb-3  ">
              <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                <input type="text" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0" placeholder="Username" />
                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-sky-950 p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Piso
                </span>
              </label>
            </div>
            <div className="mt-4 me-4 mb-3  ">
              <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                <input type="text" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0" placeholder="Username" />
                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-sky-950 p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Departamento
                </span>
              </label>
            </div>
            <div className="mt-4 me-4 mb-3  ">
              <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                <input type="text" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0" placeholder="Username" />
                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-sky-950 p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Provincia <span className='text-red-400 text-xl'>*</span>
                </span>
              </label>
            </div>
            <div className="mt-4 me-4 mb-3  ">
              <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                <input type="text" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0" placeholder="Username" />
                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-sky-950 p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Localidad <span className='text-red-400 text-xl'>*</span>
                </span>
              </label>
            </div>
            <div className="mt-4 me-4 mb-3  ">
              <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                <input type="text" id="Username" className="  peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0" placeholder="Username" />
                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-sky-950 p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Codigo postal <span className='text-red-400 text-xl'>*</span>
                </span>
              </label>
            </div>
          </div>

          <h4 className="text-white font-bold pt-8 text-md">Envio / Retiro</h4>


          <div className="space-y-4 pt-4">
            <details className="  group [&_summary::-webkit-details-marker]:hidden" >
              <summary className="inline-flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                <h2 className="font-medium">Envio a domicilio</h2>
                <svg className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
                <input type="checkbox" defaultChecked className=" ml-4 size-5 rounded border-gray-300" id="Option3" />
              </summary>
              <p className="mt-4 px-4 leading-relaxed text-white">
                hola
              </p>
            </details>

            <details className="  group [&_summary::-webkit-details-marker]:hidden">
              <summary className="inline-flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                <h2 className="font-medium">Retiro en correo </h2>
                <svg className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
                <input type="checkbox" className=" ml-4 size-5 rounded border-gray-300" id="Option3" />
              </summary>
              <p className="mt-4 px-4 leading-relaxed text-white">
                hola
              </p>
            </details>
          </div>

          <div className="mt-4 flex justify-end border-t border-gray-200">
            <a className="inline-flex items-center gap-2 rounded  mt-4 border-sky-500 bg-sky-600 px-8 py-3 text-white hover:bg-sky-500 border-2 hover:border-sky-200  focus:outline-none focus:ring active:text-sky-500" href="#">
              <span className="text-sm font-medium"> Siguiente </span>
                <svg className="size-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </a>
          </div>
        </div>
      </section>
      <Pago/>
      </>
      
    ) : (<NoProducts />)}
    
    </>
  )
}

export default DataForm;
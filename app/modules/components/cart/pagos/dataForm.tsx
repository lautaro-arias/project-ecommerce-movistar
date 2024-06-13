'use client'
import React, { useState } from 'react'
import { useCart } from '@/app/modules/handlers/addCart';
import NoProducts from '../noProducts';
import { useForm } from '@/app/modules/handlers/form';

const DataForm = () => {
  const { showCart } = useCart();
  const {
    value, handleSubmit, emailRef, nombreRef, apellidoRef, dniRef, celularRef,
    calleRef, alturaRef, pisoRef, departamentoRef, localidadRef, provinciaRef,
    codigoPostalRef, checkboxFormEnvioRef, checkboxFormRetiroRef, handleCheckboxChange,handleChange
  } = useForm();

  return (
    <>
      {showCart ? (
        <>
          <div className="flex justify-center mt-10 text-center">
            <div className=' justify-center md:text-xl'>
              <span className='bg-sky-400 text-xl px-4 py-2 md:px-6 md:py-4 me-2 rounded-full text-white'>1</span>Ingresá tus datos
            </div>
            <span className=''>
              <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="100px" fill="#666666"><path d="M249-744v-15h462v15H249Z" /></svg>
            </span>
            <div className=' justify-center text-xl'>
              <span className='bg-gray-300 px-2 md:px-4 md:py-2 me-2 rounded-full text-white'>2</span>Aboná tu equipo
            </div>
          </div>
          <form className='flex  justify-center mx-auto   md:py-20' noValidate onSubmit={handleSubmit}>
            <div className="mt-4  mx-auto w-96 lg:w-6/12 bg-sky-950 rounded-lg p-12 shadow-sm">
              <h2 className="text-white font-bold text-md">Datos personales</h2>
              <div className="inline-flex mt-4 me-4 mb-3  ">
                <label htmlFor="Username" className={`relative block rounded-md border  ${value.length === 0 ? 'border-sky-600' :  value.length >= 12 ? 'border-green-500' :  value.length > 1  && value.length < 12 ? 'border-red-500':""}   border-gray-200 shadow-sm focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-600`}>

                  <input className="rounded-md pt-4 bg-white peer border-none text-dark placeholder-transparent focus:outline-none focus:ring-0 focus:shadow-none"
                    type="text"
                    id="email"
                    placeholder='email'
                    value={value}
                    onChange={handleChange}
                    ref={emailRef}
                    required
                  />
                  <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 backdrop-blur-md rounded-xl  px-1 text-xs text-dark transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    Email <span className='text-red-400 text-xl'>*</span>
                  </span>
                </label>
                {value.length > 1  && value.length < 12 ?  <span className='text-red-400 text-xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#F92A2A"><path d="M479.88-293.14q12.67 0 20.38-7.6 7.71-7.59 7.71-20.26 0-12.67-7.59-20.38-7.59-7.71-20.26-7.71-12.67 0-20.38 7.6-7.71 7.59-7.71 20.26 0 12.67 7.59 20.38 7.59 7.71 20.26 7.71Zm-22.1-140.4h47.89V-678h-47.89v244.46Zm22.53 328.8q-77.94 0-146.23-29.66-68.3-29.66-119.21-80.6-50.9-50.93-80.51-119.11-29.62-68.17-29.62-146.09 0-77.74 29.66-146.21 29.66-68.48 80.6-119.22 50.93-50.73 119.11-80.18 68.17-29.45 146.09-29.45 77.74 0 146.22 29.57 68.48 29.58 119.21 80.27 50.73 50.69 80.18 119.1 29.45 68.41 29.45 146.01 0 77.94-29.5 146.23-29.49 68.3-80.26 119.08-50.77 50.78-119.18 80.52-68.41 29.74-146.01 29.74Zm-.01-47.89q136.05 0 231.56-95.68 95.51-95.68 95.51-231.99 0-136.05-95.35-231.56-95.35-95.51-231.99-95.51-135.97 0-231.68 95.35-95.72 95.35-95.72 231.99 0 135.97 95.68 231.68 95.68 95.72 231.99 95.72ZM480-480Z"/></svg>
                      </span>: " "}
              </div>

              <div className='flex  flex-wrap md:inline-flex ' >
                <div className="mt-4 me-4 mb-3  ">
                  <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-600">
                    <input className="peer border-none rounded-md pt-4 bg-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                      type="text"
                      id="nombre"
                      placeholder="name"
                      minLength={4}
                      maxLength={15}
                      ref={nombreRef}
                      required
                    />
                    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 backdrop-blur-md rounded-xl  px-1 text-xs text-dark transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                      Nombre <span className='text-red-400 text-xl'>*</span>
                    </span>
                  </label>
                 
                </div>
                <div className="mt-4 me-4 mb-3  ">
                  <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-600">
                    <input className="peer border-none rounded-md pt-4 bg-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                      type="text"
                      id="apellido"
                      placeholder="apellido"
                      minLength={4}
                      maxLength={15}
                      ref={apellidoRef}
                      required
                    />
                    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 backdrop-blur-md rounded-xl  px-1 text-xs text-dark transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                      Apellido <span className='text-red-400 text-xl'>*</span>
                    </span>
                  </label>
                 
                </div>
              </div>
              <div className='flex flex-wrap md:inline-flex ' >
                <div className="mt-4 me-4 mb-3  ">
                  <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-600">
                    <input className="peer border-none rounded-md pt-4 bg-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                      type="number"
                      id="dni"
                      placeholder="dni"
                      minLength={8}
                      maxLength={8}
                      ref={dniRef}
                      required
                    />
                    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 backdrop-blur-md rounded-xl  px-1 text-xs text-dark transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                      DNI <span className='text-red-400 text-xl'>*</span>
                    </span>
                  </label>
                 
                </div>
                <div className='flex flex-wrap md:inline-flex ' >
                  <div className="mt-4 me-4 mb-3  ">
                    <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-600">
                      <input className="peer border-none rounded-md pt-4 bg-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                        type="number"
                        id="celular"
                        placeholder="celular"
                        minLength={10}
                        maxLength={12}
                        ref={celularRef}
                        required
                      />
                      <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 backdrop-blur-md rounded-xl  px-1 text-xs text-dark transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                        Celular <span className='text-red-400 text-xl'>*</span>
                      </span>
                    </label>
                    
                  </div>
                </div>
              </div>
              <h4 className="text-white font-bold pt-8 text-md">Domicilio</h4>
              <div className='flex flex-wrap md:inline-flex ' >
                <div className="mt-4 me-4 mb-3  ">
                  <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-600">
                    <input className="peer border-none rounded-md pt-4 bg-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                      type="text"
                      id="calle"
                      placeholder="calle"
                      minLength={10}
                      maxLength={30}
                      ref={calleRef}
                      required
                    />
                    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 backdrop-blur-md rounded-xl  px-1 text-xs text-dark transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                      Calle <span className='text-red-400 text-xl'>*</span>
                    </span>
                  </label>
                  
                </div>
                <div className="mt-4 me-4 mb-3  ">
                  <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-600">
                    <input
                      className="peer border-none rounded-md pt-4 bg-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                      placeholder="altura"
                      type="text"
                      id="altura"
                      minLength={10}
                      maxLength={12}
                      ref={alturaRef}
                      required
                    />
                    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 backdrop-blur-md rounded-xl  px-1 text-xs text-dark transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                      Altura <span className='text-red-400 text-xl'>*</span>
                    </span>
                  </label>
                  
                </div>
                <div className="mt-4 me-4 mb-3  ">
                  <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-600">
                    <input className="peer border-none rounded-md pt-4 bg-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                      placeholder="piso"
                      type="text"
                      id="piso"
                      minLength={1}
                      maxLength={10}
                      ref={pisoRef}
                    />
                    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 backdrop-blur-md rounded-xl  px-1 text-xs text-dark transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                      Piso
                    </span>
                  </label>
                </div>
                <div className="mt-4 me-4 mb-3  ">
                  <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-600">
                    <input className="peer border-none rounded-md pt-4 bg-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                      placeholder="departamento"
                      type="text"
                      id="departamento"
                      minLength={1}
                      maxLength={20}
                      ref={departamentoRef}
                    />
                    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 backdrop-blur-md rounded-xl  px-1 text-xs text-dark transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                      Departamento
                    </span>
                  </label>
                </div>
                <div className="mt-4 me-4 mb-3  ">
                  <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-600">
                    <input className="peer border-none rounded-md pt-4 bg-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                      placeholder="provincia"
                      type="text"
                      id="provincia"
                      minLength={3}
                      maxLength={25}
                      ref={provinciaRef}
                      required
                    />
                    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 backdrop-blur-md rounded-xl  px-1 text-xs text-dark transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                      Provincia <span className='text-red-400 text-xl'>*</span>
                    </span>
                  </label>
                 
                </div>
                <div className="mt-4 me-4 mb-3  ">
                  <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-600">
                    <input className="peer border-none rounded-md pt-4 bg-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                      placeholder="localidad"
                      type="text"
                      id="localidad"
                      minLength={5}
                      maxLength={25}
                      ref={localidadRef}
                      required
                    />
                    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 backdrop-blur-md rounded-xl  px-1 text-xs text-dark transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                      Localidad <span className='text-red-400 text-xl'>*</span>
                    </span>
                  </label>
                  
                </div>
                <div className="mt-4 me-4 mb-3  ">
                  <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-600">
                    <input className="peer text-dark border-none rounded-md pt-4 bg-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                      placeholder="Codigopostal"
                      type="text"
                      id="Codigopostal"
                      minLength={5}
                      maxLength={25}
                      ref={codigoPostalRef}
                    />
                    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 backdrop-blur-md rounded-xl  px-1 text-xs text-dark transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
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
                    <label htmlFor="checkboxForm" className="relative flex items-center">

                      <input className="size-4 rounded border-gray-300"
                        type="checkbox"
                        id="checkboxForm"
                        ref={checkboxFormEnvioRef}
                        onChange={() => handleCheckboxChange(true)}
                        required
                      />
                      <span className="ml-2 text-sm">
                        Confirmo que los datos ingresados son correctos
                        <span className='text-red-400 text-xl'>*</span>
                      </span>
                    </label>

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
                    <label htmlFor="checkboxForm" className="relative flex items-center">
                      <input className="size-4 rounded border-gray-300"
                        type="checkbox"
                        id="checkboxForm"
                        ref={checkboxFormRetiroRef}
                        onChange={() => handleCheckboxChange(false)}
                        required
                      />
                      <span className="ml-2 text-sm">
                        Confirmo que los datos ingresados son correctos
                        <span className='text-red-400 text-xl'>*</span>
                      </span>
                    </label>
                  </summary>
                  <p className="mt-4 px-4 leading-relaxed text-white">
                    hola
                  </p>
                </details>
              </div>
              <div className="mt-4 flex justify-end border-t border-gray-200">
                <button type="submit" className="inline-flex items-center gap-2 rounded  mt-4 border-sky-500 bg-sky-600 px-8 py-3 text-dark hover:bg-sky-500 border-2 hover:border-sky-200  focus:outline-none focus:ring active:text-sky-500">
                  <span className="text-sm font-medium"> Siguiente </span>
                  <svg className="size-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </>
      ) : (<NoProducts />)}

    </>
  )
}
export default DataForm;
'use client'
import React from 'react';
import { useCart } from '@/app/modules/handlers/addCart';
import NoProducts from '../noProducts';
import { useForm } from '@/app/modules/handlers/form';

const DataForm = () => {
  const { showCart } = useCart();
  const {
    handleSubmit, emailRef, nombreRef, apellidoRef, dniRef, celularRef,
    calleRef, alturaRef, pisoRef, departamentoRef, localidadRef, provinciaRef,
    codigoPostalRef, checkboxFormEnvioRef, checkboxFormRetiroRef, handleCheckboxChange,
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
          <form method="POST" action="#" className='flex   justify-center mx-auto   md:py-20' onSubmit={handleSubmit}>
            <div className="mt-4  mx-auto w-96 lg:w-6/12 bg-sky-950 rounded-lg p-12 shadow-sm">
              <h2 className="text-white font-bold text-md">Datos personales</h2>
              <div className=" has-validation flex mt-4 me-4 mb-3  ">
                <label
                  htmlFor="email"
                  className='relative block rounded-md border  border-gray-200 shadow-sm focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-600'
                >
                  <input className="text-start rounded-md pt-4 bg-white peer border-none text-dark placeholder-transparent focus:outline-none focus:ring-0 focus:shadow-none"
                    type="email"
                    id="email"
                    placeholder='email'
                    minLength={14}
                    maxLength={40}
                    ref={emailRef}
                    autoComplete="email"
                    required
                  />
                  <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 backdrop-blur-md rounded-xl  px-1 text-xs text-dark transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    Email <span className='text-red-400 text-xl'>*</span>
                  </span>
                </label>
              </div>
              <div className='flex  flex-wrap md:inline-flex'>
                <div className="mt-4 me-4 mb-3  ">
                  <label htmlFor="nombre" className='relative block rounded-md border border-gray-200 shadow-sm focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-600'>
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
                  <label htmlFor="apellido" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-600">
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
                  <label htmlFor="dni" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-sky-600 focus-within:ring-1 focus-within:ring-sky-600">
                    <input className="form-control peer border-none rounded-md pt-4 bg-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                      type="text"
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
                        type="text"
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
                      minLength={5}
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
                      minLength={5}
                      maxLength={20}
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
                      maxLength={10}
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
                      maxLength={30}
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
                      minLength={3}
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
                      minLength={4}
                      maxLength={4}
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
                <div className="inline-flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                  <h2 className="font-medium">Envio a domicilio</h2>
                  <label htmlFor="checkboxForm" className="relative flex items-center">
                    <input className=" cursor-pointer size-4 rounded border-gray-300"
                      type="checkbox"
                      id="checkboxForm"
                      ref={checkboxFormEnvioRef}
                      onChange={() => handleCheckboxChange(true)}
                    />
                  </label>
                </div>
                <details className="  group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="inline-flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                    <h2 className="font-medium">Retiro en sucursal </h2>
                    <svg className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    <label htmlFor="checkboxForm" className="relative flex items-center">
                      <input className="  cursor-pointer size-4 rounded border-gray-300"
                        type="checkbox"
                        id="checkboxForm"
                        ref={checkboxFormRetiroRef}
                        onChange={() => handleCheckboxChange(false)}
                      />

                    </label>
                  </summary>
                  <div className="flex-wrap mt-2">
                    <ul>
                      <li className='text-white ms-1 font-light text-sm'>Bueno aires</li>
                      <li className='text-white ms-1 font-light text-sm'>La plata</li>
                      <li className='text-white ms-1 font-light text-sm'>avenida siempre viva</li>
                      <li className='text-white ms-1 font-light text-sm'>742</li>
                    </ul>
                  </div>
                </details>
              </div>
              <span className="ml-2  text-white font-bold text-sm">
                <span className='text-red-500 text-md'>Atencion: </span>
                Si no marca ninguna casilla se tomara como retiro en sucursal
              </span>
              <label htmlFor="checkboxForm" className=" mt-5 relative flex items-center">
                <input className=" cursor-pointer size-4 rounded border-gray-300"
                  type="checkbox"
                  id="checkboxForm"
                  required
                />
                <span className="ml-2 text-sm text-white font-bold">
                  Confirmo que los datos ingresados son correctos
                  <span className='text-red-400 text-xl'>*</span>
                </span>
              </label>
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
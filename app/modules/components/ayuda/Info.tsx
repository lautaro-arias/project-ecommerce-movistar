import React from 'react';
import ayudaImg2 from '../../../../public/assets/ayudaImg2.jpg'

import Image from 'next/image';
const Info = () => {
  return (
    <>
      <section className="text-gray-600 body-font py-16 mt-24 bg-white">
        <div className="container  mx-auto flex mt-6 border border-gray-200 rounded-md shadow-2xl md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image width={720} height={600} className="object-cover object-center rounded-l-md " alt="hero" src={ayudaImg2} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              ¡Es el momento de cambiarte a Movistar!
            </h1>
            <p className="mb-8 leading-relaxed">Con Movistar, estar conectado nunca ha sido tan fácil y conveniente. ¡Te ofrecemos una línea móvil que se adapta a tus necesidades y te mantiene siempre en contacto con lo que más importa!</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-sky-800 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded text-lg">Quiero !</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Info;
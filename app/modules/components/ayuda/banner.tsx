import React from 'react';
import Categorias from './categorias';

const Banner = () => {
  return (
    <>
      <section className="w-full h-96 bg-sky-950 dark:bg-wickeddark">
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
          <div className="flex w-full mx-auto text-left">
            <div className="relative inline-flex items-center mx-auto align-middle">
              <div className="pb-12 text-center">
                <h1 className="max-w-5xl text-lg  leading-none tracking-tighter text-white md:text-3xl lg:text-5xl lg:max-w-7xl">
                  Consulta y soporte sobre nuestros productos y servicios
                </h1>
                <form action="" method="post" id="revue-form" name="revue-form" target="_blank" className=" inline-flex p-2 mt-14 transition duration-500 ease-in-out transform border2 bg-gray-50 md:mx-auto rounded-xl  md:min-w-md md:max-w-lg sm:flex">
                  <div className="flex-1 min-w-0  revue-form-group">
                    <label htmlFor="member_email" className="sr-only">Email address</label>
                    <input id="cta-email" type="email" className="me-2  w-full px-5 py-3   md:px-5 md:py-3 text-base placeholder:text-xs sm:placeholder:text-lg  sm:placeholder-gray-400 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md text-neutral-600 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="En que podemos ayudarte hoy?  " />
                  </div>
                  <div className=" ms-2  md:mt-0   revue-form-actions">
                    <button type="submit" value="Subscribe" name="member[subscribe]" id="member_submit" className=" rounded-full btn text-base font-medium text-white bg-blue-600 border border-transparent  shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-4">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Categorias />
    </>
  )
}
export default Banner;
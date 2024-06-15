import React from 'react';
import Image from 'next/image';
import hogar2 from '@/public/assets/hogar2.jpg';

const Card = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className=" mx-auto animate__animated animate__fadeIn  animate__delay-800ms flex px-5 py-6 items-center justify-center ">
          <Image width={750} height={400} className="lg:w-2/6  md:w-full w-full mb-10 object-cover object-center rounded" alt="hero" src={hogar2} />
        </div>
      </section>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-col justify-center text-center w-full mb-20">
            <h1 className="sm:text-5xl text-3xl font-medium title-font mb-4 text-gray-900">Tu hogar conectado</h1>
            <p className="lg:w-2/3 mx-auto text-lg leading-relaxed  text-gray-500">Descubrí como mejorar y proteger tu conexion</p>
            <div className="flex mx-auto justify-center border-2 border-sky-300 rounded overflow-hidden mt-6">
              <h1 className="py-1 px-4 bg-sky-500 text-white text-lg">Precios por mes</h1>
            </div>
          </div>
          <div className="flex flex-wrap justify-center mx-auto -m-4">
            <div className=" animate__animated animate__fadeIn  animate__delay-1s p-4 flex-shrink-0 relative   overflow-hidden  xl:w-1/4 md:w-1/2 w-full">
              <div className=" transition-transform duration-300 transform scale-90 hover:scale-100 shadow-xl h-full p-6 rounded-lg border-2 cursor-pointer hover:border-sky-500 border-gray-300 flex flex-col relative overflow-hidden group">
                <h2 className="inline-flex text-md tracking-widest title-font mb-4 font-medium">
                  <svg className='mb-2 me-2' height="25" viewBox="8.64 11.53 369.04 272.73" width="25" xmlns="http://www.w3.org/2000/svg"><path d="m79.8 44.1c-16.95.27-48.24 8.63-62.53 67-6.23 25.43-8.63 51.94-3.3 83.49 4.91 29.1 13.62 54.22 19.49 68.06 2.02 4.77 5.16 9.74 7.58 12.81 6.96 8.8 18.56 8.24 23.43 5.84 5.31-2.61 11.41-8.93 9.2-23.34-1.07-6.96-4.15-17.15-5.88-22.81-5.32-17.37-12.4-38.34-13.02-53.27-.83-19.97 7.05-22.59 12.28-23.74 8.8-1.93 16.17 7.72 23.18 19.83 8.36 14.45 22.69 40.04 34.38 59.59 10.55 17.65 30.02 36.55 61.29 35.25 31.88-1.32 55.38-13.48 67.49-51.78 9.06-28.65 15.23-50.06 25.17-71.98 11.43-25.21 26.67-38.71 39.5-34.58 11.92 3.82 14.89 15.47 15.03 32.59.13 15.14-1.62 31.84-2.99 44.1-.5 4.45-1.39 13.4-1.02 18.38.72 9.77 4.95 19.53 15.95 21.09 11.72 1.66 21.13-7.7 24.88-19.03 1.48-4.46 2.75-11.3 3.43-16.14 3.44-24.47 4.34-40.92 2.79-65.96-1.82-29.28-7.55-55.98-17.54-79.09-9.56-22.1-24.92-36.26-44.62-37.51-21.82-1.37-46.84 13.1-59.97 41.17-12.1 25.87-21.78 52.44-27.65 65.99-5.96 13.75-14.71 22.22-28.17 23.64-16.46 1.73-30.63-10.21-41.02-27.24-9.05-14.85-27-43.11-36.6-52.61-9.01-8.93-19.31-20.09-40.76-19.75z" fill="#00a9e0" /></svg>
                  Movistar Aplicacion Wifi
                </h2>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$3.700</span>
                  <span className="text-lg ml-1 font-normal text-gray-500">x mes</span>
                </h1>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-sky-600 md:bg-gray-400 md:group-hover:bg-sky-600  text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Covertura en todo tu hogar
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-sky-600 md:bg-gray-400 md:group-hover:bg-sky-600  text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Conexion desde donde quieras
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-sky-600 md:bg-gray-400 md:group-hover:bg-sky-600  text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Conexion unica
                </p>
                <button className="flex items-center mt-auto text-white bg-sky-400 md:bg-sky-200 md:group-hover:bg-sky-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-sky-400 rounded">Quiero saber mas
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p className="text-md text-sky-700 mt-3">Compra telefonica 0800-333-7733</p>
              </div>
            </div>
            <div className="  animate__animated animate__fadeIn  animate__delay-2s flex-shrink-0 relative   overflow-hidden p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className=" transition-transform duration-300 transform scale-90 hover:scale-100 shadow-2xl cursor-pointer h-full p-6 rounded-lg border-2 hover:border-sky-500 border-gray-300 flex flex-col relative overflow-hidden group">
                <span className="bg-sky-400 md:bg-gray-100 md:group-hover:bg-sky-500 text-gray-100 md:group-hover:text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                <h2 className="inline-flex text-md tracking-widest title-font mb-4 font-medium">
                  <svg className='pb-2' xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#2DC6FF"><path d="M227.55-166.15q-25.8 0-43.6-17.8t-17.8-43.64v-109.13q0-25.83 17.8-43.63 17.8-17.8 43.74-17.8h394.66V-560h36.92v161.85h72.97q26.01 0 43.81 17.8t17.8 43.63v109.13q0 25.84-17.8 43.64t-43.6 17.8h-504.9Zm.14-36.93h504.62q10.77 0 17.69-6.92 6.92-6.92 6.92-17.69v-108.93q0-10.76-6.92-17.69-6.92-6.92-17.69-6.92H227.69q-10.77 0-17.69 6.92-6.92 6.93-6.92 17.69v108.93q0 10.77 6.92 17.69 6.92 6.92 17.69 6.92Zm54.46-49.23q12.73 0 21.29-8.56 8.56-8.55 8.56-21.28t-8.56-21.29q-8.56-8.56-21.29-8.56-12.73 0-21.28 8.56-8.56 8.56-8.56 21.29 0 12.73 8.56 21.28 8.55 8.56 21.28 8.56Zm138.77 0q12.73 0 21.29-8.56 8.56-8.55 8.56-21.28t-8.56-21.29q-8.56-8.56-21.29-8.56-12.73 0-21.29 8.56-8.55 8.56-8.55 21.29 0 12.73 8.55 21.28 8.56 8.56 21.29 8.56Zm138.77 0q12.73 0 21.29-8.56 8.56-8.55 8.56-21.28t-8.56-21.29q-8.56-8.56-21.29-8.56-12.73 0-21.29 8.56-8.55 8.56-8.55 21.29 0 12.73 8.55 21.28 8.56 8.56 21.29 8.56Zm-.57-375.11-26.2-25.81q24.74-23.39 50.95-34.46 26.2-11.08 56.65-11.08 30.6 0 56.78 11.08 26.18 11.07 51.51 34.46l-26.19 25.81q-16.47-16.46-36.79-25.45-20.33-8.98-45.21-8.98-24.89 0-44.97 8.98-20.07 8.99-36.53 25.45Zm-96.1-95.81-26.06-26.35q39.85-39.84 91.46-62.05 51.62-22.22 112.2-22.22 60.57 0 112.19 22.22 51.61 22.21 91.84 62.05l-26.34 26.35q-31.79-32.02-76.77-52.86-44.98-20.83-100.83-20.83-55.86 0-100.87 20.83-45.01 20.84-76.82 52.86ZM203.08-203.08v-158.15 158.15Z" /></svg>
                  Dr.Banda Ancha
                </h2>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$4.250</span>
                  <span className="text-lg ml-1 font-normal text-gray-500">x mes</span>
                </h1>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-sky-600 md:bg-gray-400 md:group-hover:bg-sky-600   text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Asistencia tecnica
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-sky-600 md:bg-gray-400 md:group-hover:bg-sky-600   text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Covertura exclusiva
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-sky-600 md:bg-gray-400 md:group-hover:bg-sky-600   text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Soporte Pc,notebook
                </p>
                <p className="flex items-center text-gray-600 mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-sky-600 md:bg-gray-400 md:group-hover:bg-sky-600   text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Soporte smartphone,smart Tv
                </p>
                <button className="flex items-center mt-auto text-white bg-sky-400 md:bg-sky-200 md:group-hover:bg-sky-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-sky-400 rounded">Quiero saber mas
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p className="text-md text-sky-700 mt-3">Compra telefonica 0800-333-7733</p>
              </div>
            </div>
            <div className=" animate__animated animate__fadeIn  animate__delay-3s flex-shrink-0 relative   overflow-hidden p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="transition-transform duration-300 transform scale-90 hover:scale-100 shadow-xl hover:border-sky-400 cursor-pointer h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden group">
                <h2 className="inline-flex text-md tracking-widest title-font mb-4 font-medium">
                  <svg className='pb-2' xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#2DC6FF"><path d="M650.56-182.46q-14.83 0-25-10.06-10.18-10.06-10.18-24.9v-109.11q0-14.27 10.06-24.33 10.06-10.06 24.91-10.06h5.69v-40.62q0-29.4 20.06-49.16 20.05-19.76 49.28-19.76 29.24 0 49.49 19.76 20.25 19.76 20.25 49.16v40.62h5.69q14.03 0 23.53 9.94 9.51 9.95 9.51 24.63v109.11q0 14.43-9.94 24.61-9.93 10.17-24.6 10.17H650.56Zm35.63-178.46h78.77v-40.73q0-16.89-11.38-28.08-11.39-11.19-28.2-11.19-16.8 0-28 11.11-11.19 11.11-11.19 28.27v40.62ZM480-183.69 64.92-598.77q86.16-76.84 192.89-116.27Q364.54-754.46 480-754.46t222.19 39.42q106.73 39.43 192.89 116.27l-86.16 86.04q-6.33-6.26-13.16-12.78-6.84-6.52-13.3-13.3l57.85-57.84q-78.5-59.5-170.21-90.2-91.72-30.69-190.21-30.69-97.5 0-189.71 30.69-92.22 30.7-170.49 90.2L480-236.46l59.73-59.73q6.39 6.78 13.16 13.55 6.77 6.76 13.03 13.02L480-183.69ZM480-477Z" /></svg>
                  Seguridad Total Movistar
                </h2>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$4.900</span>
                  <span className="text-lg ml-1 font-normal text-gray-500">x mes</span>
                </h1>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-sky-600 md:bg-gray-400 md:group-hover:bg-sky-600 text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Covertura en todo tu hogar
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-sky-600 md:bg-gray-400 md:group-hover:bg-sky-600  text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Covertura exclusiva
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-sky-600 md:bg-gray-400 md:group-hover:bg-sky-600  text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Soporte en todos tus dispositivos
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-sky-600 md:bg-gray-400 md:group-hover:bg-sky-600  text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Seguridad con el mejor antivirus
                </p>
                <p className="flex items-center text-gray-600 mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-sky-600 md:bg-gray-400 md:group-hover:bg-sky-600  text-white rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Soporte tecnico las 24hs
                </p>
                <button className="flex items-center mt-auto text-white bg-sky-400  md:bg-sky-200 md:group-hover:bg-sky-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-sky-400 rounded">Quiero saber mas
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p className="text-md text-sky-700 mt-3">Compra telefonica 0800-333-7733</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Card;
import React from 'react'

const DataForm = () => {
  return (
    <section className='flex  justify-center mx-auto   py-40'>
      <div className="mt-4  mx-auto w-96 lg:w-6/12 bg-sky-950 rounded-lg p-12 shadow-sm">
        <h2 className="text-white font-bold text-lg">Datos personales</h2>

        <div className="mt-4 me-4 mb-3 lg:w-96 ">
          <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
            <input type="text" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0" placeholder="Username" />
            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-sky-950 p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Email
            </span>
          </label>
        </div>
        <div className='flex flex-wrap md:inline-flex ' >
          <div className="mt-4 me-4 mb-3  ">
            <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
              <input type="text" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0" placeholder="Username" />
              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-sky-950 p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Nombre
              </span>
            </label>
          </div>
          <div className="mt-4 me-4 mb-3  ">
            <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
              <input type="text" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0" placeholder="Username" />
              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-sky-950 p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Apellido
              </span>
            </label>
          </div>
        </div>
        <div className='flex flex-wrap md:inline-flex ' >
          <div className="mt-4 me-4 mb-3  ">
            <label htmlFor="Username" className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
              <input type="text" id="Username" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0" placeholder="Username" />
              <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-sky-950 p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                DNI
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
                Celular
              </span>
            </label>
          </div>
          <div className="mt-4 me-4 mb-3  ">
              <select id="Username" className=" w-24 me-2 rounded-md peer border-none bg-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0" >
                <option className='text-dark' value="">Dia</option>
                <option value="JM">John Mayer</option>
              </select>
              <select id="Username" className=" w-24 me-2 rounded-md peer border-none bg-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0" >
                <option className='text-dark' value="">Mes</option>
                <option value="JM">John Mayer</option>
              </select>
              <select id="Username" className=" w-24 me-2  rounded-md peer border-none bg-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0" >
                <option className='text-dark' value="">Año</option>
                <option value="JM">John Mayer</option>
              </select>
          </div>
        </div>

        <h4 className="text-white font-bold text-sm">Domicilio</h4>









        <div className="mt-4 flex justify-end border-t border-gray-200">
          <button className="mt-2 bg-white text-black rounded-md px-4 py-1 hover:bg-blue-500 hover:text-white transition-all duration-200" type="submit">Submit</button>
        </div>
      </div>
    </section>
  )
}

export default DataForm
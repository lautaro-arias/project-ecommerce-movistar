import React from 'react'
import ArrayAyuda from '../../utils/arrayAyuda'
import Gestiones from './gestiones'

const Categorias = () => {
    const { categorias } = ArrayAyuda()
    return (
        <>
        <section className="bg-white text-dark">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold sm:text-3xl">Todas los temas por categorias</h2>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {categorias.map((categoria,index) => (
                        <div className="block hover:shadow-cyan-100 hover:shadow-2xl  rounded-xl border border-gray-300 p-8  transition hover:border-cyan-600 "
                            key={index}
                        >
                        <span className='inline-flex'> 
                            {categoria.svg}
                            <h2 className=" mt-2 mb-4 ml-4 text-xl font-bold text-dark">{ categoria.name }</h2>
                        </span>
                                {categoria.items.map((item,index) =>(  
                                    <div className='cursor-pointer text' key={index}>
                                            <span className='inline-flex hover:text-cyan-600'>  
                                                <svg xmlns="http://www.w3.org/2000/svg" className='mb-2 mt-2 hover:fill-cyan-600' height="35px" viewBox="0 -960 960 960" width="30px" fill="#666666"><path d="M480-354.01 606.71-480 480-606.71 458.01-584l87.43 87.42h-201.3v32.44h201.3L458.01-376 480-354.01Zm.23 231.19q-73.96 0-139.04-28.22t-113.58-76.69q-48.51-48.47-76.65-113.32-28.14-64.85-28.14-138.72 0-74.11 28.22-139.45 28.22-65.33 76.69-113.67t113.32-76.31q64.85-27.98 138.72-27.98 74.11 0 139.45 28.13 65.34 28.13 113.68 76.36 48.33 48.22 76.3 113.33 27.98 65.11 27.98 139.13 0 73.96-28.05 139.04-28.06 65.08-76.36 113.58-48.3 48.51-113.41 76.65-65.11 28.14-139.13 28.14Zm-.28-32.44q135.24 0 230.02-94.8 94.77-94.81 94.77-229.89 0-135.24-94.72-230.02-94.73-94.77-229.97-94.77-135.09 0-229.94 94.72-94.85 94.73-94.85 229.97 0 135.09 94.8 229.94 94.81 94.85 229.89 94.85ZM480-480Z"/></svg>
                                                <a className='mt-3 font-light'>{ item.item }</a>
                                            </span>  
                                    </div>
                                ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <Gestiones/>
        </>
    )
}

export default Categorias
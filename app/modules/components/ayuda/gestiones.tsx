import React from 'react'
import ArrayAyuda from '../../utils/arrayAyuda'
import Info from './Info'

const Gestiones = () => {
    const { gestiones } = ArrayAyuda()
    return (
        <>
        <section className=" text-dark ">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold sm:text-3xl">Tus gestiones en linea</h2>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {gestiones.map((gestion, index) => (
                        <article key={index} className="rounded-xl border-2 border-gray-100 bg-white">
                            <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-4">
                                <a href="#" className="block shrink-0">
                                    {gestion.svg}
                                </a>
                                <div>
                                    <h3 className="font-medium sm:text-sm mb-3">
                                        <a href="#" className="hover:underline"> {gestion.name}</a>
                                    </h3>

                                    <p className="line-clamp-2 text-sm text-gray-700">
                                        {gestion.item}
                                    </p>
                                </div>

                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
        <Info/>
        </>
    )
}

export default Gestiones
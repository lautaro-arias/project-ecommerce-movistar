import React from 'react'
import { useCart } from '../../handlers/addCart';
import celular4 from '../../../../public/assets/celular8.webp'
import Image from 'next/image'

const Caracteristicas = () => {
    const { selectedProductsArray } = useCart();
    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container bg-white px-5 py-8 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            {selectedProductsArray.map((product, index) => (
                                <>
                                    <h2 key={index} className="text-sm title-font text-gray-500 tracking-widest"></h2>
                                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{product.title}</h1>
                                    <p>{product.description}</p>
                                    <div className="flex mb-4">
                                        <a className="flex-grow text-sky-500 border-b-2 border-sky-500 py-2 text-lg px-1">Caracteristicas</a>
                                    </div>
                                    <div className="flex py-2">
                                        <span className="text-gray-500">Marca</span>
                                        <span className="ml-auto text-gray-900">{product.brand}</span>
                                    </div>
                                    <div className="flex border-t border-b  border-gray-200 py-2">
                                        <span className="text-gray-500">Categoria</span>
                                        <span className="ml-auto text-gray-900">{product.category}</span>
                                    </div>
                                    <div className="flex border-t border-gray-200 py-2">
                                        <span className="text-gray-500">Ancho</span>
                                        <span className="ml-auto text-gray-900">{product.dimensions.width}</span>
                                    </div>
                                    <div className="flex border-t border-b  border-gray-200 py-2">
                                        <span className="text-gray-500">Largo</span>
                                        <span className="ml-auto text-gray-900">{product.dimensions.height}</span>
                                    </div>
                                    <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                                        <span className="text-gray-500">Garantia</span>
                                        <span className="ml-auto text-gray-900">{product.warrantyInformation}</span>
                                    </div>
                                </>
                            ))}
                        </div>
                        <Image alt="ecommerce" className="h-[500px] md:w-[500px] md:h-[500px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px]  object-cover object-center rounded" src={celular4} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Caracteristicas
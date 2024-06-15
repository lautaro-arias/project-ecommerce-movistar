import React from 'react'
import mercadoPago from '@/public/assets/mercadoPago.png'
import Image from 'next/image'

const PagoMercado = () => {
    return (
        <div className="w-full bg-white text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
            <div className="col-span-2 text-lg font-bold capitalize rounded-md">
                <Image src={mercadoPago} className='h-20' width={236} height={96} alt="mercado" />
            </div>
            <div className="col-span-6  text-sm rounded-md">
                <p>
                A continuacion te llevaremos a Mercado Pago <br />
                para que puedas elejir como pagar tu compra<br />
                podes hacerlo con dinero en la cuenta ,con tarjeta
                </p>
             </div>
            <div className="col-span-1">
                <button className="rounded-md bg-sky-400 hover:bg-slate-600 hover:text-slate-200 duration-300 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className=" text-white feather feather-external-link">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default PagoMercado
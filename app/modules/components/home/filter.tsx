import React from 'react'
import { useData } from '../../handlers/fechData';

const Filter = () => {
    const { handleClickFilter, active } = useData();
    return (
        <div className=" mt-4 space-y-4  md:hidden">
            <details className="group [&_summary::-webkit-details-marker]:hidden" >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                    <h2 className="font-medium">Filtrar por marca</h2>
                    <svg className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </summary>
                <div className="mt-4 mx-auto w-full px-4 leading-relaxed text-gray-700">
                    <ul className=" p-2 shadow grid grid-cols-2 w-64 bg-white rounded-box ">
                        <li> <a onClick={() => handleClickFilter('Todos')} className={`m-2 btn ${active === 'Todos' ? 'btn-active bg-white border-gray-200 shadow-md text-sky-600' : ''}  bg-gray-100 border-gray-200 m-2 ml-4 font-light hover:text-cyan-600  `} >
                            Todos</a>
                        </li>
                        <li> <a onClick={() => handleClickFilter('Apple')} className={`m-2 btn ${active === 'Apple' ? 'btn-active bg-white border-gray-200 shadow-md text-sky-600' : ''}  bg-gray-100 border-gray-200 m-2 ml-4 font-light hover:text-cyan-600  `} >
                            Apple</a>
                        </li>
                        <li> <a onClick={() => handleClickFilter('Samsung')} className={`m-2 btn ${active === 'Samsung' ? 'btn-active bg-white border-gray-200 shadow-md text-sky-600' : ''}  m-2  ml-4 font-light hover:text-cyan-600  `} >
                            Samsung</a>
                        </li>
                        <li> <a onClick={() => handleClickFilter('Realme')} className={`m-2 btn ${active === 'Realme' ? 'btn-active bg-white border-gray-200  text-sky-600' : ''}  bg-gray-100 border-gray-200 m-2 ml-4 font-light hover:text-cyan-600  `} >
                            Realme</a>
                        </li>
                        <li> <a onClick={() => handleClickFilter('Vivo')} className={`m-2 btn ${active === 'Vivo' ? 'btn-active bg-white border-gray-200 shadow-md text-sky-600' : ''}  bg-gray-100 border-gray-200 m-2  ml-4 font-light hover:text-cyan-600  `} >
                            Vivo</a>
                        </li>
                        <li> <a onClick={() => handleClickFilter('Oppo')} className={`m-2 btn ${active === 'Oppo' ? 'btn-active bg-white border-gray-200 shadow-md text-sky-600' : ''}   bg-gray-100 border-gray-200 ml-4 font-light hover:text-cyan-600  `} >
                            Oppo</a>
                        </li>
                    </ul>
                </div>
            </details>
        </div>
    )
}
export default Filter;
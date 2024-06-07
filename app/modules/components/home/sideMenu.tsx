import React from 'react';
import ArraySideMenu from '../../utils/arraySideMenu';
import {NoShow} from './noShow';

const SideMenu = () => {
    const { itemSideMenu } = ArraySideMenu();
    return (
        <>
            <div className="  mt-12 2xl:ps-80 flex overflow-hidden bg-gray-100 rounded-lg">
                <div className="hidden md:flex md:flex-shrink-0">
                    <div className="flex flex-col w-64">
                        <div className=" pb-2 flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r border-gray-50">
                            <div className="flex flex-col items-center flex-shrink-0 px-4">
                                <a className="px-8 text-left focus:outline-none" href="/groups/sidebar/">
                                    <h2 className="block p-2 text-xl font-medium tracking-tighter text-gray-900 transition duration-500 ease-in-out transform cursor-pointer hover:text-gray-900">Celulares</h2>
                                </a>
                                <button className="hidden rounded-lg focus:outline-none focus:shadow-outline">
                                    <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="flex flex-col flex-grow px-4 mt-5">
                                <nav className="flex-1 space-y-1 bg-white">
                                    <ul>
                                        {itemSideMenu.map((item, index) => (
                                            <li key={index}>
                                                <a className="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-gray-900 transition duration-500 ease-in-out transform rounded-lg bg-gray-50 focus:shadow-outline" >
                                                    {item.svg}
                                                    <span className="ml-4 text-lg"> {item.title}</span>
                                                </a>
                                                    {item.options.map((item, index) => (
                                                        <a className='m-2 btn  btn-ghost bg-slate-200  ml-4 font-light hover:text-cyan-600' key={index}>
                                                            {item.name}
                                                        </a>
                                                    ))}
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>

                        </div>
                    </div>
                </div>
                <NoShow/>
                </div>
        </>
    )
}
export default SideMenu;
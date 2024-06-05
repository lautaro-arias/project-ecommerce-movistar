'use client'
import React from 'react';
import ArrayNav from '../../utils/arrayLinks';
import Carousels from './carousels';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Navlink from './navLink';

const Navbar = () => {
    const { itemNav } = ArrayNav()
    const pathname = usePathname()
    return (
        <>
            <div className="navbar  justify-center bg-white border-b border-gray-200 shadow-lg">
                <div className="navbar-start md:ms-20 xl:ps-80  ">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className=" btn btn-ghost  md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#666666"><path d="M162.82-271.49v-32.43h634.36v32.43H162.82Zm0-192.43v-32.44h634.36v32.44H162.82Zm0-192.44v-32.44h634.36v32.44H162.82Z" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {itemNav.map((item, index) => (
                                <li key={index} className='  text-lg mt-4 text-gray-600 font-light border-b border-cyan-500 cursor-pointer hover:border-b ms-8 me-8 hover:border-cyan-400 hover:text-cyan-500 '>{item.name}</li>

                            ))}
                        </ul>
                    </div>
                    <a className="hidden md:block ">
                        <svg height="50" viewBox="8.64 11.53 369.04 272.73" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m79.8 44.1c-16.95.27-48.24 8.63-62.53 67-6.23 25.43-8.63 51.94-3.3 83.49 4.91 29.1 13.62 54.22 19.49 68.06 2.02 4.77 5.16 9.74 7.58 12.81 6.96 8.8 18.56 8.24 23.43 5.84 5.31-2.61 11.41-8.93 9.2-23.34-1.07-6.96-4.15-17.15-5.88-22.81-5.32-17.37-12.4-38.34-13.02-53.27-.83-19.97 7.05-22.59 12.28-23.74 8.8-1.93 16.17 7.72 23.18 19.83 8.36 14.45 22.69 40.04 34.38 59.59 10.55 17.65 30.02 36.55 61.29 35.25 31.88-1.32 55.38-13.48 67.49-51.78 9.06-28.65 15.23-50.06 25.17-71.98 11.43-25.21 26.67-38.71 39.5-34.58 11.92 3.82 14.89 15.47 15.03 32.59.13 15.14-1.62 31.84-2.99 44.1-.5 4.45-1.39 13.4-1.02 18.38.72 9.77 4.95 19.53 15.95 21.09 11.72 1.66 21.13-7.7 24.88-19.03 1.48-4.46 2.75-11.3 3.43-16.14 3.44-24.47 4.34-40.92 2.79-65.96-1.82-29.28-7.55-55.98-17.54-79.09-9.56-22.1-24.92-36.26-44.62-37.51-21.82-1.37-46.84 13.1-59.97 41.17-12.1 25.87-21.78 52.44-27.65 65.99-5.96 13.75-14.71 22.22-28.17 23.64-16.46 1.73-30.63-10.21-41.02-27.24-9.05-14.85-27-43.11-36.6-52.61-9.01-8.93-19.31-20.09-40.76-19.75z" fill="#00a9e0" /></svg>
                    </a>
                </div>
                <a className=" md:hidden">
                    <svg height="50" viewBox="8.64 11.53 369.04 272.73" width="50" xmlns="http://www.w3.org/2000/svg"><path d="m79.8 44.1c-16.95.27-48.24 8.63-62.53 67-6.23 25.43-8.63 51.94-3.3 83.49 4.91 29.1 13.62 54.22 19.49 68.06 2.02 4.77 5.16 9.74 7.58 12.81 6.96 8.8 18.56 8.24 23.43 5.84 5.31-2.61 11.41-8.93 9.2-23.34-1.07-6.96-4.15-17.15-5.88-22.81-5.32-17.37-12.4-38.34-13.02-53.27-.83-19.97 7.05-22.59 12.28-23.74 8.8-1.93 16.17 7.72 23.18 19.83 8.36 14.45 22.69 40.04 34.38 59.59 10.55 17.65 30.02 36.55 61.29 35.25 31.88-1.32 55.38-13.48 67.49-51.78 9.06-28.65 15.23-50.06 25.17-71.98 11.43-25.21 26.67-38.71 39.5-34.58 11.92 3.82 14.89 15.47 15.03 32.59.13 15.14-1.62 31.84-2.99 44.1-.5 4.45-1.39 13.4-1.02 18.38.72 9.77 4.95 19.53 15.95 21.09 11.72 1.66 21.13-7.7 24.88-19.03 1.48-4.46 2.75-11.3 3.43-16.14 3.44-24.47 4.34-40.92 2.79-65.96-1.82-29.28-7.55-55.98-17.54-79.09-9.56-22.1-24.92-36.26-44.62-37.51-21.82-1.37-46.84 13.1-59.97 41.17-12.1 25.87-21.78 52.44-27.65 65.99-5.96 13.75-14.71 22.22-28.17 23.64-16.46 1.73-30.63-10.21-41.02-27.24-9.05-14.85-27-43.11-36.6-52.61-9.01-8.93-19.31-20.09-40.76-19.75z" fill="#00a9e0" /></svg>
                </a>
                <div className=" navbar-center hidden md:flex">
                    <ul className="menu  menu-horizontal  px-1">
                        {itemNav.map((item, index) => (
                            <Link key={index} className='text-lg text-gray-600 font-light border-b border-white cursor-pointer hover:border-b ms-8 me-8 hover:border-cyan-400 hover:text-cyan-500 mt-2' href={item.url}>{item.name}</Link>
                        ))}
                    </ul>
                </div>
                <div className="navbar-end me-2  md:me-20 xl:pe-80 ">
                    <div className="indicator cursor-pointer">
                        <Navlink/>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Navbar;
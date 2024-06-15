'use client'
import { usePathname } from 'next/navigation'
import ArrayNav from '@/app/modules/utils/arrayLinks'
import Link from 'next/link'
import React from 'react'
import { useCart } from '@/app/modules/handlers/addCart'

export const NavLink = () => {
    const { handleClickRemoveProductNav } = useCart()
    const { itemNav } = ArrayNav()
    const pathname = usePathname()
    //para que me muestre los mismos iconos pero un un handle en cada uno//
    //para que si se sale del cart se elimina el producto//
    return (
        <>
            {pathname !== '/cart' ?

                <div className=" navbar-center hidden md:flex">
                    <ul className="menu  menu-horizontal  px-1">
                        {itemNav.map((item, index) => (
                            <Link key={index} className={` ${pathname === item.url ? ' me-8 ms-8 mt-2 text-lg text-cyan-500 border-b border-cyan-400' : 'text-lg text-gray-600 font-light border-b border-white cursor-pointer hover:border-b ms-8 me-8 hover:border-cyan-400 hover:text-cyan-500 mt-2'} `}
                                href={item.url}>{item.name}</Link>
                        ))}
                    </ul>
                </div>

                : <div className=" navbar-center hidden md:flex">
                    <ul className="menu  menu-horizontal  px-1">
                        {itemNav.map((item, index) => (
                            <a onClick={() => { handleClickRemoveProductNav(0) }} href={item.url} key={index} className={` ${pathname === item.url ? ' me-8 ms-8 mt-2 text-lg text-cyan-500 border-b border-cyan-400' : 'text-lg text-gray-600 font-light border-b border-white cursor-pointer hover:border-b ms-8 me-8 hover:border-cyan-400 hover:text-cyan-500 mt-2'} `}>
                                {item.name}
                            </a>
                        ))}
                    </ul>
                </div>
            }
        </>
    )
}
export const NavLinkMovil = () => {
    const { handleClickRemoveProductNav } = useCart()
    const { itemNav } = ArrayNav()
    const pathname = usePathname()
    return (
        <>
            {pathname !== '/cart' ?
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {itemNav.map((item, index) => (
                        <Link href={item.url} key={index} className=' text-lg mt-4 text-gray-600 font-light border-b border-cyan-500 cursor-pointer hover:border-b ms-8 me-8 hover:border-cyan-400 hover:text-cyan-500'>
                                {item.name}
                        </Link>

                    ))}
                </ul>
                : <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {itemNav.map((item, index) => (
                        <a onClick={() => { handleClickRemoveProductNav(0) }} href={item.url} key={index} className={` ${pathname === item.url ? ' me-8 ms-8 mt-2 text-lg text-cyan-500 border-b border-cyan-400' : 'text-lg text-gray-600 font-light border-b border-white cursor-pointer hover:border-b ms-8 me-8 hover:border-cyan-400 hover:text-cyan-500 mt-2'} `}>
                        {item.name}
                    </a>

                    ))}
                </ul>
            }
        </>
    )
}

export const NavLinkCart = () => {
    const { cartItemCount } = useCart();
    const pathname = usePathname()

    return (
        <div className="indicator cursor-pointer">
            <Link href='/cart' >
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#666666"><path d="M273.2-121.77q-24.92 0-42.16-17.41-17.23-17.42-17.23-42.35t17.41-42.16q17.42-17.23 42.35-17.23 24.92 0 42.16 17.41 17.23 17.42 17.23 42.34 0 24.93-17.41 42.17-17.42 17.23-42.35 17.23Zm412.43 0q-24.93 0-42.17-17.41-17.23-17.42-17.23-42.35t17.42-42.16q17.41-17.23 42.34-17.23 24.93 0 42.16 17.41 17.23 17.42 17.23 42.34 0 24.93-17.41 42.17-17.41 17.23-42.34 17.23Zm-436.4-583.42 88.39 204.31h289.65q3.46 0 6.15-1.74 2.7-1.73 4.62-4.8l79.31-187q2.3-4.23.38-7.5-1.92-3.27-6.54-3.27H249.23Zm-20.05-47.96h524.47q15.35 0 22.02 10.91 6.67 10.92 1.48 23.01l-94.29 228.35q-6.67 16.96-21.73 27.46t-33.52 10.5H318.62l-45.12 78.23q-3.08 4.61-.19 10 2.88 5.38 8.65 5.38h463.42v47.96H285.53q-37.07 0-54.17-29.72-17.09-29.73 1.1-59.62l55.08-93.63-130.83-305.26H76.08v-47.96h112.8l40.3 94.39Zm108.44 252.27h296.96-296.96Z" /></svg>
            </Link>
            <span className={` ${pathname === '/cart' ? 'bg-green-400 badge badge-sm indicator-item me-1  text-white' : ' bg-red-500  badge badge-sm indicator-item me-1  text-white'}`}>{cartItemCount}</span>
        </div>
    )
}
'use client'
import { useCart } from '@/app/modules/handlers/addCart';
import React from 'react'

const Footer = () => {
    const { showCart } = useCart();
    return (
        <div className={` ${showCart ? '' : 'fixed bottom-0'} navbar  bg-white mt-10`}>
            <div className="navbar-center mx-auto">
                <a className=" inline-flex ">
                    <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg" width="40" height="40"><g fill="#0B81FF" fillRule="nonzero"><path d="M74.6 37.3C74.6 16.7 57.9 0 37.3 0S0 16.7 0 37.3s16.7 37.3 37.3 37.3 37.3-16.7 37.3-37.3M162.3 37.3C162.3 16.7 145.6 0 125 0S87.7 16.7 87.7 37.3s16.7 37.3 37.3 37.3 37.3-16.7 37.3-37.3M250 37.3C250 16.7 233.3 0 212.7 0s-37.3 16.7-37.3 37.3 16.7 37.3 37.3 37.3S250 57.9 250 37.3M162.3 125c0-20.6-16.7-37.3-37.3-37.3S87.7 104.4 87.7 125s16.7 37.3 37.3 37.3 37.3-16.7 37.3-37.3M162.3 212.7c0-20.6-16.7-37.3-37.3-37.3s-37.3 16.7-37.3 37.3S104.4 250 125 250s37.3-16.7 37.3-37.3" /></g></svg>
                    <span className='ml-2 mt-3 text-2xl text-blue-500'>Telefonica</span>                 
                </a>
            </div>
        </div>
    )
}
export default Footer;
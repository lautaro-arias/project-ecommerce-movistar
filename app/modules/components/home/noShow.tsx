'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import CardsProduct from './cardsProduct';
const NoShow = () => {
    const pathname = usePathname()
  return (
    <> 
    {pathname !== '/ofertas'  && (
        <>
        <CardsProduct />
        </>
    )}
    </>
  )
}

export default NoShow
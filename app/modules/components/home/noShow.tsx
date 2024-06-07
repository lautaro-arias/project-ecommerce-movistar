'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
import CardsProduct from './cardsProduct';
import Navbar from './navbar';
import Footer from './footer';
export  const NoShow = () => {
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

export const NoShowNav = () => {
    const pathname = usePathname()
  return (
    <> 
    {pathname !== '/cart/pagos'  && (
        <>
        <Navbar />
        </>
    )}
    </>
  )
}

export const NoShowFooter = () => {
  const pathname = usePathname()
return (
  <> 
  {pathname !== '/cart/pagos'  && (
      <>
      <Footer />
      </>
  )}
  </>
)
}
'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './nav/navbar';
import Footer from './footer';

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
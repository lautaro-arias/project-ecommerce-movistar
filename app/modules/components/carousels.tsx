import { Carousel } from "flowbite-react";
import c1 from '../assets/cd1.jpg'
import c2 from '../assets/cd2.jpg'
import c3 from '../assets/cd3.jpg'
import c4 from '../assets/cd4.jpg'
import React from 'react';
import Image from 'next/image'

const Carousels = () => {
  return (
    <div className="bg-gray-100 mt-1 h-64 sm:h-64 xl:h-80 2xl:h-96 ">
    <Carousel slideInterval={9000}>
      <Image className=" md:px-80 w-full   md:h-56" width={1000} height={1000} src={c1} alt="..." />
      <Image className="md:px-80 w-full md:h-56" width={1000} height={1000} src={c2} alt="..."/>
      <Image className="md:px-80 w-full md:h-56" width={1000} height={1000} src={c3} alt="..." />
      <Image className="md:px-80 w-full md:h-56" width={1000} height={1000} src={c4} alt="..." />
    </Carousel>
  </div>
  )
}

export default Carousels
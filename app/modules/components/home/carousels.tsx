import c1 from '../../../../public/assets/cd1.jpg'
import c2 from '../../../../public/assets/cd2.jpg'
import c3 from '../../../../public/assets/cd3.jpg'
import c4 from '../../../../public/assets/cd4.jpg'
import React from 'react';
import Image from 'next/image'
import SideMenu from "./sideMenu";

const Carousels = () => {
  return (
    <>
      <div className="carousel  h-56 w-full  mx-auto  ">
        <div id="slide1" className="carousel-item relative w-full carousel-inner">
          <Image className=" md:px-80 w-full   md:h-56" width={1000} height={1000} src={c1} alt="..." />
        </div>
        <div id="slide2" className="carousel-item relative w-full carousel-inner">
          <Image className=" md:px-80 w-full   md:h-56" width={1000} height={1000} src={c2} alt="..." />

        </div>
        <div id="slide3" className="carousel-item relative w-full carousel-inner">
          <Image className=" md:px-80 w-full   md:h-56" width={1000} height={1000} src={c3} alt="..." />

        </div>
        <div id="slide4" className="carousel-item relative w-full carousel-inner">
          <Image className=" md:px-80 w-full   md:h-56" width={1000} height={1000} src={c4} alt="..." />

        </div>
      </div>
      <SideMenu />
    </>



  )
}
{/*<div className="bg-gray-100 mt-1 h-64 sm:h-64 xl:h-80 2xl:h-96 ">
    <Carousel slideInterval={9000}>
      <Image className=" md:px-80 w-full   md:h-56" width={1000} height={1000} src={c1} alt="..." />
      <Image className="md:px-80 w-full md:h-56" width={1000} height={1000} src={c2} alt="..."/>
      <Image className="md:px-80 w-full md:h-56" width={1000} height={1000} src={c3} alt="..." />
      <Image className="md:px-80 w-full md:h-56" width={1000} height={1000} src={c4} alt="..." />
    </Carousel>
  </div>*/}

export default Carousels
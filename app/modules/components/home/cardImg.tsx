'use client'
import React from 'react';
import Image from 'next/image';
import ArraysImg from '../../utils/arraysImg';
import { useCart } from '../../handlers/addCart';
export const CardImg = () => {
    const { arrayImg } = ArraysImg();
    const { ids } = useCart();

    const imgData = arrayImg.find(img => img.id === ids);
    return (
        <div className="">
                    {imgData ? (
                        <div className=" relative h-[450px] md:h-[500px] ">
                            <Image
                                width={900}
                                height={1200}
                                className=" absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                                src={imgData.img}
                                alt='celular'
                            />
                        </div>
                    ) : null
                    
                }
        </div>
    )
}

export const CardImg2 = () => {
    const { arrayImg } = ArraysImg();
    const { ids } = useCart();

    const imgData = arrayImg.find(img => img.id === ids);
    return (
        <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  xl:grid-cols-2 ">
                    {imgData ? (
                        <div className=" inline-flex relative h-[450px] md:h-[350px] ">
                            <Image
                                width={900}
                                height={1200}
                                className=""
                                src={imgData.img}
                                alt='celular'
                            />
                             <Image
                                width={900}
                                height={1200}
                                className=""
                                src={imgData.img2}
                                alt='celular'
                            />
                        </div>
                    ) : null
                    
                }
        </div>
    )
    
} 
'use client'
import React from 'react';
import Image from 'next/image';
import ArraysImg from '../../utils/arraysImg';
import { useCart } from '../../handlers/addCart';
import { usePathname } from 'next/navigation';

export const CardImg = () => {
    const { arrayImg } = ArraysImg();
    const { ids } = useCart();
    const pathname = usePathname()


    const imgData = arrayImg.find(img => img.id === ids);
    return (
        <>
            {imgData ? (
                <>
                    {pathname !== '/cart' ? (
                        <div className="relative h-[450px] md:h-[475px]">
                            <Image
                                width={1000}
                                height={1000}
                                className="absolute inset-0 h-full w-full object-cover "
                                src={imgData.img}
                                alt="celular"
                            />
                        </div>
                    ) : (
                        <div className="">
                            <Image
                                width={100}
                                height={100}
                                className="size-16 rounded object-cover"
                                src={imgData.img}
                                alt="celular"
                            />
                        </div>
                    )}
                </>
            ) : null}

        </>
    )
}

export const CardImg2 = () => {
    const { arrayImg } = ArraysImg();
    const { ids } = useCart();
    const pathname = usePathname()


    const imgData = arrayImg.find(img => img.id === ids);
    return (
        <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  xl:grid-cols-2 ">
            {imgData ? (
                <div className=" inline-flex relative h-[450px] md:h-[250px] ">
                    <Image
                        className="transition-transform duration-300 transform scale-100 hover:scale-110 object-cover object-no-repeat"
                        width={900}
                        height={1200}
                        src={imgData.img}
                        alt='celular'
                    />
                    {pathname !== '/infoProduct' ? (
                        <Image
                            width={900}
                            height={1200}
                            className="transition-transform duration-300 transform scale-100 hover:scale-110 object-cover object-no-repeat"
                            src={imgData.img2}
                            alt='celular'
                        />
                    ) : 
                        <Image
                        width={900}
                        height={1200}
                        className="hidden md:block transition-transform duration-300 transform scale-100 hover:scale-110 object-cover object-no-repeat"
                        src={imgData.img2}
                        alt='celular'
                        />
                    }

                </div>
            ) : null
            }
        </div>
    )

} 
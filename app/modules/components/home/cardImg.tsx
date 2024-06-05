import React from 'react'
import Image from 'next/image'
import celular1 from '../../../../public/assets/celular1.webp'
import celular4 from '../../../../public/assets/celular4.webp'
const CardImg = () => {
    
    return (
        <>
        <div className=" relative h-[450px] md:h-[250px]   overflow-hidden">
            <Image
                src={celular1}
                id="121"
                alt=".."
                className="absolute   inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
            />
            <Image
                src={celular4}
                alt="..."
                className="absolute  inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
            />
        </div>
        </>
    )
}

export default CardImg
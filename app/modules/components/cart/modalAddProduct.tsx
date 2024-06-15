import React from 'react';
import { useCart } from '../../handlers/addCart';

const ModalAddProduct = () => {
    const { modal } = useCart()
    return (
        <>
            {modal ? (
                <>
                    <div className=" bg-sky-700 animate__animated animate__fadeInDown border-2 border-white modal-box mx-auto fixed top-20 right-0 left-0 z-50">
                        <h3 className="font-bold  text-center text-white text-lg">Producto agregado al carrito de compras!</h3>
                    </div>
                </>
            ) : null}
        </>
    )
}
export default ModalAddProduct;
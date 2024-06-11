'use client'
import React from 'react'
import Image from 'next/image';
import celular1 from '../../../../public/assets/celular1.webp'
import { useCart } from '../../handlers/addCart';
import NoProducts from './noProducts';
import ModalAddProduct from '../home/modalAddProduct';
import Link from 'next/link';
import ArraysImg from '../../utils/arraysImg';
const Cart = () => {
  const {
    addProductsCart, showCart, handleClickRemoveProduct, handleClickAddOne,
    productQuantities, totalPrecios
  } = useCart();

  const { arrayImg } = ArraysImg();
  const { ids } = useCart();

  const imgData = arrayImg.find(img => img.id === ids);
  return (
    <>
      {showCart ? (
        <div className='flex mx-auto justify-center pt-40 '>
          <div className="mx-auto w-80 sm:w-96  md:w-6/12  xl:w-4/12  md:max-w-screen-xl px-4 bg-white py-4 sm:px-6 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <header className="text-center border-b border-gray-200">
                <h3 className=" inline-flex text-xl pb-2  font-bold text-sky-600 sm:text-3xl">
                  Carrito de compras
                </h3>
              </header>
              <div className="mt-8">
                {addProductsCart.map((product, index) => (
                  <div key={index}>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-4">
                      {imgData ? (
                          <div className=" ">
                              <Image
                                  width={100}
                                  height={100}
                                  className=" size-16 rounded object-cover"
                                  src={imgData.img}
                                  alt='celular'
                              />
                          </div>
                        ) : null
                    }
                        <div>
                          <h3 className="text-sm text-gray-900">{product.title}</h3>
                          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                            <div>
                              <dt className="inline">Categoria:</dt>
                              <dd className="inline"> {product.category}</dd>
                            </div>
                            <div>
                              <dt className="inline">Marca:</dt>
                              <dd className="inline"> {product.brand}</dd>
                            </div>
                          </dl>
                        </div>
                        <div className="flex flex-1 items-center justify-end gap-2">
                          <form>
                            <label htmlFor="Line1Qty" className="sr-only"> Quantity </label>
                            <h1 className='text-gray-500 me-4 border px-4 rounded-md'>
                              {productQuantities[index]}
                            </h1>
                          </form>
                          <button onClick={() => { handleClickRemoveProduct(index); handleClickAddOne(false); }} className="text-gray-600 transition hover:text-red-600">
                            <span className="sr-only">Remove item</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                          </button>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-2 flex justify-end border-b border-gray-200 pt-4 pb-4 mb-4">
                      <div className="w-screen max-w-lg space-y-4">
                        <dl className="space-y-0.5 text-sm text-gray-700">
                          <div className="flex justify-between">
                            <dt>Subtotal</dt>
                            <dd>{productQuantities[index] > 0 ? product.price * productQuantities[index] : 0}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt>Descuento</dt>
                            <dd>-{productQuantities[index] > 0 ? product.discountPercentage : 0}%</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="flex bg-gray-200 p-4 rounded-md justify-between !text-base font-medium">
                  <dt>Total</dt>
                  <dd className="whitespace-nowrap text-md">$ {parseInt(totalPrecios > 0 ? totalPrecios : 0)}</dd>
                </div>
                <div className="flex mt-4 justify-center">
                  <Link
                    href="/cart/pagos"
                    className="justify-center mt-2 border hover:scale-95 duration-300 relative group cursor-pointer text-sky-50 overflow-hidden h-12 w-56 md:w-96 rounded-md bg-sky-200 p-2 flex items-center font-extrabold"
                  >
                    <div className="absolute right-32 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-sky-900"></div>
                    <div className="absolute right-2 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150 duration-500 bg-sky-800"></div>
                    <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150 duration-500 bg-sky-700"></div>
                    <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-500 bg-sky-600"></div>
                    <p className="z-10 inline-flex">
                      ¡Comprar !
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      ) : (<NoProducts />)}

      <ModalAddProduct />
    </>
  )
}
export default Cart;
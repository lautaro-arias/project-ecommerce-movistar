import React from 'react'
import Image from 'next/image';
import celular1 from '../../../public/assets/celular1.webp'

const Cart = () => {
  return (
    <div className='flex mx-auto justify-center pt-20 '>
      <div className="mx-auto max-w-screen-xl px-4 bg-white py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className=" inline-flex text-xl font-bold text-gray-900 sm:text-3xl">
              <span>
                <svg width="40px" height="40px" viewBox="0 -0.5 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" strokeLinejoin="round" />
                  <g id="SVGRepo_iconCarrier"> <path d="M10.3147 30.9442C11.9424 30.9442 13.2618 29.6247 13.2618 27.9971C13.2618 26.3695 11.9424 25.05 10.3147 25.05C8.68712 25.05 7.36768 26.3695 7.36768 27.9971C7.36768 29.6247 8.68712 30.9442 10.3147 30.9442Z" fill="#009dff" /> <path d="M26.5232 30.9442C28.1509 30.9442 29.4703 29.6247 29.4703 27.9971C29.4703 26.3695 28.1509 25.05 26.5232 25.05C24.8956 25.05 23.5762 26.3695 23.5762 27.9971C23.5762 29.6247 24.8956 30.9442 26.5232 30.9442Z" fill="#009dff" /> <path fillRule="evenodd" clipRule="evenodd" d="M30.526 5.89412H7.44717L6.60911 2.28116C6.45421 1.61335 6.1084 1.0662 5.57167 0.63972C5.03494 0.21324 4.42381 0 3.73827 0H1.47353C0.659722 0 0 0.659722 0 1.47353C0 2.28733 0.659722 2.94706 1.47353 2.94706H3.73827L4.42186 5.89412H4.42059L8.21564 22.4326C8.29244 22.7673 8.46515 23.0416 8.73378 23.2556C9.0024 23.4695 9.30842 23.5765 9.65183 23.5765H26.8066C27.1441 23.5765 27.4459 23.4728 27.7121 23.2654C27.9783 23.0581 28.1527 22.7908 28.2354 22.4635L31.9547 7.72829C32.0103 7.50802 32.0147 7.28674 31.968 7.06443C31.9212 6.84212 31.828 6.64136 31.6884 6.46214C31.5488 6.28293 31.377 6.14345 31.1728 6.04372C30.9688 5.94399 30.7532 5.89412 30.526 5.89412Z" fill="url(#paint0_linear_103_1445)" /> <g style-="mix-blend-mode:hard-light"> <g style-="mix-blend-mode:hard-light"> <path fillRule="evenodd" clipRule="evenodd" d="M8.95667 10.7179C8.94284 10.661 8.93245 10.6034 8.91504 10.5453C8.91504 10.4871 8.91504 10.4287 8.91504 10.3701C8.91504 9.96323 9.0589 9.61592 9.34663 9.32819C9.63435 9.04047 9.98167 8.89661 10.3886 8.89661C10.7285 8.89661 11.0321 9.00165 11.2993 9.21174C11.5665 9.42183 11.7402 9.69203 11.8205 10.0224L13.9565 18.817L13.9567 18.8175C13.9705 18.8744 13.9809 18.932 13.9878 18.9901C13.9948 19.0483 13.9983 19.1067 13.9983 19.1653C13.9983 19.5722 13.8544 19.9195 13.5667 20.2072C13.279 20.4949 12.9317 20.6388 12.5248 20.6388C12.1848 20.6388 11.8813 20.5338 11.614 20.3237C11.3468 20.1136 11.1731 19.8434 11.0929 19.5131L8.95667 10.7179ZM17.6405 10.059C17.5603 9.72864 17.3865 9.45844 17.1193 9.24835C16.8521 9.03826 16.5485 8.93321 16.2086 8.93321C15.8017 8.93321 15.4544 9.07707 15.1666 9.3648C14.8789 9.65252 14.7351 9.99984 14.7351 10.4067C14.7351 10.4653 14.7385 10.5237 14.7455 10.5819C14.7525 10.64 14.7629 10.6976 14.7767 10.7545L16.9129 19.5497C16.9931 19.88 17.1668 20.1502 17.4341 20.3603C17.7013 20.5704 18.0049 20.6754 18.3448 20.6754C18.7517 20.6754 19.099 20.5315 19.3867 20.2438C19.6744 19.9561 19.8183 19.6088 19.8183 19.2019C19.8183 19.1433 19.8148 19.0849 19.8079 19.0267C19.8009 18.9686 19.7905 18.911 19.7767 18.8541L19.7766 18.8536L17.6405 10.059Z" fill="white" fill-opacity="0.6" /> </g> </g> <defs> <linearGradient id="paint0_linear_103_1445" x1="0" y1="0" x2="19.7144" y2="29.6608" gradientUnits="userSpaceOnUse"> <stop stop-color="#009dff" /> <stop offset="1" stop-color="#009dff" /> </linearGradient> </defs> </g>
                </svg>
              </span>
            </h1>
          </header>

          <div className="mt-8">
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <Image
                  src={celular1}
                  alt="..."
                  className="size-16 rounded object-cover"
                  width={100}
                  height={100}
                />

                <div>
                  <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                  <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt className="inline">Size:</dt>
                      <dd className="inline">XXS</dd>
                    </div>

                    <div>
                      <dt className="inline">Color:</dt>
                      <dd className="inline">White</dd>
                    </div>
                  </dl>
                </div>

                <div className="flex flex-1 items-center justify-end gap-2">
                  <form>
                    <label htmlFor="Line1Qty" className="sr-only"> Quantity </label>

                    <input
                      type="number"
                      min="1"
                      value="1"
                      id="Line1Qty"
                      className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    />
                  </form>

                  <button className="text-gray-600 transition hover:text-red-600">
                    <span className="sr-only">Remove item</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <Image
                  src={celular1}
                  alt=".."
                  className="size-16 rounded object-cover"
                  width={100}
                  height={100}
                />

                <div>
                  <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                  <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt className="inline">Size:</dt>
                      <dd className="inline">XXS</dd>
                    </div>

                    <div>
                      <dt className="inline">Color:</dt>
                      <dd className="inline">White</dd>
                    </div>
                  </dl>
                </div>

                <div className="flex flex-1 items-center justify-end gap-2">
                  <form>
                    <label htmlFor="Line2Qty" className="sr-only"> Quantity </label>

                    <input
                      type="number"
                      min="1"
                      value="1"
                      id="Line2Qty"
                      className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    />
                  </form>

                  <button className="text-gray-600 transition hover:text-red-600">
                    <span className="sr-only">Remove item</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <Image
                  src={celular1}
                  alt=".."
                  className="size-16 rounded object-cover"
                  width={100}
                  height={100}
                />

                <div>
                  <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                  <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt className="inline">Size:</dt>
                      <dd className="inline">XXS</dd>
                    </div>

                    <div>
                      <dt className="inline">Color:</dt>
                      <dd className="inline">White</dd>
                    </div>
                  </dl>
                </div>

                <div className="flex flex-1 items-center justify-end gap-2">
                  <form>
                    <label htmlFor="Line3Qty" className="sr-only"> Quantity </label>

                    <input
                      type="number"
                      min="1"
                      value="1"
                      id="Line3Qty"
                      className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    />
                  </form>

                  <button className="text-gray-600 transition hover:text-red-600">
                    <span className="sr-only">Remove item</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd>£250</dd>
                  </div>

                  <div className="flex justify-between">
                    <dt>VAT</dt>
                    <dd>£25</dd>
                  </div>

                  <div className="flex justify-between">
                    <dt>Discount</dt>
                    <dd>-£20</dd>
                  </div>

                  <div className="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>£200</dd>
                  </div>
                </dl>

                <div className="flex justify-end">
                  <span
                    className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="-ms-1 me-1.5 h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                      />
                    </svg>

                    <p className="whitespace-nowrap text-xs">2 Discounts Applied</p>
                  </span>
                </div>

                <div className="flex justify-end">
                  <a
                    href="#"
                    className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                  >
                    Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Cart;
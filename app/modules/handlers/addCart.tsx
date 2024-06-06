'use client'
import { ReactNode, createContext,useContext, useState } from 'react'
import { CartContextProps } from '../model/cartContext';
import { Products } from '../model/productModel';


const CartContext = createContext<CartContextProps>(
    {   cartItemCount: 0, 
        handleClickAddOne: () => {} ,
        selectedProductsArray: [],
        handleClickShowProduct: () => {},
        addProductsCart:[],
        handleClickAddProductCart: () => {},
        showCart:false,
        handleClickRemoveProduct: () => {},
        modal:false
    }
); //
export const CartProvider = ({ children }: { children: ReactNode }) => {
///// Incrementa 1 al carrito
    const [cartItemCount, setCartItemCount] = useState<number>(0);
    const [showCart, setShowCart] = useState<boolean>(false);//muestra el carro
    const [modal,setModal] = useState<boolean>(false);//muestra el modal
    
    const handleClickAddOne = (increment: boolean) => {
        setCartItemCount(prevCount => (  increment ? prevCount + 1 : prevCount -1  ));
        setModal(true);
        setTimeout(() => {
            setModal(false);
        }, 2000);
        
        
    };
///// Agrega al carro el producto    
    const [addProductsCart, setAddProductsCart] = useState<Products[]>([]);

    const handleClickAddProductCart = (product:Products) => {
            setAddProductsCart(prevProducts => [...prevProducts, product]);
            setShowCart(true);
    };

///// Elimina el elemento en el índice dado del cart
    const handleClickRemoveProduct = (index: number) => {
        const updatedProductsArray = [...addProductsCart];

        updatedProductsArray.splice(index, 1); // Elimina el elemento en el índice dado
        setAddProductsCart(updatedProductsArray);

        if ( updatedProductsArray.length === 0) {
            setShowCart(false); 
        } 
    };
//////  

    ///Almacenar los datos del producto seleccionado en el array y mostrarlo
    const [selectedProductsArray, setSelectedProductsArray] = useState<Products[]>([]);
    const handleClickShowProduct = (product:Products) => {
        setSelectedProductsArray([product]);
    };
    /// 
    



    const contextValue: CartContextProps = {
        cartItemCount, 
        handleClickAddOne,
        selectedProductsArray,
        handleClickShowProduct,
        addProductsCart,
        handleClickAddProductCart,
        showCart,
        handleClickRemoveProduct,
        modal,
    };

    return (
        <>
            <CartContext.Provider value={contextValue}>
                {children}
            </CartContext.Provider>
        </>
    )
};

export const useCart = () => {
    return useContext(CartContext);
};

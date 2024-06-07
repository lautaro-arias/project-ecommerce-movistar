'use client'
import { ReactNode, createContext,useContext, useEffect, useState } from 'react'
import { CartContextProps } from '../model/cartContext';
import { Products } from '../model/productModel';

// CONTEXTO GLOBAL
const CartContext = createContext<CartContextProps>(
    {   cartItemCount: 0, 
        handleClickAddOne: () => {} ,
        selectedProductsArray: [],
        handleClickShowProduct: () => {},
        addProductsCart:[],
        handleClickAddProductCart: () => {},
        showCart:false,
        handleClickRemoveProduct: () => {},
        modal:false,
        handleQuantityChange: () => {},
        productQuantities: [],
        sumarPrecios: 0,
        totalPrecios: 0,
    }
); 
//
export const CartProvider = ({ children }: { children: ReactNode }) => {
///// Incrementa 1 al carrito
    const [cartItemCount, setCartItemCount] = useState<number>(0);
    const [showCart, setShowCart] = useState<boolean>(false);//muestra el carro
    const [modal,setModal] = useState<boolean>(false);//muestra el modal
    
    const handleClickAddOne = (increment: boolean) => {
        setCartItemCount(prevCount => (  increment ? prevCount + 1 : prevCount -1  ));
        if(increment){
            setTimeout(() => {
                setModal(true);
            }, 1000);
            setTimeout(() => {
                setModal(false);
            }, 4000);
        }
    };
    ////

///// Agrega al carro el producto    
    const [addProductsCart, setAddProductsCart] = useState<Products[]>([]);

    const handleClickAddProductCart = (product:Products) => {
            setAddProductsCart(prevProducts => [...prevProducts, product]);
            setShowCart(true);
    };
    ////
///// Elimina el elemento en el índice dado del cart
    const handleClickRemoveProduct = (index:number ) => {
        const updatedProductsArray = [...addProductsCart];

        updatedProductsArray.splice(index,1); // Elimina el elemento en el índice dado
        setAddProductsCart(updatedProductsArray);

        if ( updatedProductsArray.length === 0) {
            setShowCart(false); 
        } 
    };
    ///

////Actualiza precio x cantiadad
    const [productQuantities, setProductQuantities] = useState(addProductsCart.map(() => 1));
    const handleQuantityChange = (index:number, newQuantity: number) => {
        const newProductQuantities = [...productQuantities];
        newProductQuantities[index] = newQuantity;
        setProductQuantities(newProductQuantities);
    };
    //

///Suma todos los precios con sus cantiadades
        const sumarPrecios = (producto:any, cantidades:any) => {
            const total = producto.reduce((acumulador:number, product:any, index:number) => {

                const descuento = product.price * (product.discountPercentage / 100);
                const precioFinal = product.price - descuento;
                //const totalProducto = precioFinal * cantidades[index];
            
                // Redondear a dos decimales
                return Math.round((acumulador + precioFinal) * 100) / 100;

            }, 0);
        
            return total;
        };
        const totalPrecios = sumarPrecios(addProductsCart, productQuantities);
        //
        useEffect(() => {
            // Actualizar productQuantities cuando selectedProductsArray cambie
            setProductQuantities(addProductsCart.map(() => 1));
        }, [addProductsCart]);
//////  

///Almacenar los datos del producto seleccionado , 
///y muestra su info al hacer click en img en el array y mostrarlo
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
        handleQuantityChange,
        productQuantities,
        sumarPrecios,
        totalPrecios
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

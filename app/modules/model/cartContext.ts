import { Products } from "./productModel";

export interface CartContextProps {
    cartItemCount               :   number  ;
    handleClickAddOne           :   (increment: boolean) => void ;
    handleClickShowProduct      :   (product: Products) => void;
    selectedProductsArray       :   Products[];
    addProductsCart             :   Products[];
    handleClickAddProductCart   :   (product: Products) => void;
    showCart                    :   boolean;
    handleClickRemoveProduct    :   (index: number) => void;
    modal                       :   boolean;
    handleQuantityChange        :   (index: number, quantity: number) => void;
    productQuantities           :   number[];
    totalPrecios                :   number | any ;
    sumarPrecios                :   number | any ;
    /*totalPrecios:  number | any ;
    sumarPrecios        :  number  ;
    productQuantities:  number | any ;
    handleQuantityChange: number| any;
    handleClickRemoveProduct: any;
    cartItemCount: number;
    setShowOffCanvas: (value: boolean) => void;
    showOffCanvas: boolean;
    handleClickShow: () => void;
    ;*/
}
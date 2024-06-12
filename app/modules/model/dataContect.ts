import { Products } from "./productModel";

export interface DataContextProps {
    datas                   : Products[]; 
    all                     : Products[];
    getProducts             : () => void;
    handleClickFilter       : (brand:string) => void;
    active                  : string;
}
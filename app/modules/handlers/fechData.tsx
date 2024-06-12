'use client'
import { useEffect, ReactNode, createContext,useContext,useState } from "react";
import { DataContextProps } from "../model/dataContect";
import { Products } from "../model/productModel";


const DataContext = createContext<DataContextProps>(
  {   datas:[],
      all:[],
      getProducts: () => {},
      handleClickFilter: () => {},
      active: '',
  }
); 
//

export const DataProvider = ({ children }: { children: ReactNode }) => {

  const [datas, setDatas] = useState([]);
  const [all,setAll] = useState([]);
  const [active, setActive] = useState('');


  const getProducts = async () => {
    const url ='https://dummyjson.com/products/category/smartphones'
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        
        }); 
        const data = await response.json();
        setDatas(data.products);
        setAll(data.products)
        localStorage.setItem('products', JSON.stringify(data.products.filter((product:any) => product.id !== 126)));
    }catch (error) {
        console.log(error);
    }
  }
  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts !== null) {
      setDatas(JSON.parse(storedProducts))
      setAll(JSON.parse(storedProducts));
    } else {
      getProducts();
    }
  }, []);

  const handleClickFilter = (brand:string) => {
    if(brand === 'Todos'){
      setAll(datas)
      setActive(brand);
    }else if (brand === 'Samsung' || brand === 'Apple' || brand === 'Realme' || brand === 'Vivo' || brand === 'Oppo') {
      const filteredProducts = datas.filter((product:Products) => product.brand === brand);
        setAll(filteredProducts);
        setActive(brand);
    }
    
  };
 

  const contextValue: DataContextProps = {
    datas,
    all,
    getProducts,
    handleClickFilter,
    active,
  };

  return (
    <>
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    </>
  )
};

export const useData = () => {
  return useContext(DataContext);
};
'use client'
import { useEffect, useState } from "react";

const Data = () => {

  const [datas, setDatas] = useState([]);

  const getProducts = async () => {
    const url ='https://dummyjson.com/products/category/smartphones'
    //const url='https://fakestoreapi.com/products/category/electronics'
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        
        }); 
        const data = await response.json();
        setDatas( data.products);
        localStorage.setItem('products', JSON.stringify(data.products.filter((product:any) => product.id !== 126)));
    }catch (error) {
        console.log(error);
    }
  }
  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts !== null) {
      setDatas(JSON.parse(storedProducts));
    } else {
      getProducts();
    }
  }, []);


  return {
    datas,
  }
}
export default Data;
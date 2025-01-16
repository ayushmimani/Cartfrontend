import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import Shimmer from './shimmer';
import { useDispatch } from 'react-redux';
import { addproduct } from '../../Store/ProductListSlice';


const BodyConatiner = () => {
    const [products,setproducts]=useState([])
    const [loading,setloading] =useState(true);

    const dispatch=useDispatch();

    useEffect(()=>{
         //fetch('https://api.escuelajs.co/api/v1/products')
         fetch('http://localhost:8000/api/showproduct')
          .then(res=>res.json())
          .then(data=>{
             console.log(data.products);
             dispatch(addproduct(data.products));
             setproducts(data.products)
             setloading(false);
          });
    },[])
    console.log(products);
    
  return (
    <div className=' flex flex-wrap'>
        {loading ?(
        // Render shimmer placeholders when loading
        Array(15) // Adjust the number of placeholders as needed
          .fill(0)
          .map((_, index) => <Shimmer key={index} />)
      ) : products.map((product)=>{
          return (  <ProductCard key={product.id} productitem= {product}/>)
        })}
       
    </div>
  )
}

export default BodyConatiner
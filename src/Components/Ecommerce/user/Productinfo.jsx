import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import HandleCartQuantity from './HandleCartQuantity';
import ProductComment from './ProductComment';
import ProductRating from '../ProductRating';

const Productinfo = () => {
    const {id}= useParams();
    const navigate = useNavigate();
    const [productinfo,setproductinfo]  =useState([]);
    const [loading,setloading]= useState(false);

    useEffect(()=>{
        setloading(true);
        const token = localStorage.getItem('authToken');
        const getProductinfo = async()=>{
            try {
                const response = await axios.get(`http://localhost:8000/api/getproductinfo/${id}`,
                    {
                        headers:{
                            'authorization':`Bearer ${token}`
                        }
                    }
                );
                if(response.status===200){
                    
                    setproductinfo(response.data.info);
                    setloading(false)
                    console.log("productinfo",response.data.info);
                    
                }
            } catch (error) {
                 console.log("error",error);
            }
        }
        getProductinfo()

    },[id])

  return (
 <>
     {loading ? <p>Loading</p> :
      
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
        <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{productinfo.productname}</h1>
        <div className="mb-4">
         {productinfo.id && <ProductRating productId={productinfo.id}/>}
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start">
            <img
            src={`http://localhost:8000/storage/${productinfo.image}`}
            alt={productinfo.productname}
            className="w-64 h-64 object-cover rounded-md shadow-md mb-6 md:mb-0 md:mr-6"
            />
            <div className="flex-1">
            <p className="text-gray-700 text-lg mb-4">{productinfo.description}</p>
            <p className="text-gray-800 text-xl font-semibold mb-6">
                Price: <span className="text-green-500">${productinfo.price}</span>
            </p>
            <button
                className="px-6 py-2 mb-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => navigate(-1)}
            >
                Go Back
            </button>
               <HandleCartQuantity id={productinfo.id}/>
            </div>
        </div>
        </div>
        <div className='mt-3'>
           <ProductComment userId={productinfo.user_id} productId={productinfo.id}/>
        </div>
        </div>
  }
  </>
  )
}

export default Productinfo
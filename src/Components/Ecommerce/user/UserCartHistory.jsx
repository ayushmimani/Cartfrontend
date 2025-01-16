import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const UserCartHistory = () => {
   const [Carthistory,setCarthistory] =  useState([])
   const [loading,setloading] =useState(true);
    useEffect(()=>{
       const token=localStorage.getItem('authToken');
       const getUsercartHistory=async()=>{
        try {
            const response = await axios.get('http://localhost:8000/api/getUserCartHistory',{
              headers:{
                  'Authorization':`Bearer ${token}`
                }
            });
            if(response.status===200){
                console.log("cart history ",response.data.info);
                setloading(false)
                setCarthistory(response.data.info);
            }
        } catch (error) {
            console.log("can't able to fetch cart history of user");
        }
       }
       getUsercartHistory();
    },[])
  return (
    <div> 
      <h2 className='text-2xl text-center bg-orange-900 '>Order history</h2>
           {loading ? <p className='p-2 text-3xl'>Loading</p> :
          <>
            {Carthistory.length === 0 ? (
        <p>You have not ordered yet</p>
      ) : (
        Carthistory.map((item) => (
          <Link to={`/productinfo/${item.product_id}`}>
                  <div key={item.id} className="bg-slate-50 p-4 rounded-lg shadow-md mb-4">
            <div className="flex items-center justify-between">
              <img
                src={`http://localhost:8000/storage/${item.product.image}`}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="flex flex-col ml-4">
                <h2 className="font-semibold text-lg">{item.product.productname}</h2>
                <p className="text-gray-600">${item.product.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-sm text-gray-600">Quantity: {item.quantity}</span>
                   <span className="text-sm text-gray-600">
                     Total: ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          </Link>
        
        ))
      )}

      
      </>
      }
    </div>
  )
}

export default UserCartHistory
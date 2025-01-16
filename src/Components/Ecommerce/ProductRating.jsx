import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ProductRating = ({productId}) => {
        
    const [HoverRating ,setHoverRating]=useState(null);
    const [userRating ,setuserRating]=useState(null);
    
    
    const token = localStorage.getItem('authToken');

    useEffect(()=>{
        fetchStarRating()
    },[])

   const fetchStarRating=async()=>{
       try {
          const response = await axios.get(`http://localhost:8000/api/GetRating/${productId}`,
            {
                headers:{
                    'Authorization':`Bearer ${token}`,
                }
            }
          )
          if(response.status===200){ 
              console.log(response.data.info);
          }
       } catch (error){
        
       }
   }
   
   const handleRating=async(rating)=>{
    const formdata = new FormData();
    formdata.append('product_id',productId)
    formdata.append('rating',rating)
    
    try {
        console.log("fdr",formdata);
        
        const response = await axios.post('http://localhost:8000/api/rateproduct',
                formdata,
            {
                headers:{
                    'Authorization':`Bearer ${token}`,
                }
            }
        );
        if(response.status===200){
            setuserRating(response.data.info);
        }
    } catch (error) {
        console.error('Error submitting rating:', error);
    }
       
   }

    const emptyStars = 5
    
    return (
    <div>
            
            {/* empty star */}
           {Array(emptyStars).fill(0).map((_,index)=>{
             const highlight = HoverRating ? index<HoverRating : index<userRating;
           return ( <span key={`empty-${index}`} 
            onMouseEnter={()=>setHoverRating(index+1)}
            onMouseLeave={()=>setHoverRating(null)}
            onClick={()=>handleRating(index+1)}
            className={`text-xl cursor-pointer ${highlight ? 'text-yellow-500' : 'text-gray-300'} ${HoverRating ? 'hover:text-yellow-500' : ''}`}>
               ★
            </span>
           )
           })}
    </div>
  )
}

export default ProductRating
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const HandleCartQuantity = ({id}) => {
  console.log("idddd",id);
  
    const token = useSelector((state) => state.auth.token);
    console.log('token',token);
    console.log('id',id);    
    const [quantity, setQuantity] = useState(0);


  useEffect(() => {
    console.log("useeffect",id);
    
    const fetchCartInfo = async () => {
      if (!token) return; // Prevent API call if token is missing
      try {
        const response = await axios.post(
          `http://localhost:8000/api/cartinfo`, // Use environment variable for API URL
          { product_id: id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200 && Array.isArray(response.data.info)) {
          console.log('API Response:', response.data.info);
    
          const cartItem = response.data.info.find((item) => item.product_id === id);
          if (cartItem) {
            console.log('Cart Item Quantity:', cartItem.quantity);
            setQuantity(cartItem.quantity);
          } else {
            console.log('Product not found in cart');
          }
        }
      } catch (error){
          console.error('Failed to fetch cart info:', error);
      }
    };
    fetchCartInfo();
  }, []);

  // Add item to cart
  const handleAdd = async (id) => {
    if (!token) return;
    try {
      const newQuantity = quantity + 1;
      const formData = new FormData();
      formData.append('product_id', id);
      formData.append('quantity', newQuantity);

      const response = await axios.post(`http://localhost:8000/api/addtocart`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type':'application/json'
        },
      });

      if (response.status === 200) {
        setQuantity(newQuantity);
        dispatch(
          addcartitem({
            id,
            name: productitem.title,
            price: productitem.price,
          })
        );
      }
    } catch (error) {
      console.error('Failed to add item to cart:', error);
    }
  };
    // Remove item from cart
  const handleRemove = async (id) => {
    console.log(id);
    
    if (quantity === 0 || !token) return;

    try {
      const newQuantity = quantity - 1;
      const formData = new FormData();
      formData.append('product_id', id);
      formData.append('quantity', newQuantity);

      const response = await axios.post('http://localhost:8000/api/addtocart', formData, {
        headers: {
          "Authorization": `Bearer ${token}`,
          'Content-Type':'application/json'
        },
      });

      if (response.status === 200) {
        setQuantity(newQuantity);
        if (newQuantity === 0) {
          dispatch(removeItem(id));
        } else {
          dispatch(updatequantity({ id, quantity: newQuantity }));
        }
      }
    } catch (error) {
      console.error('Failed to remove item from cart:', error);
    }
  };

  return (
         <div className="flex items-center gap-2">
          <button
            onClick={()=>handleRemove(id)}
            className="bg-red-200 px-2 py-1 border rounded-s-full hover:bg-gray-red"
          >
            -
          </button>
          <span className="text-lg font-semibold">{quantity}</span>
          <button
            onClick={()=>handleAdd(id)}
            className="bg-green-200 px-2 py-1 border rounded-e-full hover:bg-gray-green"
          >
            +
          </button>
        </div> 
  
  )
}

export default HandleCartQuantity
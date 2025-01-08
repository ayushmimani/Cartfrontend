import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addcartitem, updatequantity, removeItem } from '../../Store/CartSlice';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ProductCard = ({ productitem }) => {
  const [quantity, setQuantity] = useState(0);
  const isUserLoggedIn = useSelector((state) => state.auth.isloggedin);
  const dispatch = useDispatch();
  const token = localStorage.getItem('authToken');

  // Fetch initial cart info
  useEffect(() => {
    console.log("useeffect");
    
    const fetchCartInfo = async () => {
      if (!token) return; // Prevent API call if token is missing

      try {
        const response = await axios.post(
          `http://localhost:8000/api/cartinfo`, // Use environment variable for API URL
          { product_id: productitem.id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200 && response.data.info) {
          const cartItem = response.data.info;
          console.log("quantity",cartItem);
          
          if (cartItem.id === productitem.id) {
            console.log("cartItem :", cartItem);
            

            setQuantity(cartItem.quantity );
          }
        }
      } catch (error) {
        console.error('Failed to fetch cart info:', error);
      }
    };

    fetchCartInfo();
  }, [productitem.id,token]);

  // Add item to cart
  const handleAdd = async () => {
    if (!token) return;

    try {
      const newQuantity = quantity + 1;
      const formData = new FormData();
      formData.append('product_id', productitem.id);
      formData.append('quantity', newQuantity);

      const response = await axios.post(`http://localhost:8000/api/addtocart`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setQuantity(newQuantity);
        dispatch(
          addcartitem({
            id: productitem.id,
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
  const handleRemove = async () => {
    if (quantity === 0 || !token) return;

    try {
      const newQuantity = quantity - 1;
      const formData = new FormData();
      formData.append('product_id', productitem.id);
      formData.append('quantity', newQuantity);

      const response = await axios.post('http://localhost:8000/api/addtocart', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setQuantity(newQuantity);
        if (newQuantity === 0) {
          dispatch(removeItem(productitem.id));
        } else {
          dispatch(updatequantity({ id: productitem.id, quantity: newQuantity }));
        }
      }
    } catch (error) {
      console.error('Failed to remove item from cart:', error);
    }
  };

  if (!isUserLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="border bg-yellow-100 w-64 h-64">
      <div className="h-1/2 flex items-center justify-center">
        {/* Image Placeholder */}
      </div>
      <div className="flex-1 p-2 flex flex-col justify-between">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">{productitem.productname}</h2>
          <p className="text-gray-700 font-medium">${productitem.price}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleRemove}
            className="bg-red-200 px-2 py-1 border rounded-s-full hover:bg-gray-red"
          >
            -
          </button>
          <span className="text-lg font-semibold">{quantity}</span>
          <button
            onClick={handleAdd}
            className="bg-green-200 px-2 py-1 border rounded-e-full hover:bg-gray-green"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

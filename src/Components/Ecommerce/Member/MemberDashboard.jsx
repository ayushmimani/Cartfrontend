import React, { useEffect, useState } from 'react'
import BodyConatiner from '../BodyConatiner'
import { useDispatch } from 'react-redux'

const MemberDashboard = () => { 

  const  [product, setproduct] = useState({
    name:'',
    price:'',
    description:'',
    image:null
  })

const handleChange=(e)=>{
     const {name,value}=e.target;
      setproduct((prev)=>({
        ...prev,
        [name]:value
      }));
}

const handleImage=(e)=>{
   setproduct((prev)=>({
      ...prev,
      image:e.target.files[0]
   }))
    
}

const submitform = async (e)=>{
    e.preventDefault();

    const formdata =  new FormData();

    formdata.append('productname', product.name);
    formdata.append('image',product.image);
    formdata.append('price',product.price);
    formdata.append('description',product.description);

      try {
        const response = await fetch('http://localhost:8000/api/addproduct', {
          method: 'POST',
          body: formdata,
        });
        alert(response)
        if (response.ok) {
          alert('Product added successfully!');
          setProduct({
            name: '',
            price: '',
            description: '',
            image: null,
          });
        } else {
          alert('Failed to add product.');
        }
      }
   catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
    }
}

const dispatch = useDispatch();
 

  return (
    <>
      
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
    <h2 className="text-2xl font-bold mb-6 text-center">Add Product</h2>
    <form className="space-y-4" onSubmit={submitform}>
      <div>
        <label className="block text-gray-700 font-medium">Product Name</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Enter product name"
          required
          className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium">Price</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Enter price"
          required
          className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium">Description</label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Enter product description"
          required
          className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium">Product Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          required
          className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add Product
      </button>
    </form>
  </div>

    </>

   
  )
}
export default MemberDashboard
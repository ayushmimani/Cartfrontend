import React, {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import HandleCartQuantity from './user/HandleCartQuantity';

const ProductCard = ({ productitem }) => {
  // const [quantity, setQuantity] = useState(0);
  // const isUserLoggedIn = useSelector((state) => state.auth.isloggedin);

  return (
    <div className="border bg-yellow-100 w-64 h-64">
      <Link to={`/productinfo/${productitem.id}`}>
        <div className="h-1/2 flex items-center justify-center">
          <img  className="h-full w-full object-cover" src={`http://localhost:8000/storage/${productitem.image}`  }/>
        </div>
      </Link>
      <div className="flex-1 p-2 flex flex-col justify-between">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">{productitem.productname}</h2>
          <p className="text-gray-700 font-medium">${productitem.price}</p>
        </div>
        <HandleCartQuantity id={productitem.id}/>
        {/* <div className="flex items-center gap-2">
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
        </div> */}
      </div>
    </div>
  );
};

export default ProductCard;

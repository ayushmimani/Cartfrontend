import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';

const Cartpage = () => {
  const cartlist = useSelector((state) => state.cart.items);

  const userloggedin = useSelector(state=>state.auth.isloggedin)

   const [cartdata, setcartdata] = useState([])
   const [selectedorder,setselectedorder]=useState([])
   const [loading,setloading]=useState(false);

  const totalBill = cartdata.reduce((acc,item)=>{
   if(selectedorder.includes(item.product.id)){
    acc+=item.product.price*item.quantity;
   }
    return acc;
  },0)
 
   const token = localStorage.getItem('authToken');

  useEffect(()=>{
     setloading(true);
    const fetchCartData = async ()=>{
       const response =  await axios.get('http://localhost:8000/api/cartdata',{
        headers:{
          'Content-Type':'application/json',
          'Authorization':`Bearer ${token}`
        }
       });
       if(response.status===200){
          console.log(response.data.info);
          setcartdata(response.data.info)
          setloading(false);
        
       }else{
          console.log('error to fetch cart data');
          
       }
    }
    fetchCartData();
  },[])

  const handleselecteditem=(id)=>{
     setselectedorder((previtem)=>{
        if(previtem.includes(id)){
           return selectedorder.filter((orderid)=>orderid!=id)
        }
        else{
          return [...previtem,id];
        }
     })
  }

  const handleorderplace = async()=>{
      try {
          const response = await axios.post('http://localhost:8000/api/orderplaced',
          {selectedorder},
           { 
              headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${token}`
              }
          }
      );
        if(response.status===200){
          console.log("order placed successfully");
        }else{
          console.log("order not placed");
        }
      } catch (error) {
        console.log(error);
        
      }
       

  }

  return (
    <>
    {userloggedin && 
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {loading ? <p className='p-2 text-3xl'>Loading</p> :
          <>
            {cartdata.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        cartdata.map((item) => (
          <div key={item.id} className="bg-slate-50 p-4 rounded-lg shadow-md mb-4">
            <div className="flex items-center justify-between">
              <input type='checkbox' 
              checked={selectedorder.includes(item.product.id)}
              onChange={()=>handleselecteditem(item.product.id)}/>
               <div className="flex-shrink-0">
                  <img
                    src={`http://localhost:8000/storage/${item.product.image}`}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-md border border-gray-200"
                  />
               </div>
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
        ))
      )}

        {
         selectedorder.length>0 &&
            <div className="mt-4 text-lg font-semibold flex justify-between">
                <p>Total Bill: ${totalBill.toFixed(2)}</p>
                <button onClick={handleorderplace}  className='border bg-orange-400 p-2'>Order placed</button>
            </div>
        }
      </>
      }
      
    </div>
   }
    </>
  );
};

export default Cartpage;

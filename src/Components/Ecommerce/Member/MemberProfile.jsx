import axios from 'axios';
import React, { useEffect, useState } from 'react'

const MemberProfile = () => {

 const  [listing,setlisting] = useState('getuserproductlist');
 const [items,setitems] = useState([]);
const [loading,setloading]=useState('false');

  useEffect(()=>{
    setloading(true);
   const token = localStorage.getItem('authToken');
   const fetchdata = async ()=>{
      
      const url = `http://localhost:8000/api/${listing}`;
      console.log(url);
      
       const response = await axios.get(url,{
        method:'get',
        headers:{
          'Content-type':'application/json',
          'Authorization':`Bearer ${token}`,
         }
       }
     );
      if(response.status===200){
        console.log(response.data);
        setitems(response.data);
        setloading(false);
      }
   }
   fetchdata();
      // fetch('http://localhost:8000/api/getuserproduct').then(res=>res.json())
      // .then(data=>console.log('data: ',data));
  },[listing])
  console.log(listing);
  //const token = localStorage.getItem('authToken');
  const handleorderdispatch =async(id)=>{
    const token = localStorage.getItem('authToken');
      const respnse = await axios.post('http://localhost:8000/api/orderdispatched',
        {
          id
        },
        {
          headers:{
            'Authorization':`Bearer ${token}`,
            'Content-type':'application/json'
          }
        }
      );
      if(respnse.status===200){
        alert("order is accepted");
      }else{
        alert('error')
      }
  }
  return (
    <div>
      <div className='border bottom-5'>
          <button onClick={()=>setlisting('getuserproductlist')} className= {`${listing==='getuserproductlist' ? 'text-white bg-orange-400': 'text-orange-400 bg-white'} p-2 m-2 border rounded-sm`}>Product List</button>
          <button onClick={()=>setlisting('getuserorderlist')} className= {`${listing==='getuserorderlist' ? 'text-white bg-orange-400': 'text-orange-400 bg-white'} p-2 m-2 border rounded-sm`}>Order List</button>
      </div>
{loading ? <p className='text-3xl justify-center'>Loading</p> :
  <table className="table-auto w-full border-collapse border border-gray-300">
  <thead>
    <tr className="bg-gray-200">
      <th className="border border-gray-300 px-4 py-2">#</th>
      <th className="border border-gray-300 px-4 py-2">product name</th>
      <th className="border border-gray-300 px-4 py-2">price</th>
      {listing==='getuserorderlist' &&
      <>
        <th className="border border-gray-300 px-4 py-2">quantity</th>
        <th className="border border-gray-300 px-4 py-2">Action</th>
       </>   
      }
         {/* <button
           className="bg-green-500 text-white px-3 py-1 rounded-lg mr-2 hover:bg-green-600">Update</button>
         <button 
         className="bg-red-500 text-white px-3 py-1 rounded-lg mr-2 hover:bg-red-600">Delete</button> */}
      
    </tr>
    
  </thead>
  <tbody>
   {items.map((item,index)=>(
       <tr key={index}>  
         <th>{index+1}</th>
         <th>{item.productname}</th>   
         <th>{item.price}</th>
       {listing==='getuserorderlist' &&
       <>
            <th>{item.quantity}</th>
            <th>
              {item.order_dispatched ? <p className='bg-yellow-400 text-white px-3 py-1'>Order dispatched</p>:
                <button
                  onClick={()=>handleorderdispatch(item.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded-lg mr-2 hover:bg-green-600">
                  Accept</button>
              }
            </th>
         </>
      }
       </tr>
   ))}
      
  </tbody>
  </table>
}
      
    </div>
  )
}

export default MemberProfile
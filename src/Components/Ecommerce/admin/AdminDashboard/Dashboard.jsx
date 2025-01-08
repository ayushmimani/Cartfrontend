import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { use } from 'react';

const Dashboard = () => {
  const[type,settype] = useState('member');
  const [lists,setlist] =useState([]);
  const [loading,setloading] = useState(false);

  useEffect(()=>{
    setloading(true);
    const fetchdata =async ()=>{
    const response =  await axios.get(`http://localhost:8000/api/${type}`)
    const data =response.data;
    if (data.status === "success" && Array.isArray(data.info)) {
      setloading(false);
      setlist(data.info); // Use the `info` array from the response
    }
  }
  fetchdata();
  },[type]) 


  return (
    <div>
      <div className='border bottom-5'>
          <button onClick={()=>settype('member')} className= {`${type==='member' ? 'text-white bg-orange-400': 'text-orange-400 bg-white'} p-2 m-2 border rounded-sm`}>Member</button>
          <button onClick={()=>settype('user')} className= {`${type==='user' ? 'text-white bg-orange-400': 'text-orange-400 bg-white'} p-2 m-2 border rounded-sm`}>User</button>
      </div>
              {/* loading  */}
            {loading ? (<p>Loading</p>) : (
     
     <table className="table-auto w-full border-collapse border border-gray-300">
       <thead>
         <tr className="bg-gray-200">
           <th className="border border-gray-300 px-4 py-2">#</th>
           <th className="border border-gray-300 px-4 py-2">Name</th>
           <th className="border border-gray-300 px-4 py-2">Email</th>
         </tr>
       </thead>
       <tbody>
         
             {lists.map((list,index)=>{
             return (
                 <tr key={list.id} className="hover:bg-gray-100">
                     <th className="border border-gray-300 px-4 py-2 text-center">{index+1}</th>
                     <th className="border border-gray-300 px-4 py-2">{list.name}</th>
                     <th className="border border-gray-300 px-4 py-2">{list.email}</th>
                    
                </tr>
             )  
         })}
       </tbody>
     </table>
) }
      
       
    </div>
  )
}

export default Dashboard
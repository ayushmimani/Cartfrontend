import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UserCartHistory from './UserCartHistory';

const UserProfile = () => {
  const [userinfo,setuserinfo]=useState([]);
    useEffect(()=>{
         const token = localStorage.getItem('authToken');
         const getuserinfo = async()=>{
          try {
              const response =await axios.get('http://localhost:8000/api/getuserinfo',
                {
                    headers:{
                      'authorization':`Bearer ${token}`,
                    }
                }
            );
              if(response.status===200){
                console.log(response.data.info[0]);
                
                  setuserinfo(response.data.info[0]);
              }
          } catch (error) {
              console.log(error);
          }
              
         }

         getuserinfo();
    },[])
  return (
    <>
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow-md mb-3">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">User Profile</h2>
      <div className="space-y-4">
        <p className="text-lg text-gray-700">
          <span className="font-medium">Name:</span> {userinfo.name}
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-medium">Email:</span> {userinfo.email}
        </p>
      </div>
    </div>
      <UserCartHistory/>
   </> 

  )
}

export default UserProfile
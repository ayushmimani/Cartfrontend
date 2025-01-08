import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { checkverifiedmember } from '../../../Store/AdminSlice';

const Unverifiedmemeber = () => {

const dispatch =  useDispatch();

   const [unverifiedmember,setunverifiedmemeber] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:8000/api/unverified_member').then(res=>res.json())
    .then(data=>{
       // console.log(data.info);
        setunverifiedmemeber(data.info)
        if(unverifiedmember.length===0){
            dispatch(checkverifiedmember(false));
        }else{
            dispatch(checkverifiedmember(true));
        }
    })
  },[unverifiedmember])

  const handleAccept = async (id)=>{
  
    try{
       await axios.post(`http://localhost:8000/api/verify_member/${id}`,{is_verified:true})
       setunverifiedmemeber(unverifiedmember.filter(member=>member.id!==id));
       alert("Member accepted successfully!");
    }catch(err){
    console.log(err);
    }
  }

  const handleReject = async (id)=>{
      try{
         await axios.post(`http://localhost:8000/api/unverify_member/${id}`,{is_verified:false})
         setunverifiedmemeber(unverifiedmember.filter(member=>member.id!==id));
         alert("Member rejected successfully!");
      }catch(error){
        console.error("Error rejecting member:", error);
      }
  }
  return (
    <div>
      {unverifiedmember.length===0?(<p>Thier is no data to show</p>) :(
             <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
                {unverifiedmember.map((memberlist,index)=>{
                return (
                    <tr key={memberlist.id} className="hover:bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-center">{index+1}</th>
                        <th className="border border-gray-300 px-4 py-2">{memberlist.name}</th>
                        <th className="border border-gray-300 px-4 py-2">{memberlist.email}</th>
                        <th className="border border-gray-300 px-4 py-2">
                            <button
                            onClick={()=>handleAccept(memberlist.id)}
                             className="bg-green-500 text-white px-3 py-1 rounded-lg mr-2 hover:bg-green-600">Accept</button>
                            <button 
                            onClick={()=>handleReject(memberlist.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded-lg mr-2 hover:bg-red-600">Reject</button>
                        </th>
                   </tr>
                )  
            })}
          </tbody>
        </table>
      ) }
    </div>
  )
}

export default Unverifiedmemeber
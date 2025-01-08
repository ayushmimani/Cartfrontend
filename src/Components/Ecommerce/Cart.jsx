import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signOut,getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { Navigate } from 'react-router-dom';
import { checkUserSession } from '../../Store/AuthSlice';

const Cart = () => {

  const {isloggedin,usertype} = useSelector(state=>state.auth)
  const {isverified} = useSelector(state=>state.admin)
  console.log('logout' ,isloggedin);
  
  const dispatch =useDispatch();
  // logout 
   const signout = async (e)=>{
    e.preventDefault();
    localStorage.removeItem('authToken');
    dispatch(checkUserSession({isloggedin:false,usertype:null}));
   }
   

  return (
    <div>
      {usertype==='member' &&(
        <>
         <button className='p-2'>
         <Link to={'/unverifiedmemnber'}>
            {isverified ? '🙄':'😀'}
            {isverified ? ( <div className={`absolute top-3 right-29 w-2 h-2 bg-green-500 rounded-full text-white text-xs flex items-center justify-center`}>
              </div>) :''}
           
          </Link>
        </button>
        <button className='p-2'><Link to={'/memberorderlist'}>Order List</Link></button>
        <button className='p-2'><Link to={'/memberproductlist'}>Product List</Link></button>
         <button className='p-2'><Link to={'/memberprofile'}>Profile</Link></button>
         </>
      )}
     
      
      {usertype==='user' && (
        <>
          <button className='p-2'><Link to={'/cartpage'}>Cart</Link></button>
          <button className='p-2'><Link to={'/userprofile'}>Profile</Link></button>
        </>
    ) }
       
       <button className='ml-2 mr-2' onClick={signout}>Sign Out</button> 
    </div>
  )
}

export default Cart
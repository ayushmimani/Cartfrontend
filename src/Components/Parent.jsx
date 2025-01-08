import { Outlet, useNavigate } from 'react-router-dom'
import Header from  './Header'
import Login from './Ecommerce/admin/Login'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'


const Parent = () => {
    const isUserLoggedIn = useSelector((state)=> state.auth.isloggedin)
    console.log('header',isUserLoggedIn);
    
    const navigate = useNavigate();
    useEffect(()=>{
      const checktoken = localStorage.getItem('authToken');
        if(isUserLoggedIn===false ) { navigate('/') }
    },[isUserLoggedIn])

    return (
        <>
          {isUserLoggedIn &&  <Header/>}
        <Outlet/>
        </>
       
 
  )
}

export default Parent
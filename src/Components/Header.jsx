import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BodyConatiner from './Ecommerce/BodyConatiner'
import Cart from './Ecommerce/Cart'
import { useSelector } from 'react-redux'


const Header = () => {
  const {isloggedin,usertype} = useSelector((state)=> state.auth)
  
 // console.log('header', isloggedin)

  return (
    <>
       <div className=' flex m-1  bg-orange-300 justify-between'  >
       <div className='flex '>
          <ul className='flex gap-3 h-16 items-center'>
            {usertype==='admin' && <li className='cursor-pointer' ><Link to={'/admin'}>Home</Link> </li>}
            {usertype==='user' && <li className='cursor-pointer' ><Link to={'/user'}>Home</Link> </li>}
            {usertype==='member' && <li className='cursor-pointer' ><Link to={'/member'}>Home</Link> </li>}
              <li className='cursor-pointer'><Link to={'/contactus'}>Contact Us</Link></li>
              <li className='cursor-pointer'><Link to={'/aboutus'}>About Us</Link></li>
              <li  className='cursor-pointer'><Link></Link></li>
          </ul>
       </div>
       <Cart/> 
  </div>
    
   
    </>
  )
}

export default Header
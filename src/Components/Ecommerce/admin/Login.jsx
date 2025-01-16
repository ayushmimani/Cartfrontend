import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { signInWithEmailAndPassword   , getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { checkUserSession } from '../../../Store/AuthSlice';
import axios from 'axios';

const login = () => {
    const navigate = useNavigate();    
    const [forminput,setforminput] = useState({
      email:'',
      password:''
    })

   const dispatch  = useDispatch();
   const checklogin = useSelector((state)=>state.auth.isloggedin);

    // handle input fields
    const handleinput = (e)=>{
      const {name,value} = e.target;
      setforminput({
           ...forminput,
           [name]:value
      })
    }

    // submit function
    const submit = async(e)=>{
            e.preventDefault();
            try{
            const response = await axios.post('http://localhost:8000/api/login',forminput)
            
            if(response.status===200){
              const token = response.data.token;
              const usertype = response.data.user.usertype; 
              localStorage.setItem('authToken', token);
                  dispatch(checkUserSession({token,isloggedin:!checklogin,usertype}))
                if(usertype==='admin'){
                  return navigate('/admin');
                }else if(usertype==='user'){
                  return navigate('/user');
                }else if(usertype==='member'){
                  return navigate('/member');
                }else{
                  return navigate('/');
                }
              }else{
                console.log("error not able to login");
              }
          }catch (err) {
            if (err.response) {
              // Log error details if available
              console.error('Server responded with an error:', err.response.data);
              if (err.response.data && err.response.data.message) {
                console.log(err.response.data.message);
              } else {
                alert('An error occurred, but no specific message was provided.');
              }
            } else if (err.request) {
              // Log if no response was received
              console.error('No response received from the server:', err.request);
              alert('Unable to connect to the server. Please try again later.');
            } else {
              // Log any other errors
              console.error('An unexpected error occurred:', err.message);
              alert('An unexpected error occurred.');
            }
          }
       }
  
    return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
    
    <form>
      <div className="mb-4">
        <label htmlFor="email"  className="block text-gray-700 font-medium mb-2">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email"
          placeholder="Enter your email" 
          onChange={handleinput}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      
      <div className="mb-6">
        <label htmlFor="password"  className="block text-gray-700 font-medium mb-2">Password</label>
        <input 
          type="password" 
          id="password" 
          name="password"
          onChange={handleinput}
          placeholder="Enter your password" 
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

     
      <button 
        type="submit" 
        onClick={submit}
        id='submit'
        className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
      >
        Login
      </button>
    </form>

  
    <div className="text-center mt-4">
      <p className="text-gray-600">
        Don't have an account? 
       <Link to={'/addmember'}><button className="text-blue-500 hover:underline">join as a member</button></Link> 
      </p>
    </div>
  </div>
  )
}

export default login
import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
const Register = () => {
  const auth = getAuth();
  const [formdata,setformdata]= useState({
     fname:'',
     lname:'',
     email:'',
     password:''
  })

  const handleinput = (e)=>{
    e.preventDefault();
  
    const {name,value} = e.target;
         setformdata({
                ...formdata,
                [name]:value
         })
    }
 
  const submit = async (e)=>{
    e.preventDefault();
    // try{
    // const usercredential = await createUserWithEmailAndPassword(auth,formdata.email,formdata.password);
    // const user = usercredential.user;
 
    //     // Store additional user data in Firestore
    //     const db = getFirestore();
    //     await setDoc(doc(db, "users", user.uid), {
    //       firstName: formdata.fname,
    //       lastName: formdata.lname,
    //       email: formdata.email,
    //     });
    //     console.log("User registered and data stored successfully!");
    //   } catch (error) {
    //     console.error("Error registering user:", error.message);
    //   }

    try {
      const response = await axios.post("http://localhost:8000/api/users", formdata);
      console.log(response.data);
      alert("User registered successfully!");
  } catch (error) {
      console.error(error.response.data);
      alert("Error registering user!");
  }
    
     }
    
  
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
    <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
    <form>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email"  id="email" name="email" required
        onChange={handleinput}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Name</label>
        <input type="text" id="name"  onChange={handleinput} name="name" required
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
      </div>
      <div className="mb-4">
        <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Last Name</label>
        <input type="text" id="lastname"   onChange={handleinput} name="lname" required
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input type="password" id="password"   onChange={handleinput} name="password" required
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"/>
      </div>
      <button type="submit"
              id="register"
              onClick={submit}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        Register
      </button>
    </form>
  </div>
  )
}

export default Register
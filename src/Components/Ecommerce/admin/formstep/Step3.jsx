import React from 'react';
import axios from 'axios';
import { createUserWithEmailAndPassword, getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import { Navigate, useNavigate } from 'react-router-dom';

const UserDetails = ({formdata, prevbtn}) => {
  const navigate = useNavigate();
  
      const submit = async (e)=>{
        e.preventDefault();
      try {
        const response = await axios.post("http://localhost:8000/api/users", formdata);
        navigate('/dashboard');
        alert("User registered successfully!");
    } catch (error) {
        if (error.response) {
            // The server responded with a status code outside the range of 2xx
            console.error("Error response:", error.response.data);
            alert(`Error: ${error.response.data.message || "Registration failed"}`);
        } else if (error.request) {
            // The request was made but no response was received
            console.error("Error request:", error.request);
            alert("No response from the server. Please try again later.");
        } else {
            // Something else happened
            console.error("Error message:", error.message);
            alert(`Unexpected error: ${error.message}`);
        }
    }
    
         }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">User Details</h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Name</h2>
            <p className="text-gray-600">{formdata.name}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Email</h2>
            <p className="text-gray-600">{formdata.email}</p>
          </div>
          {/* <div>
            <h2 className="text-lg font-semibold text-gray-700">Address</h2>
            <p className="text-gray-600">{`${formdata.address } ${formdata.state } ${formdata.city} `}</p>
          </div> */}
          <button 
                type="button" 
                onClick={prevbtn}
                className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
            >
            Previous
        </button>
        <button 
                type="submit" 
                onClick={submit}
                className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
            >
            Submit
        </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

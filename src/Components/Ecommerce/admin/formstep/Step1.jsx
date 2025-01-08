import React from 'react'

const Step1 = ({nextbtn,handleinput,formdata}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Step 1</h2>
    
    <form>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
        <input 
          type="text" 
          id="name" 
          name='name'
          value={formdata.name}
          onChange={handleinput}
          placeholder="Enter your name" 
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">email</label>
        <input 
          type="email" 
          id="email" 
          name='email'
          value={formdata.email}
          onChange={handleinput}
          placeholder="Enter your email" 
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          
        />
      </div>

      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">password</label>
        <input 
          type="password" 
          id="password" 
          value={formdata.password}
          name='password'
          onChange={handleinput}
          placeholder="Enter your password" 
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          
        />
      </div>

      <div className="mb-6">
        <label htmlFor="usertype" className="block text-gray-700 font-medium mb-2">Usertype</label>
        <input 
          type="text" 
          id="usertype" 
          value={formdata.usertype}
          name='usertype'
          onChange={handleinput}
          placeholder="Enter your usertype" 
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          
        />
      </div>

     
      <button 
        type="submit" 
        onClick={nextbtn}
        className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
      >
        Next
      </button>
    </form>
  </div>
  )
}

export default Step1
import React from 'react'

const Step2= ({nextbtn,prevbtn,formdata,handleinput}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Step 2</h2>
    
    <form>
      <div className="mb-4">
        <label htmlFor="address" className="block text-gray-700 font-medium mb-2">address</label>
        <input 
          type="text" 
          id="address" 
          name="address"
           value={formdata.address}
          onChange={handleinput}
         
          placeholder="Enter your address" 
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          
        />
      </div>

      <div className="mb-6">
        <label htmlFor="state" className="block text-gray-700 font-medium mb-2">state</label>
        <input 
          type="text" 
          id="state" 
          name='state'
          value={formdata.state}
          onChange={handleinput}
          placeholder="Enter your state" 
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          
        />
      </div>

      <div className="mb-6">
        <label htmlFor="city" className="block text-gray-700 font-medium mb-2">city</label>
            <input 
            type="text" 
            id="city" 
            name='city'
            value={formdata.city}
            onChange={handleinput}
            placeholder="Enter your city" 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
      </div>

      <div className="mb-6">
            <button 
            onClick={prevbtn}
              className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
            >
                Previous
            </button>
            <button 
            onClick={nextbtn}
               className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
            >
                Next
            </button>
      </div>
    </form>
  </div>
  )
}

export default Step2
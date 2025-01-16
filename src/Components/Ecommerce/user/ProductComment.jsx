import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ProductComment = ({productId,userId}) => {
   
   const [comment,setcomment] = useState('');
   const [commentlist,setcommentlist]=useState([]);

   const token = localStorage.getItem('authToken');

   useEffect(()=>{
    fetchgetcomment();
   },[comment]);

   const fetchgetcomment =async()=>{
    try {
      const response = await axios.get(`http://localhost:8000/api/getcomment/${productId}`,
        {
          headers:{
            'authorization':`Bearer ${token}`,
            'Content-Type':'application/json'
          }
        }
      );
      if(response.status===200){
        setcommentlist(response.data.info);
      }
    } catch (error) {
      console.log(error);
    }
  }

   const handleComment= async(e)=>{
     e.preventDefault();
      const formdata = new FormData();
      formdata.append('product_id',productId);
      formdata.append('comment',comment)
      
      try {
           const response = await axios.post('http://localhost:8000/api/addcomment/',
                formdata,
                {
                  headers:{
                      'Authorization':`Bearer ${token}`,
                  }
                }
          );
           if(response.status===200){
                   setcomment('');
              //  setcommentlist((prev)=>{
              //      return [
              //        ...prev, comment
              //      ]
            //   });
               alert("comment added successfully");
           }
      } catch (error) {
        console.log(error);
        
      }
   }

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
    <h1 className="text-3xl font-semibold mb-6 text-gray-800">Comments</h1>
    <div className="bg-gray-100 p-4 rounded-lg mb-6 max-h-80 overflow-y-auto">
      {commentlist.length > 0 ? (
        commentlist.map((list) => (
          <div
            key={list.id}
            className="bg-white p-4 mb-4 rounded-lg shadow-md border border-gray-200 flex flex-col gap-2"
          >
            <div className="flex items-center gap-3">
              <div className="bg-orange-400 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">
                {list.user?.name?.charAt(0) || "U"}
              </div>
              <p className="text-gray-800 font-medium">{list.user?.name || "Anonymous"}</p>
            </div>
            <p className="text-gray-700 mt-2">{list.comment}</p>
            <p className="text-sm text-gray-500 mt-1">{new Date(list.created_at).toLocaleString()}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center">No comments yet. Be the first to comment!</p>
      )}
    </div>
    <form className="flex flex-col gap-4" onSubmit={handleComment}>
      <textarea
        name="comment"
        value={comment}
        onChange={(e) => setcomment(e.target.value)}
        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        placeholder="Write your comment..."
      ></textarea>
      <button
        type="submit"
        className="self-end bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-all"
      >
        Submit
      </button>
    </form>
  </div>
  
  
  )
}

export default ProductComment
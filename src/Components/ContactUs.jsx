import React from 'react';
import { useSelector } from 'react-redux';

const ContactUs = () => {
  const userloggedin = useSelector(state=>state.auth.checkUserSession)

 
  return (
    <>
    {userloggedin &&
    <div className='min-h-screen flex items-center justify-center  px-4'>
      <div className=' shadow-md rounded-lg p-8 max-w-md w-full'>
        <h2 className='text-2xl font-bold text-center mb-6'>Contact Us</h2>
        <form>
          {/* Name Input */}
          <div className='mb-4'>
            <label htmlFor='name' className='block text-sm font-medium  mb-1'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='w-full border  rounded-lg px-4 py-2 focus:outline-none focus:ring-2 '
              placeholder='Your Name'
              required
            />
          </div>

          {/* Email Input */}
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-medium  mb-1'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Your Email'
              required
            />
          </div>

          {/* Message Textarea */}
          <div className='mb-4'>
            <label htmlFor='message' className='block text-sm font-medium  mb-1'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              rows='4'
              className='w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Your Message'
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type='submit'
              className='w-full bg-blue-500 py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>

    }
    </>
  );
};

export default ContactUs;

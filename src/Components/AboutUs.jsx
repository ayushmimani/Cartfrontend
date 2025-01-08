import React from 'react';
import { useSelector } from 'react-redux';

const AboutUs = () => {
  const userloggedin = useSelector(state=>state.auth.checkUserSession)
  return (
    <>
    {userloggedin &&
    <div className='min-h-screen flex flex-col items-center justify-center  px-4'>
      <div className=' shadow-lg rounded-lg p-8 max-w-4xl w-full'>
        <h1 className='text-4xl font-bold text-center mb-6'>About Us</h1>
        <p className='text-lg leading-relaxed mb-6'>
          Welcome to our company! We are dedicated to providing top-notch services and solutions tailored to meet your needs. 
          With years of experience and a team of passionate professionals, we strive to deliver excellence in every project we undertake.
        </p>
        <p className=' text-lg leading-relaxed mb-6'>
          Our mission is to make a positive impact by delivering innovative solutions that drive success for our clients. 
          We believe in integrity, collaboration, and a customer-first approach, ensuring that we exceed expectations every step of the way.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
          {/* Team Member 1 */}
          <div className='text-center'>
            <img
              src='https://via.placeholder.com/150'
              alt='Team Member 1'
              className='w-24 h-24 mx-auto rounded-full mb-4'
            />
            <h3 className='text-lg font-semibold'>John Doe</h3>
            <p className='text-gray-500'>CEO & Founder</p>
          </div>

          {/* Team Member 2 */}
          <div className='text-center'>
            <img
              src='https://via.placeholder.com/150'
              alt='Team Member 2'
              className='w-24 h-24 mx-auto rounded-full mb-4'
            />
            <h3 className='text-lg font-semibold'>Jane Smith</h3>
            <p className='text-gray-500'>Head of Operations</p>
          </div>

          {/* Team Member 3 */}
          <div className='text-center'>
            <img
              src='https://via.placeholder.com/150'
              alt='Team Member 3'
              className='w-24 h-24 mx-auto rounded-full mb-4'
            />
            <h3 className='text-lg font-semibold'>Alex Johnson</h3>
            <p className='text-gray-500'>Lead Developer</p>
          </div>
        </div>
      </div>
    </div>
   }
    </>
  );
};

export default AboutUs;

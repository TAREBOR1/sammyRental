import React from 'react';
import Login from './Login';
import { useSelector } from 'react-redux';

const Hero = () => {
  const { dialog } = useSelector((state) => state.dialog);

  return (
    <div className='relative'>
      {/* Background Content */}
      <div className={`flex flex-col justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/newHero.png")] bg-no-repeat bg-cover bg-center h-screen transition-all duration-300 ${dialog ? 'blur-sm brightness-50' : ''}`}>
        {/* Text Section */}
        <div className='flex flex-col items-start mt-20 md:mt-0'>
          <p className='bg-[#49B9FF]/50 px-3.5 py-1 rounded-full'>The Best shortlet Apartment in Lagos</p>
          <h1 className='font-Nunito text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4'>
            Discover a Home Away from Home
          </h1>
          <p className='max-w-130 mt-2 text-sm md:text-base'>
            Lorem ipsum, dolor sit ameeniam adipiime molestiae aperiam nisi perferendis provident. quasi recusandae debitis.
          </p>
        </div>

        {/* Booking Form */}
       
<div className='mt-10 w-full flex justify-center md:justify-start'>
   <button type="submit" className="bg-[#49B9FF]/50 hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer">
            Book Now
          </button>
</div>

      </div>

      {/* Modal Overlay */}
      {dialog && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-50'>
          <div className='bg-transparent p-6 rounded-lg shadow-lg max-w-md w-full z-50'>
            <Login />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;

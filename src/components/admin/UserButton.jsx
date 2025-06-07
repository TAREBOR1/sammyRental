import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';


const UserButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/profile')} // Or your desired route
      className={`flex items-center text-black gap-2 px-4 py-2 rounded-full cursor-pointer text-sm font-medium bg-white/20  hover:bg-white/30`}
    >
  <img src={assets.badgeIcon} alt='icon' className='h-9'/>
      Profile
    </button>
  );
};

export default UserButton;

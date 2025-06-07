import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const RoomCard = ({room,index}) => {
  return (
<Link to={'/rooms' + room} onClick={scrollTo(0,0)} key={index} >
  <div className="p-4 bg-white rounded-lg shadow-sm max-w-100">
    <img className="rounded-md max-h-50 w-full object-cover" src="https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=400" alt="officeImage"/>
    <p className="text-gray-900 text-xl font-semibold ml-2 mt-2">Master Bedroom</p>
    <p className="text-gray-500 text-sm my-3 ml-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore..</p>
</div>
</Link>
  )
}

export default RoomCard

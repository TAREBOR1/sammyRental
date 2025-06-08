import React, { useEffect } from 'react'
import { assets, facilityIcons, roomsDummyData } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import StarRating from '../../components/client/StarRating'


const AllRooms = () => {
   useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top when the component mounts
    }, []);
    const navigate=useNavigate()
  return (
    <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32'>
        <div>
            <div className='flex flex-col items-start text-left'>
                <h1 className='font-nunito text-4xl md:text-[40px]'>Apartments</h1>
                <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>Take Advantage of our limited offer and have a luxury stay</p>
            </div>

            {roomsDummyData.map((room)=>{
                return <div key={room._id} className='flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0'>
                 <img onClick={()=>(navigate(`/rooms/${room._id}`),scrollTo(0,0))} src={room.images[0]} alt='room image' title='view Apartment details' className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer'/>
                  <div className='md:w-1/2 flex flex-col gap-2'>
                    <p className='text-gray-800 text-3xl font-nunito cursor-pointer' onClick={()=>(navigate(`/rooms/${room._id}`),scrollTo(0,0))}>{room.hotel.name}</p>
                    <div className='flex items-center'>
                      <StarRating/>
                      <p className='ml-12'>200+ reviews</p>
                    </div>
                    <div className='flex items-center gap-1 text-gray-500 mt-2 text-sm'>
                        <img src={assets.locationIcon} alt="location icon" />
                        <span>{room.hotel.address}</span>
                    </div>
                    {/* room amenities */}
                    <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                        {room.amenities.map((item,index)=>{
                            return <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70'>
                                <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                                <p className='text-xs'>{item}</p>
                            </div>
                        })}
                    </div>
                    {/* apartment price per night */}
                    <p className='text-xl font-medium text-gray-700'>${room.pricePerNight}/night</p>
                  </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default AllRooms

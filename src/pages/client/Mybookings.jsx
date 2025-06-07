import React, { useState } from 'react'
import Title from '../../components/client/Title'
import { assets, userBookingsDummyData } from '../../assets/assets'

const Mybookings = () => {
    const [booking,setBooking]=useState(userBookingsDummyData)
  return (
    <div className='py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32'>
      <Title title='My bookings' subTitle='Easily manage your past, current and upcoming aprtment reservation in one place . plan your trips seemlessly in one click' align='left'/>
     <div className='max-w-6xl mt-8 w-full text-gray-800'>

      <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3'>
           <div className='w-1/3'>Apartment</div>
           <div className='w-1/3'>Date & Timing</div>
           <div className='w-1/3'>Payment</div>
      </div>
          {booking.map((book)=>{
            return <div key={book._id} className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t'>
                {/* Apartment details */}
                <div className='flex flex-col md:flex-row '>
                    <img src={book.room.images[0]} alt="hotel-img" className='min-md:w-44 rounded shadow object-cover' />
                    <div className='flex flex-col  gap-1.5  max-md:mt-3 min-md:ml-4'>
                        <p className='font-nunito text-2xl'>{book.hotel.name}</p>
                        <div className='flex items-center gap-1 text-sm text-gray-500'>
                            <img src={assets.locationIcon} alt="location"  />
                            <span>{book.hotel.address}</span>
                        </div>
                        <div className='flex items-center gap-1 text-sm text-gray-500'>
                            <img src={assets.guestsIcon} alt="guest-icon"  />
                            <span>Guests:{book.guests}</span>
                        </div>
                        <p className='text-base'>Total:${book.totalPrice}</p>
                    </div>
                </div>
                {/* date and timing */}
                <div className='flex flex-row md:items-center md:gap-12 mt-3 gap-8'>
      <div>
        <p>Check-In:</p>
        <p className='text-gray-500 text-sm'>{new Date(book.checkInDate).toDateString()}</p>
      </div>
      <div>
        <p>Check-Out:</p>
        <p className='text-gray-500 text-sm'>{new Date(book.checkOutDate).toDateString()}</p>
      </div>
                </div>
                {/* payment */}
                <div className='flex flex-col items-start  justify-center pt-3'>
<div className='flex items-center gap-2'>
    <div className={`h-3 w-3 rounded-full ${book.isPaid ? 'bg-green-500':"bg-red-500"}`}></div>
    <p className={`text-sm ${book.isPaid ? 'text-green-500':"text-red-500"}`}>
        {book.isPaid ? 'paid' :'unpaid'}
    </p>

</div>
{!book.isPaid && ( <button className='px-4 py-1.5 mt-4 text-xs border border-gray-400 rounded-full hover:bg-gray-50 transition-all cursor-pointer'>
    Pay now
</button>)}
                </div>
                 </div>
          })}
          </div>
    </div>
    
  )
}

export default Mybookings

import React from 'react'
import { roomsDummyData } from '../../assets/assets'
import RoomCard from './RoomCard'
import Title from './Title'


const Bedrooms = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
        <Title title='Sammy Homes Bedroom' subTitle="spacious bedroom will make you feel in paradise"/>
      <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
        {roomsDummyData.slice(0,4).map((room,index)=>{
            return <RoomCard key={index}/>
        })}
      </div>
    </div>
  )
}

export default Bedrooms

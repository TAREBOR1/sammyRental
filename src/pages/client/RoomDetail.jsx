import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, facilityIcons, roomCommonData, roomsDummyData,  } from "../../assets/assets";
import StarRating from "../../components/client/StarRating";


const RoomDetail = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const room = roomsDummyData.find((room) => room._id === id);
    room && setRoom(room);
    room && setMainImage(room.images[0]);
  }, []);
  return (
    room && (
      <>
      <div className="relative z-0 py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* room details */}
        <div className="flex flex-col  md:flex-row items-start md:items-center gap-2">
          <h1 className="text-3xl md:text-4xl font-nunito">
            {room.hotel.name}{" "}
            <span className="font-Inter text-sm">({room.roomType})</span>
          </h1>
          <p className="text-xs font-Inter py-1.5 px-3 text-white bg-orange-400 rounded-full">
            20% OFF
          </p>
        </div>
        {/* room rating */}
        <div className="flex items-center gap-1 mt-2">
          <StarRating />
          <p className="ml-2">200+ reviews</p>
        </div>

        {/* room address */}
        <div className="flex items-center gap-1 text-gray-500 mt-2">
          <img src={assets.locationIcon} alt="location icon" />
          <span>{room.hotel.address}</span>
        </div>

        {/* room images */}

        <div className="flex flex-col lg:flex-row mt-6 gap-6">
          <div className="lg:w-1/2 w-full">
            <img
              src={mainImage}
              alt="room-image"
              className="w-full rounded-xl shadwo-lg object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
            {room?.images.length > 1 &&
              room.images.map((image, index) => {
                return (
                  <img
                    onClick={() => {
                      setMainImage(image);
                    }}
                    key={index}
                    src={image}
                    alt="room-image"
                    className={`w-full rounded-xl shadow md object-cover cursor-pointer ${
                      mainImage === image && "outline-3 outline-orange-400"
                    }`}
                  />
                );
              })}
          </div>
        </div>

        {/* room highlights */}

        <div className="flex flex-col md:flex-row md:justify-between mt-10">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-nunito">
              Experience luxury like never before
            </h1>
            <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
              {room.amenities.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100"
                  >
                    <img
                      src={facilityIcons[item]}
                      alt={item}
                      className="w-5 h-5"
                    />
                    <p className="text-xs">{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* room price */}
        <p className="text-2xl font-medium">${room.pricePerNight}/night</p>
        </div>


        {/* check in check out form */}

        <form className="flex flex-col  md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl ">
          <div className="flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500">
                   <div className="flex flex-col">
                    <label htmlFor="checkInDate" className="font-medium">Check-In</label>
                    <input type="date" id="checkInDate" placeholder="Check-In " className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none " required />
                   </div>
                    <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>
                   <div className="flex flex-col">
                    <label htmlFor="checkOutDate" className="font-medium">Check-Out</label>
                    <input type="date" id="checkOutDate" placeholder="Check-Out " className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none " required />
                   </div>
                   <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>
                   <div className="flex flex-col">
                    <label htmlFor="guests" className="font-medium">Guests</label>
                    <input type="number" id="guests" placeholder="0" className="max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none" required />
                   </div>
          </div>
          <button type="submit" className="bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer">
            Check Availability
          </button>
        </form>

        {/* common specifications */}
        <div className="mt-25 space-y-4">
          {roomCommonData.map((spec,index)=>{
            return <div key={index} className="flex items-start gap-2">
           <img src={spec.icon} alt={`${spec.title}-icon`} className="w-6.5" />
           <div>
            <p className='text-base'>{spec.title}</p>
            <p className="text-gray-500">{spec.description}</p>
           </div>
            </div>
          })}
        </div>

        <div className="max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aspernatur corporis, natus consequuntur eos eum et. Alias officiis molestias, ratione dolor placeat rerum ipsa? Optio asperiores soluta voluptatum dicta necessitatibus!</p>
        </div>

       

        {/* Apartment video clip */}
{/* Section heading */}
{/* Section heading */}
<h2 className="text-2xl md:text-3xl font-nunito mt-20 mb-6 text-center">
  Virtual Tour: See the Apartment in Action
</h2>

<div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-md group">
  <video
    id="roomVideo"
    className="w-full h-auto rounded-xl cursor-pointer"
    poster={mainImage}
    onClick={() => {
      const video = document.getElementById("roomVideo");
      const playBtn = document.getElementById("customPlayBtn");

      if (!video.paused) {
        // If playing, pause and revert
        video.pause();
        video.currentTime = 0;
        playBtn.classList.remove("opacity-0");
        playBtn.classList.add("opacity-100");
      }
    }}
  >
    <source src={assets.video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <button
    id="customPlayBtn"
    onClick={() => {
      const video = document.getElementById("roomVideo");
      const playBtn = document.getElementById("customPlayBtn");
      video.play();
      playBtn.classList.remove("opacity-100");
      playBtn.classList.add("opacity-0");
    }}
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 opacity-100 z-10"
  >
    <div className="w-16 h-16 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center shadow-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-white ml-1"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
      </svg>
    </div>
  </button>
</div>





          
      </div>
      </>
    )
  );
};

export default RoomDetail;

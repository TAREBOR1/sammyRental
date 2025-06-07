import React, { useState } from "react";
import Calendar from "./Calendar"; // Ensure this component is implemented properly

const HomeCalender = () => {

    const [selectedRoom, setSelectedRoom] = useState("Apartment A");

  const availabilityData = {
    "Apartment A": {
      "2025-06-05": "available",
      "2025-06-06": "booked",
      "2025-06-08": "available",
      "2025-07-01": "booked",
    },
    "Apartment B": {
      "2025-06-04": "booked",
      "2025-06-07": "available",
      "2025-06-10": "booked",
      "2025-07-02": "available",
    },
  };

  return (
    <section className="bg-gray-50 py-10 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        Room Availability
      </h2>

      <div className="flex justify-center mb-6">
        <select
          value={selectedRoom}
          onChange={(e) => setSelectedRoom(e.target.value)}
          className="text-base sm:text-lg border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-xs"
        >
          {Object.keys(availabilityData).map((room) => (
            <option key={room} value={room}>
              {room}
            </option>
          ))}
        </select>
      </div>

      <Calendar availability={availabilityData[selectedRoom]} />
    </section>
  );
}

export default HomeCalender

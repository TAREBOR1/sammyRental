import React, { useState } from 'react'

import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/client/Navbar'
import Home from './pages/Home'
import AllRooms from './pages/client/AllRooms'
import RoomDetail from './pages/client/RoomDetail'
import Mybookings from './pages/client/Mybookings'
import Footer from './components/client/Footer'
import Layout from './pages/admin/Layout'
import Addroom from './pages/admin/Addroom'
import Listroom from './pages/admin/Listroom'
import Dashboard from './pages/admin/Dashboard'
import NotFound from './pages/NotFound'

const App = () => {
    const location = useLocation()
  const adminDashboard = location.pathname.includes('/owner')

  return (
    <div className="relative z-0">
     {!adminDashboard && <Navbar /> }
       <div className="relative z-10 min-h-[70vh]">
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/rooms' element={<AllRooms />}/>
      <Route path='/rooms/:id' element={<RoomDetail/>}/>
      <Route path='/my-bookings' element={<Mybookings/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/owner' element={<Layout/>}>
  <Route index element={<Dashboard />}/>
  <Route path='add-room' element={<Addroom />}/>
    <Route path='list-room' element={<Listroom />}/>
      </Route>
     </Routes>
   </div>
       {!adminDashboard &&  <Footer/>}
    </div>
  )
}

export default App

import React from 'react'
import Hero from '../components/client/Hero'
import Bedrooms from '../components/client/Bedrooms'
import Testimonials from '../components/client/Testimonials'
import ExclusiveOffer from '../components/client/ExclusiveOffer'

import FAQSections from '../components/client/FAQsections'
import Newsletter from '../components/client/Newsletter'
import HomeCalender from '../components/client/HomeCalender'


const Home = () => {
  return (
    <>
    <Hero />
    <Bedrooms/>
    <ExclusiveOffer/>
    <Testimonials/>
    <HomeCalender/>
    <FAQSections/>
    <Newsletter/>
    </>
  )
}

export default Home

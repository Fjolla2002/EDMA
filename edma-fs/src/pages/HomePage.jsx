import React from 'react'
import About from '../components/HomeComponents/About/About'
import Specialization from '../components/HomeComponents/Specialization/Specialization'
import Clients from '../components/HomeComponents/Clients/Clients'
import Hero from '../components/HomeComponents/Hero/Hero'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <About />
      <Specialization/>
      <Clients/>
    </div>
  )
}

export default HomePage
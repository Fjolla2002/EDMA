import React from 'react'
import About from '../components/HomeComponents/About/About'
import Specialization from '../components/HomeComponents/Specialization/Specialization'
import Clients from '../components/HomeComponents/Clients/Clients'

const HomePage = () => {
  return (
    <div>
      <About />
      <Specialization/>
      <Clients/>
    </div>
  )
}

export default HomePage
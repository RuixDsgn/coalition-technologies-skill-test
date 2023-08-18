import React from 'react'
import Navbar from './Navbar'
import MoutainImg from './images/Mountains.jpeg'
import Layer from './images/Layer-627.png'

const Mountain = () => {
  return (
    <div className='image1-container'>
      <Navbar />
      <h1>LOSANGELES MOUNTAINS</h1>
      <img className='mountain-img' src={MoutainImg} alt="LA-Mountain" />
    </div>
  )
}

export default Mountain

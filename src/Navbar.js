import React from 'react'
import Logo from './images/Logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={Logo} alt="Logo" />
        <span className='span-1'>01. HISTORY</span>
        <span className='span-2'>02. TEAM</span>
    </div>
  )
}

export default Navbar
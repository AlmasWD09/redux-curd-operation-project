import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center items-center bg-gray-300 py-4 space-x-6'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/edit-user'}>Edit User</NavLink>
        <NavLink to={'/user-list'}>User list</NavLink>
    </div>
  )
}

export default Navbar
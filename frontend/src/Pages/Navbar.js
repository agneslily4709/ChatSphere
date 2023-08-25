<<<<<<< HEAD
import React from 'react'
import { NavBarContainer } from '../styles'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <>
    <NavBarContainer>
        <div className='navbar'>
            <h1>ChatSphere</h1>
            <div className='nav-items'>
            <button><Link to="/profile">Profile</Link></button>
            <button><Link to="/logout">Logout</Link></button>
            </div>
        </div>
    </NavBarContainer>
    </>
  )
}

=======
import React from 'react'
import { NavBarContainer } from '../styles'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <>
    <NavBarContainer>
        <div className='navbar'>
            <h1>ChatSphere</h1>
            <div className='nav-items'>
            <button><Link to="/profile">Profile</Link></button>
            <button><Link to="/logout">Logout</Link></button>
            </div>
        </div>
    </NavBarContainer>
    </>
  )
}

>>>>>>> 7884c5567a33a00e3bdf1ae0e1acec48e83242f2
export default Navbar
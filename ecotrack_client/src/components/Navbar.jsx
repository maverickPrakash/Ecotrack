import {Link} from "react-router-dom" 
import React, {useContext} from 'react'
import { AuthContext } from "../../context/AuthContext";
import '../styles/Navbar.css';
 
//edit where registration and login are not shown once logged in 
export default function Navbar() {
  const {isLoggedIn, logout} = useContext(AuthContext);
  return (
    <nav>
      <ul>
        <Link to='/'>EcoTrack</Link>
        <Link to='/Videos'>Videos</Link>

        <Link to='/carbonFootprintCalculator'>Carbon Footprint Calculator</Link>
        <Link to='/sustainabilityMap'>Local Sustainability Map</Link>
        <Link to='/about'>About Us</Link>
        <Link to='/challenges'>Challenges</Link>
        <Link to='/api/news'>News Feed</Link>
        <Link to='/feedback'>Feedback</Link>

        {!isLoggedIn && <a href="/register">Register</a>}
        {!isLoggedIn && <a href="/login">Login</a>}
        {isLoggedIn && <a onClick={logout}>Logout</a>}
        </ul>
    </nav>
  )
}

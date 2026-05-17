import React from 'react'
import { Link } from 'react-router-dom'
import About from '../comp/About'
import Login from '../comp/Login'
import Contact from '../comp/Contact'
const Navbar = () => {
    return (
        <ul>
            <Link to={"/"}><li>Home</li></Link>
            <Link to={"/login"}> <li>Login</li></Link>
            <Link to={"/contact"}><li>Contact</li></Link>
        </ul>
    )
}

export default Navbar
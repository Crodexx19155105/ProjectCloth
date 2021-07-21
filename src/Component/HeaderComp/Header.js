import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <div className="Header">

            <Link to="/" className="LogoContainer link">
                <img src={`${process.env.PUBLIC_URL}/logo.jpg`} width="100%" height="100%" />
            </Link>
            <div className="options_container">
            <Link to="/shop" className="link options">SHOP</Link>
            <Link to="/contact" className="link options">CONTACT</Link>
            <Link to="/signin" className="link options">SIGN-IN</Link>


            </div>
           
        </div>
    )
}

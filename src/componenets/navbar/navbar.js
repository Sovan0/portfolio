import React from 'react'
import "./navbar.css"
import { Link } from 'react-scroll'

const navbar = () => {
  return (
    <div className="n-wrapper" id="navbar">
        <div className="n-left">
            <h2 class="n-logo">Portfo<span>lio</span></h2>
            <span>toggle</span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <Link spy={true} to='navbar' smooth={true}>
                        <li>Home</li>  
                    </Link>
                    <Link spy={true} to='skills' smooth={true}>
                        <li>Skills</li>
                    </Link>
                    <Link spy={true} to='about' smooth={true}>
                        <li>About</li>
                    </Link>
                    <Link spy={true} to='portfolio' smooth={true}>
                        <li>Portfolio</li>
                    </Link>
                    <Link spy={true} to='review' smooth={true}>
                        <li>Review</li>
                    </Link>
                    <button className="button n-button">Contact</button>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default navbar
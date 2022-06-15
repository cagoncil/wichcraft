import React from 'react';
import './Navbar.css';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
  	<div className="Navbar">
  		<a href="#home">Home</a>
		<a href="#about">About</a>
		<a href="#contact">Contact</a>
		<a href="#about">Order</a>
		<FontAwesomeIcon className="Navbar-collapse" icon={faBurger}/>
  	</div>
  );
}

export default Navbar;
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { siteLogo } from "../../global";
import {HiOutlineMenuAlt3} from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  const handleNavbar = () => setToggleMenu(!toggleMenu);
  function handleClick(link){
  
    navigate(link);
    }
  return (
    <nav className='navbar' id = "navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb' style= {{ marginTop: '-31px' }}>
          <Link to = "/book" className='navbar-brand flex'>
          <img src={siteLogo.logo} alt={siteLogo.alt} />
            
          </Link>
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <li to = "book" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1' style={{margin: '-50px', padding: '10px' }} onClick={() => handleClick('/')}>Home</li>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
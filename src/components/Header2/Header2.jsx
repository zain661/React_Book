import React from 'react';
import Navbar from "../Navbar/Navbar";
//import SearchForm from "../SearchForm/SearchForm";
import "./Header2.css";
import SearchForm from '../SearchForm/SearchForm';
import { useNavigate } from 'react-router-dom';
const Header2 = () => {
  const navigate = useNavigate();
  function handleClick(link){
  
    navigate(link);
    }
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white' style={{margin: '0px auto', padding: '1px', color: 'white'}}>
              <div style={{marginTop : '100px'}}>
              <h2 className=''>find your book of choice.</h2><br />
              <button onClick={() => handleClick('/RecommenderedBooks')}>Recommended Books</button>
             <SearchForm/>
              </div>
               
            </div>
        </header>
    </div>
  )
}


                

export default Header2
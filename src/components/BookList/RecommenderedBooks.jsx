import React from 'react';
import { Link , useLocation} from 'react-router-dom';
import "./BookList.css";
import Navbar from '../Navbar/Navbar';
import Book2 from './Book2';
import { useGlobalContext } from '../../context.';

const RecommenderedBooks = () => {
  
  const {books2} = useGlobalContext();
  console.log("zayn")
  console.log(books2)
  return (
    <section className='booklist'>
      <Navbar/>
      <div className='container'>
        <div className='section-title'>
          <h2>Recommendered Books</h2>
        </div>
        <div className='booklist-content grid'>
          {
            books2?.map((item) => {
              return (
                <Book2 itemData={item} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default RecommenderedBooks
import React from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";

const RecommenderedBooks = () => {
  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src = "" alt = "cover" />
      </div>
      <div className='book-item-info text-center'>
        <Link to ="">
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>"zzzzzzzzzzzzzz"</span>
          </div>
        </Link>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>"fffffffffffff"</span>
        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Total Editions: </span>
          <span>""</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>""</span>
        </div>
      </div>
    </div>
  )
}

export default RecommenderedBooks
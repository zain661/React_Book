import React from 'react';
//import LoaderImg from "../../images/loader.svg";
import "./Loading.css";

const Loading = () => {
    const LoaderImg = "../images/loader.svg"
  return (
    <div className='loader flex flex-c'>
      <img src = {LoaderImg} alt = "loader" />
    </div>
  )
}

export default Loading
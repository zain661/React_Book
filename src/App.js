import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import AOS from 'aos';
import { useEffect } from "react";
import './assets/css/aos.css';
import './assets/css/margins-paddings.css';
import headerData from  './data/header.json'
function ScrollToTop(){
  const {pathname} = useLocation();
  useEffect(()=> {
    window.scrollTo(0,0);
  }, [pathname]);
  return null;
}
function App(){
  const {header} = headerData;
  useEffect(()=> {
    AOS.init();
    AOS.refresh();
  },[])
 return(
  
  
      <div className="
      section-wrapper">
        <div id="preLoader"></div>
        <BrowserRouter>
        <ScrollToTop/>
          <Routes>
            <Route path="/" element={<MainPage header = {header}/>}/>
          </Routes>
        
        </BrowserRouter>
      </div>
  );
}

export default App;

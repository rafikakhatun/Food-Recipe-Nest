
import { useEffect } from 'react'
import './App.css'
import Footer from './component/Footer'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import Recipe from './component/Recipe'
import Subscribe from './component/Subscribe'
import WhatCook from './component/WhatCook'

import AOS from 'aos';
import 'aos/dist/aos.css';




function App() {


useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,      
    });
  }, []);
  
  

  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <WhatCook></WhatCook>
    <Recipe></Recipe>
    <Subscribe></Subscribe>
    <Footer></Footer>


     
    </>
  )
}

export default App

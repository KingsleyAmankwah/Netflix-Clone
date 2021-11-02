import React from 'react';
import Header from './Components/Header'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import Faq  from './Components/Faq';
import './App.css';

function App() {
  return ( 
    <div className = "App" >

      <Header/>
      <Cards/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from "./components/CardComponents/CardContainer";
import Footer from "./components/FooterComponents/Footer";

function App() {
  return (
    <div className="app-container">
      <HeaderContainer />
      <CardContainer />
      <Footer /> 
    </div>
  );
};

export default App;
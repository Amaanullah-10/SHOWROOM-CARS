import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import "tailwindcss/tailwind.css"
import { Layout, Typography, Space } from 'antd';
import { Ferraris,Home,NavBar,SUV,Tesla,LAMBOS } from './components';
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <NavBar/>
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/ferraris" element={<Ferraris />}/>
              <Route path="/suv" element={<SUV />}/>
              <Route path="/tesla" element={<Tesla />}/>
              <Route path="/lambos" element={<LAMBOS />}/>
            </Routes>
          </div>
        </Layout>
      </div>
    </div>
  )
}

export default App;
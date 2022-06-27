
import './App.css';
// import { Button,Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import API from './utils/API.js';
import HeatMap from './componets/heatmap1.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeatMapPage from './pages/heatMap';
import HomePage from './pages/homePage';
import { StoreProvider } from './utils/GlobalState';








function App() {


  return (


<Router>
        <div>
          <StoreProvider>
            {/* <Nav /> */}
            
            <Routes>
              <Route 
                path="/" 
                element={<HomePage />} 
              />
               <Route 
                path="/heatmap" 
                element={<HeatMapPage />} 
              />
           
              
            </Routes>
            
          </StoreProvider>
          
        </div>
      </Router>

  
  );
}

export default App;

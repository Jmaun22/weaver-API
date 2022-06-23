
import './App.css';
// import { Button,Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import API from './utils/API.js';
import HeatMap from './componets/heatmap1.js';







function App() {

  const [value, setValue] = useState();
 



const handleSubmit = (e) => {
    console.log('clicked api')
    e.preventDefault();
    // searchapi();
 searchapi()


    console.log(JSON.stringify(value))
  };

  const searchapi = (query) =>
  API.search(query)
    .then((res) => setValue(JSON.stringify(res)))
    .catch((err) => console.log(err));

  return (
    <div className="App">

    <form>

      <input type='text'
      className='input' 
      value={value}
      placeholder='Add todo...' 
      onChange={e => setValue(e.target.value)}/>


      
    </form>
  <HeatMap/>
    <div>


    </div>
    <button onClick={ handleSubmit}>Search</button>

         

    </div>
  
  );
}

export default App;

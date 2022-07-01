import API from '../utils/API';
import HeatMap from '../componets/heatmap1';
import React, {useState} from 'react';



function HeatMapPage() {

    const [value, setValue] = useState();
   
  
  
  
  const handleSubmit = (e) => {
      console.log('clicked api')
      e.preventDefault();
      
   searchapi()
  
  
      console.log(JSON.stringify(value))
    };
  
    const searchapi = (query) =>
    API.search(query)
      .then((res) => setValue(JSON.stringify(res)))
      .catch((err) => console.log(err));
  
    return (
      <div >
  
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

      <p></p>
      <button onClick={ handleSubmit}>Search</button>
  
           
  
      </div>
    
    );
  }

  export default HeatMapPage

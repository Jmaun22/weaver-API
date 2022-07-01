import API from '../utils/API';
import HeatMap from '../componets/heatmap1';
import React, {useState, useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState';



function HeatMapPage() {

    const [value, setValue] = useState();

    const {usersData} = useContext(GlobalContext);
    
    const { addUserData } = useContext(GlobalContext);
   
  
  
  
  const handleSubmit = (e) => {
      console.log('clicked api')
      console.log(usersData);
      e.preventDefault();
      
   searchapi()
  
  
      console.log(JSON.stringify(value))
    };
  
    const searchapi = (query) =>
    API.searchOne(query)
      .then((res) => setValue(Object.values(JSON.parse(res.data.mousehover))))

        
     
      .catch((err) => console.log(err));



      function filterX() {
        console.log(value);
        for (var i = 0; i < 10; i++) {

          let { x, y, time } = value[i]


          console.log(x, y, time)
      
  
        }
    

// use values array or:

      }
  
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
      <button onClick={filterX}>Filterx</button>
      <button onClick={ handleSubmit}>Search</button>

      <button onClick={() => addUserData('jim')}>addUser</button>
  
           
  
      </div>
    
    );
  }

  export default HeatMapPage

import React, {useEffect, useState} from "react";
import { useStudentContext } from '../Contextex/StudentContext';
import API from '../utils/API';
// import ReactDOM from "react-dom";
import h337 from "heatmap.js";

// import "./styles.css";

function HeatMap() {
  const [value, setValue] = useState('rwer');
  const [pointer, setPoints] = useState([]);
  // const { students} = useStudentContext();
      // now generate some random data

      var max = 0;
      var width = 840;
      var height = 400;
      var len = value.length;
      var points = [];
  

  const handleSubmit = (e) => {
      console.log('clicked api')
      // console.log(students);
      e.preventDefault();
      
   searchapi()

  
  
      console.log(JSON.stringify(value.length))
      for (var i = 0; i < value.length; i++) {
        let { x, y, time } = value[i]
        var val = 50;
        max = Math.max(max, val);

        var point = {
          x: Math.round(x*width/10000),
          y: Math.round(y*height/10000),
          value: val
         };
         console.log(point)
         points.push(point);

         console.log(points )
        
         setPoints(points)

    


        console.log(pointer)
        console.log(pointer + 'pointer')
        
    

      }
    



    };
  
    const searchapi = (query) =>
    API.searchOne(query)
      .then((res) => setValue(Object.values(JSON.parse(res.data.mousehover))))

        
     
      .catch((err) => console.log(err));

  useEffect(() => {
    var heatmapInstance = h337.create({
      // only container is required, the rest will be defaults
      container: document.querySelector('.App')
    });

   
  //   while (len--) {
  //    var val = Math.floor(Math.random()*100);
  //    max = Math.max(max, val);
  //    var point = {
  //     x: Math.floor(Math.random()*width),
  //     y: Math.floor(Math.random()*height),
  //     value: val
  //    };
  //    points.push(point);
  //    console.log(points)
  //  }
   // heatmap data format
  var data = {
    max: max,
    data: pointer
  };
  console.log(data)

  // if you have a set of datapoints always use setData instead of addData
  // for data initialization
  heatmapInstance.setData(data);
 })



  return (
    <>
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
    <button onClick={handleSubmit}>HandleAPi</button>
    </>
  );
}

export default HeatMap

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

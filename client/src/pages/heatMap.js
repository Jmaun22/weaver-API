import React, {useEffect, useState} from "react";
// import ReactDOM from "react-dom";
import h337 from "heatmap.js";
import API from '../utils/API';


// import "./styles.css";

function HeatMap() {


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

  useEffect(() => {
    var heatmapInstance = h337.create({
      // only container is required, the rest will be defaults
      container: document.querySelector('.App')
    });
    // now generate some random data
    var points = [];
    var max = 0;
    var width = 840;
    var height = 400;
    var len = 200;

  //   while (len--) {
  //    var val = Math.floor(Math.random()*100);
  //    max = Math.max(max, val);
  //    var point = {
  //     x: Math.floor(Math.random()*width),
  //     y: Math.floor(Math.random()*height),
  //     value: val
  //    };
  //    points.push(point);
  //  }

  //  add x and y cooridated to the points


   // heatmap data format
  var data = {
    max: max,
    data: points
  };
  // if you have a set of datapoints always use setData instead of addData
  // for data initialization
  heatmapInstance.setData(data);
 })



  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={handleSubmit}>Generate HeatMap</button>
    </div>
  );
}

export default HeatMap

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
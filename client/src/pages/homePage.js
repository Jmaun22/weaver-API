import React, {useEffect, useState} from "react";
import { StoreProvider } from '../utils/GlobalState';

function HomePage() {



  return (
    <StoreProvider> 
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button >Generate HeatMap</button>
    </div>
    </StoreProvider>
  );
}

export default HomePage

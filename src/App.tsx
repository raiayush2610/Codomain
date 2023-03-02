import React from "react";
import { BrowserRouter } from "react-router-dom";

import { getApp } from "./utilis/helper";
const  App:React.FC =()=>{
  const CurrentApp = getApp();
  // console.log({app});
  
  return(
    <div>
      <BrowserRouter>
        <CurrentApp/>
      </BrowserRouter>
    </div>
  )
}
export default App



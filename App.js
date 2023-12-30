// import logo from './logo.svg'
 //import React from "react";
 //import  Anb from './pricecard'
 //import Anban from './anban'
 //import Raghul from './raghul'
 //import TodoApp from './cgp1'

 //import {Button} from 'react-bootstrap';
 import React from "react";
 import { BrowserRouter, Switch } from "react-router-dom";
 import All from "./Router";
 import FullStack from "./Fullstack";
 import Counter from "./Like";
 import Amazon from "./amazon"
 import { Routes, Route, Link, useNavigate } from "react-router-dom"
 /* import Amazon from './amazon' */
 
 /* import Football from "../public/Football"; */
/* import Userlist from "./Profile"; */
/*  import Shoppingcard from "./shcardcompo/shopcard/Shoppingcard";
 import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
 */
/* import  Counter  from './Like' */


    
    function App() {
            return (
        <div>
        
          
          {/* <Anb/>
         {/*  <Anban/>
          <Raghul/> */} 
          {/* <Router>
          <Shoppingcard/>
          </Router>
           */}
          {/* <Userlist/> */}
          
        {/* <Counter/> */}
      {/* <Football/> */}
      {/* <Amazon/> */}
         <Routes>

        <Route path="/" element={<All/>}/>
        
       
         <Route path="/like" element={<Counter/>}/>
        <Route path="/amazon" element={<Amazon/>}/>
        <Route path="/Fullstack" element={<FullStack/>}/>
        
        
         </Routes>
          
          
          

        </div>
       
     );
    }
    
  


export default App;

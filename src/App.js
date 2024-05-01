
import Amazon from './components/amazon';
import Counter from './components/Like';
import FullStack from './components/Fullstack';
import All from './components/Router'
import './App.css';
import React from "react";
 import { BrowserRouter, Switch } from "react-router-dom";
 import { Routes, Route, Link, useNavigate } from "react-router-dom"

function App() {
  return (
    <div className="App">

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

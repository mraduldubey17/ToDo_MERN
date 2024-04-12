import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import About from "./Components/About/About.jsx";
import { BrowserRouter as Router,Routes,Route }from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp.jsx";
import SignIn from "./Components/SignUp/SignIn.jsx";
import ToDo from "./Components/ToDo/ToDo.jsx";
import { useDispatch } from "react-redux";
import { authActions } from "./store/index.js";
//import ToDoCards from "./Components/ToDo/ToDoCards.jsx";
const App=()=>{
  const dispatch=useDispatch();
  useEffect(()=>{
    const id=sessionStorage.getItem("id");
    if(id){
      dispatch(authActions.login());
    }
  },[]);
  return (
  <div>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/todo" element={<ToDo/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
      </Routes>
    </Router>
    
    
    <Footer/>
    </div>
 
  );
};

export default App;
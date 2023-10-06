import React from "react";
import Header from "./Layout/Header";
import Main from "./Layout/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerLogin from "./Pages/Auth/CustomerrLogin";
import CustomerSignup from "./Pages/Auth/CustomerSignup";

function App() {
  return (
    
     <BrowserRouter>
      <Header />
      <div className="Main-Container md:max-w-5xl mx-auto ">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/customer/login" element={<CustomerLogin />} />
            <Route path="/customer/signup" element={<CustomerSignup />} />
          </Routes>
      
      </div>
      
      </BrowserRouter>
    
  );
}

export default App;

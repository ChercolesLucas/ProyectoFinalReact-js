import React from "react"
// import react router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//import pa+ges
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import CheckoutPage from './pages/CheckoutPage'; 
//import components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        <Sidebar />
        </Router>
        <Footer/>
      </div>
    </>
  );
}

export default App

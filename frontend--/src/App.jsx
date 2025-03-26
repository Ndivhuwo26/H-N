import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Collection from './pages/Collection/Collection'
import ProductDetail from './pages/ProductDetails/ProductDetails'
import Navbar from "./components/Navbar/Navbar.jsx"; // Or .js


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/category/:category' element={<Collection />} />
        <Route path='/product/:productId' element={<ProductDetail />} />
      </Routes>
    </div>
  )
}

export default App
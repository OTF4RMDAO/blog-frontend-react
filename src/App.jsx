import Auth from "./components/authpage/Auth"
import { useState } from "react"
import Home from "./components/homepage/Home"
import Navigationbar from "./components/header/Navigationbar"
import { Route, Routes } from "react-router-dom"
import Blog from "./components/blogpage/Bloglist"
import Contact from "./components/contactpage/Contact"
import About from "./components/aboutpage/About"
import Product from "./components/productpage/Product"
import CreatePost from "./components/blogpage/CreatePost"
import CreateProduct from "./components/productpage/CreateProduct"
import SinglePost from "./components/blogpage/SinglePost"

const App = () => {
  //  const [isLoggedIn, setIsLoggedIn] = useState(false)

  

  return (
    <>
      <Navigationbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/products" element={<Product />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blog/:id" element={<SinglePost />} />
        <Route path="/create-Post" element={<CreatePost />} />
        <Route path="/create-Product" element={<CreateProduct />} />
        
      </Routes>
      {/* {isLoggedIn ? (<Home setLogin={setIsLoggedIn}/>) : (<Auth setLogin={setIsLoggedIn}/>)} */}
    </>
  )
}

export default App
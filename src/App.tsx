import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Cart from "./pages/Cart";

interface Products {
  // map(arg0: (item: any) => JSX.Element): import('react').ReactNode;
  name: string;
  email: string;
  phone: number;
}

function App() {
  let [CartList, setCartList] = useState<{
    id: number;
    title: string;
    price: number;
    rating: { rate: number; count: number };
    image: string;
    category: string;
    description: string;
  }[]
| null>([]);
  
  let getCart = (
    CartItems:
      | {
          id: number;
          title: string;
          price: number;
          rating: { rate: number; count: number };
          image: string;
          category: string;
          description: string;
        }[]
      | null
  ) => setCartList( CartItems );
  const [Products, setProducts] = useState(null);

  useEffect(() => {
    const genRandomKey = async () => {
      const result = await axios("https://fakestoreapi.com/products");

      setProducts(result.data);
    };

    genRandomKey();
  }, []);
  console.log(Products);
  return (
    <Router>
      <Navbar products={Products} CartList={CartList} />
      

      {/* <h1>{Products[1].name}</h1> */}
      <Routes>
        <Route path="/" element={<Home products={Products} getCart={getCart} />} />
        <Route path="/users" element={<Users />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart CartList={CartList}/>} />
      </Routes>
    </Router>
  );
}

export default App;

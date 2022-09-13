import React from 'react'


import { Routes, Route, } from "react-router-dom";
import CartItem from "./CartItem";

import Electronics from "./Electronics";
import {  useState } from "react";
import HomeAndFurniture from "./HomeAndFurniture";
import MensFashion from "./MensFashion";
// import Counter from "./component/Counter";
// import { v4 as uuid } from 'uuid';
import Navbar2 from './Navbar2'

function NavbarTest() {

  const [cart, setCart] = useState(0);
  const [cartItem, setCartItem] = useState([]);
  // const [localStorageData, setLocalStorage] = useState([]);

  function handleAdd(items) {
    setCart(cart + 1);
 
    setCartItem([...cartItem, items]);
  }
  function handleAddItem(items) {
    setCart(cart + 1);
   
  }
  function removeFromCart(item) {
    setCart(cart - 1);
    
    var removedItems = cartItem.filter((el) => el.id !== item);

    setCartItem(removedItems);
  }

  return (
    <div>
      yes
    <Navbar2 cart={cart} /> 

     <Routes>
      <Route path="./Navbar2" element={<Navbar2 />} />
      <Route
        path="cartItem"
        element={
          <CartItem cartItem={cartItem} handleAdd={handleAddItem} removeFromCart={removeFromCart} />
        }
      />
     
      <Route
        path="./Electronics"
        element={<Electronics handleAdd={handleAdd} cartItem={cartItem} />}
      />
      <Route
        path="./furniture"
        element={<HomeAndFurniture handleAdd={handleAdd} />}
      />
      <Route
        path="./mensFashion"
        element={<MensFashion handleAdd={handleAdd}  cartItem={cartItem}/>}
      />
    </Routes>
 
  </div>
  )
}

export default NavbarTest
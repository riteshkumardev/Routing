import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import data from "./data.json";
import Products from "./Products";
import "./style.css";
function Electronics({ handleAdd,cartItem }) {
  const mobile = data.electronics;

  useEffect(()=>{
    // let jsonData=JSON.stringify(cartItem);
 
    //    localStorage.setItem("items",jsonData)
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>console.log(json))
   },[])
  return (
    <>
        <Grid container spacing={2}  className="item">
      {mobile.map((items, i) => (
<div className="productdiv">
       
       <Products  title={items.title}  image={items.image} price={items.Price} handleAdd={handleAdd}   />
     </div>
        
        ))}
        </Grid >
    </>
  );
}
export default Electronics;

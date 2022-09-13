import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import data from "./data.json";
import Products from "./Products";
import "./style.css";
function MensFashion({ handleAdd,cartItem }) {
  const mensFashion = data.mens;

  useEffect(()=>{
    let jsonData=JSON.stringify(cartItem);
 
       localStorage.setItem("mens",jsonData)
 
   },[cartItem])
  return (
    <>
        

<Grid container spacing={2}  className="item">
      {mensFashion.map((items, i) => (
<div className="productdiv" key={i}>
       
       <Products  title={items.title}  image={items.image} price={items.Price} handleAdd={handleAdd}   />
     </div>
        
        ))}
        </Grid >
    </>
  );
}
export default MensFashion;

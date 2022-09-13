import { Grid } from "@mui/material";
import React from "react";
import data from "./data.json";
import Products from "./Products";
import "./style.css";
function HomeAndFurniture({ handleAdd }) {
  const furniture = data.homeAndFurniture;

  return (
    <>
   
     

     <Grid container spacing={2}  className="item">
      {furniture.map((items, i) => (
<div className="productdiv" key={i}>
       
       <Products  title={items.title}  image={items.image} price={items.Price} handleAdd={handleAdd}   />
     </div>
        
        ))}
        </Grid >
    </>
  );
}
export default HomeAndFurniture;

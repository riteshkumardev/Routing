import { Grid } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";

import "./style.css"
function CartItem({ cartItem, removeFromCart,handleAdd}) {
 
  return (
    <Grid sx={{marginTop:"100px",marginLeft:"50px",marginRight:"50px"}} container spacing={2} >
      
      {cartItem.map((items) => (
       
   
    <Grid item xs={3} sx={{marginRight:"50px",marginBottom:"50px"}} id={items.id} className="cartitem">
     <div className="products">
      <img  style={{width:"180px",height:"210px",marginLeft:"10px",padding:"5px"}} src={items?.image} />
      <div>
      <h5 style={{marginLeft:"15px",marginTop:"50px",color:"blue"}}>

          {items?.title}
      </h5>
        
       <h3 style={{marginLeft:"15px",marginTop:"10px",color:"blue"}}>

         {items?.price}
       </h3>
      
      </div>
     </div>
      
       
   
      <div className="btn">

        <button  onClick={handleAdd} >+</button>
      <button onClick={()=>removeFromCart(items.id)} >-</button>
      </div>
        
     
    </Grid>
      ))}
    </Grid>
  );
}
export default CartItem;

import * as React from 'react';

import { v4 as uuid } from 'uuid';
import { Grid } from '@mui/material';

export default function Products({image,title,price,handleAdd}) {
  return (
    <Grid  container spacing={2}
    >
      <Grid item xs={6}> 

     <div style={{marginTop:"20px"} }>
      <img style={{width:"250px",height:"280px" ,marginLeft:"25px",marginTop:"20px" }} src={image}/>
     </div>
      
        <div className='title'  >
          {title}
        </div>
        <div className='price' >
         {price}
        </div>
   
      
        <button className="addToCartBtn"   onClick={() =>
              handleAdd({
                title: title,
                image: image,
                price: price,
                id:uuid()
                
              })
            } >ADD TO CART</button>
        
      </Grid>
     
    </Grid>
  );
}

import React from 'react'
import { Link } from 'react-router-dom'
import "./rout.css"

function Navbar() {
  return (
    <div className='navabar'>

<Link to="/Home"><h3 className='h3'>Home</h3></Link> 
<Link to="/TodoList"><h3 className='h3'>Todo List</h3></Link> 
<Link to="/Navbar2.jsx"><h3 className='h3'>Shoping Cart</h3></Link> 
<Link to="/Form"><h3 className='h3'>Form Handleing</h3></Link> 
<Link to="/CardForm"><h3 className='h3'>Debit Card</h3></Link> 
<Link to="/ApiGet"><h3 className='h3'>Api Calling</h3></Link> 
<Link to="/Counter"><h3 className='h3'>Counter</h3></Link> 



       


    </div>
        
  )
}

export default Navbar
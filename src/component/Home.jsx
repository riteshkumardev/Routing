import React from 'react'
import "./home.css"
// import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='Homemaindiv'>  
    <br />
    <h1 className='hader1'>My Prectice Set</h1>
      <ul>
        <li className='Todo'><h2>Todo List</h2></li>
        <li className='Shoping'><h2>Shoping Cart</h2></li>
        <li className='Form'><h2>Form Handleing</h2></li>
        <li className='Debit'><h2>Debit Card</h2></li>
        <li className='Api'><h2>Api Calling</h2></li>
        <li className='Counter'><h2>Counter</h2></li>
      </ul>
      

       
        
    </div>
  )
}

export default Home
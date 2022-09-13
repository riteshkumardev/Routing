import React, { useState } from 'react'
import {v4 as uuid} from "uuid"
import "./todo.css"
function TodoList() {
    const obj={
        Texefillll:""
    }
const [data,setData]=useState(obj)
console.log("data",data);
const [item,setItem]=useState([])
console.log("item",item);
    function handaleAdd(){
setItem([...item,data])
setData(obj)
    }
    function handleChange(e){
        const {name,value}=e.target
setData({...data,[name]:value,id:uuid ()})

    }
    function handledelete(deleteId){
const filter =item.filter((item)=>item.id !==deleteId)
setItem(filter)
    }
  return (
    <div>    <h1 className='hh1'>TodoList</h1>
<input className='input' type="text" name='Texefillll' value={data.Texefillll} placeholder="Enter Your Name" onChange={handleChange} />
<button className='Addbtn' onClick={handaleAdd} >ADD</button>

<div> 
    <table className='table' >
        <tr>
            <th>List</th>
            <th>Action</th>
        </tr>
    {item.map((e)=>
    <>
    <tr >
    <td  className='trTd'>{e.Texefillll}</td>
    <td  className='trTdbtn'><button className='DeleBtn' onClick={()=>handledelete (e.id)} >Delete</button></td>
    </tr>
    </>
    )}
    </table>
</div>
    </div>

  )
}

export default TodoList
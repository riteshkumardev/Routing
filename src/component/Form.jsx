import React, { useState } from 'react'
import { useEffect } from 'react'
import { v4 as uuid } from "uuid"
import "./form.css"

function Form() {
    var obj = {
        name: "",
        mobile: "",
        check: false,
        dob: "",
        age: '',
        email: "",
    }
    const [edit,setEdit]=useState(false)
    const [item, setItem] = useState([])
    const[currentItem,setCurentItem]=useState(obj)
    console.log("currentItem",currentItem);
    console.log( "edit");
    const [data, setData] = useState(edit ? currentItem : obj)
    console.log(data, "data");

    console.log(item, "item");



    function handleChange(e) {
        const { name, value, checked } = e.target
        setData({ ...data, [name]: value, check: checked,id:uuid() })

    }
    useEffect(()=>{
setData(currentItem)
    },[currentItem])
    console.log("OBJ",obj);
    function handleAdd() {
     
        setItem([...item, data])
        setData(obj)

    }
    function handleDelete(id) {
        var filterdata = item.filter((el) => el.id !== id)
        setItem(filterdata)

    }
    function handleEdit(el){
        
        setEdit(true)
        setCurentItem(el)
        console.log("el",el);

    }
    function handleUpadte(UpdateId){
const update =item.map((item)=>item.id ===UpdateId ?data:item)
setItem (update)
setData(obj)
    }
    return (
        <div className=' main'>
            <div className='superDiv'> <h1 className='Hh1'>Form Handling</h1>
                <div className='inputmainDiv'>

                    <p className=" p" > Name:-
                    </p >

                    <input className='input' name='name' placeholder='Enter Your name' onChange={handleChange} value={data.name} type="text" />
                    <p >  Mobile No:-

                    </p>
                    <input className='input' name='mobile' placeholder='Enter Your Mobile No ' onChange={handleChange} value={data.mobile} type="Number" />
                    <p >  Email Id :-
                    </p>

                    <input className='input' name='email' placeholder='Enter Your Email Id' onChange={handleChange} value={data.email} type="Email" />
                    <p >  Age:-
                    </p>

                    <input className='input' name='age' placeholder='Enter Your Age' onChange={handleChange} value={data.age} type="Number" />

                    <p >  Date Of Birth :-
                    </p>

                    <input className='input' name='dob' placeholder='Enter Your DOB' onChange={handleChange} value={data.dob} type="Date" />

                    <p >  Checkbox:-
                    </p>

                    <input className='input' name='check' onChange={handleChange} value={data.check} type="checkbox" />
                </div>
                <button className='Addbtn' onClick={handleAdd} >Add</button>
                <div>
                    <table className='table'>
                        <tr >

                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>DOb</th>
                            <th>Agree</th>
                            <th>Action</th>
                        </tr>






                        {item.map((el) =>
                            <tr>

                                <td className='FormtrTd' >  {el.name}</td>

                                <td className='FormtrTd'>{el.mobile}</td>

                                <td className='FormtrTd'> {el.email}</td>

                                <td className='FormtrTd'>  {el.age}</td>

                                <td className='FormtrTd'> {el.dob}</td>

                                <td className='FormtrTd'>{el.check ? "Yes" : "No"}</td>

                                <td className="editDelteDiv1">
                                    <button className='DeleBtn' onClick={() => handleDelete(el.id)} >Delete</button>
                                    
                                
                                <button className='editBtn' onClick={() => handleEdit(el)} >Edit</button>
                                <button className='editBtn' onClick={() => handleUpadte(el.id)} >Update</button>
                                </td>

                            </tr>
                        )}
                        {/* <div className='outputDiv' > */}

                    </table>
                </div>

            </div>
        </div>
    )
}

export default Form
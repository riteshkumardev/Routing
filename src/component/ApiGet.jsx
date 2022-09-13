import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Api.css"

function ApiGet() {
    // var Obj = {
    //     first_name: "",
    //     last_name: "",
    //     email: "",
    //     id: "",
    //     avatar: ""
    // }

    // const [edit, setEdit] = useState(false)
    // const [currentdata, setCurrentdata] = ([])
    const [getdata, setGettdata] = useState([])
    const [count, setCount] = useState(0)

    useEffect(() => {
        axios.get(`https://reqres.in/api/users?page=${count}`)

            .then((res) => setGettdata(res.data.data))
    }, [count])
    // useEffect(()=>{
    //     setGettdata(currentdata)
    // },[currentdata])
    function handleAdd() {
        setCount(count + 1, count === 2 ? count = 0 : count)
        if (count === 12) {
            return (alert("not apage"))
        }
    }
    function handleRemove() {
        setCount(count - 1, count === 0 ? count = 0 : count)

    }
    function handleDelete(did) {
        const deleteId = getdata.filter((data) => data.id !== did)
        setGettdata(deleteId)
    }
    
    
    return (
        <>
            <h1 className='Apih1'>Api Get Data</h1>
            <h3> Page No:-{count}</h3>
            <button className='apipr' onClick={handleRemove} >previous</button>
            <button className='apiedit' onClick={handleAdd}>Next</button>
            <table className='table'>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Avatar</th>
                </tr>



                {getdata.map((el) =>
                    <>
                        <tr>
                            <td className='getdata1'>{el.id}</td>
                            <td className='getdata3'>{el.first_name}</td>
                            <td className='getdata4'>{el.last_name}</td>
                            <td className='getdata2'>{el.email}</td>

                            <td ><img className='getdataimage' src={el.avatar} alt="pic" /> </td>
                            <button  className='deletebtnapi' onClick={() => handleDelete(el.id)} >Delete</button>
                            {/* <button onClick={() => handleEdite(el)} >Edite</button> */}
                        </tr>
                    </>

                )}

            </table>

        </>
    )
}

export default ApiGet
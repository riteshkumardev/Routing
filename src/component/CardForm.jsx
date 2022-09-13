
import React, { useState } from 'react'
import './card.css'
// import Card from './Card'

const CardForm = () => {
    const [userName, setUserName] = useState({
        name: "name",
        cardno: "cardno",
        Date: "Date",
        CVV: "CVV"


    });
    const [record, setRecord] = useState([]);
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(name + value);



        setUserName({ ...userName, [name]: value });

    }

    const handleSubmit = (event) => {

        const newObj = { ...userName, id: new Date().getTime().toString() }
        setRecord([...record, newObj]);
        setUserName({
            name: "",
            cardno: "",
            Date: "",
            CVV: ""

        });
        event.preventDefault();

    }
    return (

        <div className='superdiv'>

           <h1 className='debitcardh1'>Feck Devit Card</h1>

            <form action='Forme' className='form'>
                <label>
                    NAME :-
                </label>
                <input placeholder='Enter Your name' id='name' name='name' onChange={handleChange} type="text" ></input>

                <label>
                    CARD NUMBER :-
                </label>
                <input placeholder='Enter Your Card No' id='cardno' name='cardno' onChange={handleChange} type="Number" ></input>
                <label>
                    EX DATE :-
                </label>
                <input placeholder='Enter Your Card No' id='Date' name='Date' onChange={handleChange} type="Date"></input>
                <label>
                    CVV NUMBER :-
                </label>
                <input placeholder='Enter Your CVV No' id='CVV' name='CVV' type='Number' onChange={handleChange} ></input>

            </form>
            <button type='submit' className='submitbtn' onClick={handleSubmit} ><h1>Submit</h1>  </button>
            <div>
                {

                    record.map((Obj) => {

                        console.log(record);
                        return (

                            <>
                                <div className='maindiv'>
                                    <div className='Visa'> <h1>VISA</h1>

                                    </div>

                                    <img img className='image'
                                        src='./chip.png'
                                        alt="Chip" />



                                    <div className='cardno'><h4 className='number'>{Obj.cardno}</h4></div>
                                    <div className='ditaile'>
                                        <div className='cardhol'>Card holder </div>
                                        <div className='expire' >Expire</div>
                                        <div className='cvv'>CVV</div>
                                    </div>
                                    <div className='lastdiv'>
                                        <div className='name'>{Obj.name}</div>
                                        <div className='exdate'>{Obj.Date}</div>
                                        <div className='cvvno'>{Obj.CVV}</div>
                                    </div>


                                </div>




                            </>
                        )



                    })
                }
            </div>


        </div>
    )
}

export default CardForm



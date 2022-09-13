import React, { useState } from "react";

import './counter.css';
// Importing app.css is css file to add styling 

const Counter1 = () => {
    //  Counter is a state initialized to 0 
    const [counter, setCounter] = useState(0)
    // Function is called everytime increment button is clicked 
    const handleClick1 = () => {
        // Counter state is incremented 
        setCounter(counter + 1)
    }
    // Function is called everytime decrement button is clicked 
    const handleClick2 = () => {
        // Counter state is decremented 
        setCounter(counter - 1)
    }
    return (
        <div className="Div1">
            Counter App
            <div className="Div2">
                {counter}
            </div>
            <div className="buttons">
                <button className="btnDic" onClick={handleClick2}>Decrement</button>
                <button className="btnInc" onClick={handleClick1}>Increment</button>
            </div>
        </div>
    )
}



export default Counter1
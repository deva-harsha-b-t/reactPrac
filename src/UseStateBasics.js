import React, { useState } from 'react'

const UseStateBasics = () => {
        

    const [value,setvalue] = useState(0)
    const clickHandler = () => {
        setvalue(value+1)
        document.title = `messages(${value+1})`
    }
    return (
    <>
    <div class="counter">
        <button className="btn text-center"  onClick={clickHandler}>send messages</button>
        <h1>messages sent: {value}</h1>
    </div>

    </>
    );
}

export default UseStateBasics

import React from 'react'
import { useState } from 'react'

const ControlledInput = () => {

    const [usersName,setName] = useState("")
    const [usersEmail,setEmail] = useState("")
    const [allusers,setallusers] = useState([{name:"deva",email:"devaharsha1@react.com"},{name:"harsha",email:"devaharsha2@react.com"}])
        const submitHandler = (e) =>{
            e.preventDefault();
            if(usersName!==""){
                const tempUser = {name:usersName,email:usersEmail}
                allusers.push(tempUser)
                console.log(allusers)
                setallusers(allusers)
                setName("")
                setEmail("")
            }
    }
    return (
        <>
        <div className="form-container">
        <form onSubmit={submitHandler}>
            <div className="form-controller">
                <label htmlFor="fullname">Full Name:</label>
                <input  className ="input" type="text" id="fullname" value={usersName} name="fullname" onChange={(e)=>{setName(e.target.value)}}/>  
            </div>
            <div className="form-controller">
                <label htmlFor="Email">Email :</label>
                <input className ="input" type="text" id="Email" name="Email" value={usersEmail} onChange={(e)=>{setEmail(e.target.value)}}/>  
            </div>
            <button type="submit" className="btn1">add user</button>
        </form>
        <div>
            {usersName===""?usersName:<h4>Your Name : {usersName}</h4>}
            {usersEmail===""?usersEmail:<h4>Your Email : {usersEmail}</h4>}
        </div>
        </div>
        <h1 style={{textAlign:"center", marginBottom:"8px"}}>All Users :</h1>
        <div className="grid-container">
            {allusers.map((eachUser)=>{
                return(
                    <span key={eachUser.email} className="each-user">
                    <h4>{eachUser.name}</h4>
                    <h4>{eachUser.email}</h4>  
                    </span>
                )
            })}

        </div>
        </>
    )
}

export default ControlledInput

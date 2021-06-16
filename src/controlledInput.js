import React from 'react'
import { useState,useReducer } from 'react'
import Popup from './Popup'

const ControlledInput = () => {
    const [usersName,setName] = useState("")
    const [usersEmail,setEmail] = useState("")
    const reducer = (state,action)=>{
        if(action.type==="ADD"){
            const tempdata=[...state.users,{name:usersName,email:usersEmail}]
            return{...state,users:tempdata,
            message:"user added",isModelPopUpVisible:true}
        }
        if(action.type === "CLOSE_POPUP"){
            return {...state,isModelPopUpVisible:false}
        }
        return state

    }
    const defaultState = {
        users : [{name:"deva",email:"devaharsha1@react.com"}],
        message : "user added :",
        isModelPopUpVisible : false
    }
    const [state, dispatch] = useReducer(reducer, defaultState)

        const submitHandler = (e) =>{
            e.preventDefault();
            if(usersName!==""){
                dispatch({type:"ADD"})
            }
    }
    const closepopup = () =>{
        dispatch({type:"CLOSE_POPUP"})
    }
    return (
        <>
        {state.isModelPopUpVisible && <Popup closepopup = {closepopup} message={state.message}/>}
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
            {state.users.map((eachUser)=>{
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

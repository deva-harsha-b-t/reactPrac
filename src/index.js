import React from 'react'
import ReactDom from 'react-dom'
import GameList from './GameList'
import UseStateBasics from './UseStateBasics'
import UseEffectsBasics from './UseEffectsBasics'
import { useState } from 'react'
import ControlledInput from './controlledInput'
import './index.css' 

function GamesList(){
  const [showGithubUsers,setGithubUsers] = useState(true)
  const showUsers = "show users"
  const hideUsers = "hide Users"
  return (
    <>
    <GameList/>
    
    <div className="center-div">
      <button className="btn" onClick={()=>{setGithubUsers(!showGithubUsers)}}>{showGithubUsers?hideUsers :showUsers }</button>
    </div>
    {showGithubUsers && <UseEffectsBasics/>}
    <ControlledInput/>
    <UseStateBasics/>
    </>
  );
}

ReactDom.render(<GamesList/>,document.getElementById('root'))

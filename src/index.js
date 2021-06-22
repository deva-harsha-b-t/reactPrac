import React from 'react'
import ReactDom from 'react-dom'
import GameList from './GameList'
import UseStateBasics from './UseStateBasics'
import UseEffectsBasics from './UseEffectsBasics'
import { useState } from 'react'
import ControlledInput from './controlledInput'
import Userdetails from './Userdetails'
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import Navbar from './Navbar'
import './index.css' 

function GamesList(){
  const [showGithubUsers,setGithubUsers] = useState(true)
  const showUsers = "show users"
  const hideUsers = "hide Users"
  return (
    <>
    <Router>
      <Navbar/>
      <Route exact path='/'>
       <GameList/>
      </Route>
      <Route exact path='/users'>
        <div className="center-div">
            <button className="btn" onClick={()=>{setGithubUsers(!showGithubUsers)}}>{showGithubUsers?hideUsers :showUsers }</button>
        </div>
        {showGithubUsers && <UseEffectsBasics/>}
        </Route>
        <Route exact path='/adduser'>
          <ControlledInput/>
        </Route>
        <Route exact path='/messages'>
          <UseStateBasics/>
        </Route>
        <Route exact path="/users/:login" children={<Userdetails/>}>

        </Route>
          
        
    </Router>


    </>
  );
}

ReactDom.render(<GamesList/>,document.getElementById('root'))

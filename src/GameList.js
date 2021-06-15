import React from 'react'
import {gamesData} from './gameData'
import Game from './Game'

function GameList() {
    return (
        <div>
            <h1 class="text-center">Games list:</h1>
            <section className = "games-list">
            {
                gamesData.map((GameData)=>{
                return <Game gameData = {GameData}/>
                })
            }
            </section>
            <h3 class="text-center" style = {{marginBottom:'10px'}}>More games to come!</h3>  
        </div>
    )
}

export default GameList


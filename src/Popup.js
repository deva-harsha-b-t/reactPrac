import React from 'react'
import { useEffect } from 'react'

const Popup=( {closepopup , message} )=> {
    useEffect(() => {
        setTimeout(() => {
            closepopup()
        }, 3000); 
    })

    return (
        <div className="popup-container">
            <p className="popup">{message}</p>
        </div>
    )
}

export default Popup

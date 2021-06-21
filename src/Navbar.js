
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav>
                <ul className="nav-bar">
                    <li>
                        <Link className="nav-item" to="/">Games</Link>
                    </li>
                    <li >
                        <Link className="nav-item" to="/users">users</Link>
                    </li>
                    <li>
                        <Link className="nav-item" to="/adduser">add user</Link>
                    </li>
                    <li>
                        <Link className="nav-item" to="/messages">mesages</Link>
                    </li>
                </ul>
            </nav>
            
        </div>
    )
}

export default Navbar

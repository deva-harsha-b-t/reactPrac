import React,{useState,useEffect} from 'react'
const url = "https://api.github.com/users"

const UseEffectsBascis = () => {
    const [users,setUsers] = useState([])
    const getusers = async() =>{
        const response = await fetch(url)
        const finalData = await response.json()
        setUsers(finalData)
    }
    useEffect(()=>{
        getusers()
    },[])
    return (
        <div>
            <h1 className="text-center">our github users</h1>
            <div className="grid-container">
                {users.map((user)=>{
                const {id,login,avatar_url} = user;
                return(
                    <span key={id} className="grid-item">
                        <img src={avatar_url} className="img-user"/>
                        <h4 style={{marginInlineStart:"10px"}}>{login}</h4>
                        </span>
                ); 
            })}

            </div>
            
        </div>
    )
}

export default UseEffectsBascis

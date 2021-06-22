import React ,{useState,useEffect} from 'react'
import { Link,useParams} from 'react-router-dom'

function Userdetails() {
    const {login} = useParams();
    const [url, setUrl] = useState('https://api.github.com/users/');
    const [user,setUser] = useState({});
    const  fetchUser = async() => {
        const response = await fetch(url);
        const userData = await response.json();
        setUser(userData)
    }
     
    useEffect(()=>{
        setUrl('https://api.github.com/users/'+login)
        fetchUser();
    },[user])
    return (
        <div>
            <h1>
                {user.id}
            </h1>
                <h1>
                {user.login}
            </h1>
        </div>
    )
}

export default Userdetails

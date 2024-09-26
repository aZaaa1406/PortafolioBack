import { useState } from 'react';
import './Login.css'
import Home from '../Home/home';



const Login = () =>{

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginSucessfull, setloginSucessfull] = useState(false)



    const handdleLogin = (e)=>{
        e.preventDefault();
        const data = {
            user: username,
            password: password
        }

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result=>{

                if(result.token){
                    localStorage.setItem('token', result.token)
                    setloginSucessfull(true)
                }
                
            })
            .catch(error=>{
                throw(error);
            })
    }

    return(
        <>{loginSucessfull ? <Home /> : <div>
            <form action="">
                <label>Username:</label>
                <input onChange={()=>{setUsername(event.target.value)}} type="text" placeholder='Ingresa tu user'/>
                <label htmlFor="">Password:</label>
                <input onChange={()=>{setPassword(event.target.value)}} type="password" name="" id="" placeholder='Ingresa tu password'/>
                <button onClick={handdleLogin}>Login</button>
            </form>
        </div>}</>
        
    )
}

export default Login;
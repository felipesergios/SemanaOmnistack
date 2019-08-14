import React,{useState} from 'react';
import logo from '../assets/logo.svg';
import './Login.css';
import api from '../services/api';
    export default function Login({history}){
        const [username,setUsername] = useState('');
async function handleSubmit(e){
    e.preventDefault();
    //console.log(username);
    const response = await api.post('/devs',{
        username,
    });
    const { _id }=response.data;
    history.push(`/devs/${_id}`);
    
    
}


        return(
            <div className="login-container">
                <form onSubmit={handleSubmit}> 
                <img src={logo} alt="Tindev"></img>
                <input type="text" placeholder="Entre com seu github"
                value={username}
                onChange={e => setUsername(e.target.value)}
                >

                </input>
                <button type="submit">Enviar</button>
                </form>
            
            </div>
        );
    }
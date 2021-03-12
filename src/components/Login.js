import React, {useState,useContext, useEffect,useRef}from 'react';
import {context} from '../context'; //USING CONTEXT API 
import axios from 'axios';

function Login(props) {
    // ALL STATE VARIABLES
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [message,setMessage]=useState('');
    // CONTECT API 
    const contextVar=useContext(context);
    // MUTABLE REF OBJECT
    const Auth = useRef(false);
    // FIRE THIS FUNCTION ONLY WHEN THE VALUE OF AUTH CHANGES(USER LOGGED IN WITH VALID JWT)
    useEffect(()=>{
        contextVar.setisAuth(Auth); 
    },[Auth,contextVar])
    // CLEAR THE FORM AFTER SUBMISSION
    const clearForm=()=>{
        setName('');
        setEmail('');
        setPassword('');
    }
    // CODE FOR FORM SUBMIT FUNCTION
    const mySubmitHandler= async (event)=>{
        event.preventDefault();
        // BACKEND CONNECTION
       await axios.post('http://localhost:4000/auth', {
            email:email,
            password:password,
            name:name
        })
        .then(async (response)=>{
                const res=await axios.get('http://localhost:4000/contact_form/entries',{ headers: {"Authorization" : `Bearer ${response.data.token}`} })
                Auth.current=true;
                contextVar.setEntries(res.data);
                props.history.push({pathname:"/list"})  
        })
        .catch(e => {
            if (e.response && e.response.data) {
                setMessage(e.response.data.message)
                setTimeout(() => setMessage(""), 3000);
              }    
        });
        clearForm();
    }
   
    return (
        
        <div className="container">
            {message?(<p className="alert alert-primary" role="alert">{message}</p>):("")}
            <h3>Login</h3>
            <form>
            <div className="form-group"> 
                <label>Name: </label>
                <input  type="text"
                        className="form-control w-50"
                        name="contact_name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="form-group"> 
                <label>Email: </label>
                <input  type="text"
                        className="form-control w-50"
                        name="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Password: </label>
                <input 
                        type="text" 
                        className="form-control w-50"
                        name="contact_number"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-dark" onClick={mySubmitHandler}>Submit</button>
            </div>
        </form>
        <footer id="footer" className="row bottom text-white p-3">
            <div className="container">
                    <p className="text-center">Copyright © 2021 FloMarketing</p>
            </div>
        </footer>
    </div>
    
    
    );
}

export default Login;
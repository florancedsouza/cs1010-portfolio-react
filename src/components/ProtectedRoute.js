
import React,{useContext} from 'react';
import { Redirect, Route } from 'react-router-dom';
import {context} from '../context';
// import Login from './Login';
 const ProtectedRoute=({component:Component, ...rest})=> {
    const contextVar=useContext(context);
    return(
        <Route {...rest}
        render={props=>{
            // console.log(props.location.state.isLogged);
            if(contextVar.isAuth.current){
                return <Component />
            }
            else{
                return <Redirect to={
                    {
                        pathname:"/login",
                        state:{
                            from:props.location  
                        }
                    }
                }/>
            }
        }}
        />
    )
    
}
export default ProtectedRoute;








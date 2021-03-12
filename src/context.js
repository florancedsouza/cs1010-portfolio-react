import React,{useState,createContext}from 'react';

export const context=createContext();

export const ContextProvider=(props)=>{
    const [isAuth,setisAuth]=useState('');
    const [entries,setEntries]=useState([]);
    return(
        <context.Provider value={{isAuth,setisAuth,entries,setEntries}}>
            {props.children}
        </context.Provider>
    )
}
import React ,{useContext} from 'react';
import {context} from '../context';

function ListOfEntries(props) {
    const contextVar=useContext(context);
    
    return (
        <div className="container">
        <h3>Entries List</h3>
        <table className="table" style={{ marginTop: 20,color:"black" ,border:"5px solid white",fontSize:"15px"}} >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Content</th>
                </tr>
            </thead>
            <tbody>
                {contextVar.entries.map(function(currentEntry){
                    return(
                        <tr key={currentEntry.id}>
                            <td>{currentEntry.name}</td>
                            <td>{currentEntry.email}</td>
                            <td>{currentEntry.phoneNumber}</td>
                            <td>{currentEntry.content}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
      
    </div>
            
    );
}

export default ListOfEntries;
import React, { useState } from 'react';
import axios from 'axios';

function Signup(props) {
    // ALL STATE VARIABLES
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    // CODE FOR FORM SUBMIT FUNCTION
    const mySubmitHandler = (event) => {
        event.preventDefault();
        // CHECK IF ANY ENTRY IS EMPTY
        if (name === "" || email === "" || password === "") {
            setMessage("Please Fill All Field")
            setTimeout(() => setMessage(""), 3000);
        }
        else {
            // BACKEND CONNECTION
            axios.post('http://localhost:4000/users', {
                name: name,
                email: email,
                password: password
            })
                // IF FORM SUCCESSFULLY SUBMITTED, SHOW THE SUCCESS MESSAGE
                .then(res => {
                    setMessage("User Successfully Created");
                    setTimeout(() => setMessage(""), 3000);
                })
                // CATCH THE ERROR AND SHOW THE MESSAGE ON THE SCREEN FOR THREE SECONDS
                .catch(e => {
                    if (e.response && e.response.data) {
                        setMessage(e.response.data.message)
                        setTimeout(() => setMessage(""), 3000);
                    }
                });
        }
    }   
    return (
        <div>
            <div className="container">
                {message ? (<p className="alert alert-primary" role="alert">{message}</p>) : ("")}
                <h3>Create a new user. All field are required.</h3>
                <form onSubmit={mySubmitHandler}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
                            className="form-control w-50"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email </label>
                        <input
                            type="text"
                            className="form-control w-50"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password </label>
                        <input
                            type="password"
                            className="form-control w-50"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-dark">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
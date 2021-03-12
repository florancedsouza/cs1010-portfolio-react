import React, { useState } from 'react';
import axios from 'axios';

function Contact(props) {
    // ALL STATE VARIABLES
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [content, setContent] = useState("");
    const [message, setMessage] = useState("");

    // CODE FOR FORM SUBMIT FUNCTION
    const mySubmitHandler = (event) => {
        event.preventDefault();
        // CHECK IF ANY ENTRY IS EMPTY
        if (name === "" || email === "" || phoneNumber === "" || content === "") {
            setMessage("Please Fill All Field")     //ERROR MESSAGE
            setTimeout(() => setMessage(""), 3000); //HIDE MESSAGE AFTER 3 SEC
        }
        else {
            // BACKEND CONNECTION
            axios.post('http://localhost:4000/contact_form/entries', {
                name: name,
                phoneNumber: phoneNumber,
                email: email,
                content: content
            })
            // IF FORM SUCCESSFULLY SUBMITTED, SHOW THE SUCCESS MESSAGE
            .then(res => {
                setMessage("Form Successfully Submitted");
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
        <div className="container">
            {message ? (<p className="alert alert-primary" role="alert">{message}</p>) : ("")}
            <h3>Contact Me</h3>
            <form onSubmit={mySubmitHandler} className="mb-5">
                <div className="form-group">
                    <label>Name: </label>
                    <input type="text"
                        className="form-control w-50"
                        name="contact_name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Phone Number: </label>
                    <input
                        type="text"
                        className="form-control w-50"
                        name="contact_number"
                        value={phoneNumber}
                        onChange={(e) => setphoneNumber(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Email </label>
                    <input
                        type="text"
                        className="form-control w-50"
                        name="contact_email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Content </label>
                    <textarea
                        type="text"
                        rows="3"
                        className="form-control w-50"
                        name="contact_email"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-dark">Submit</button>
                </div>
            </form>
            <footer id="footer" className="row bottom text-white p-3 mt-5">
                <div className="container">
                    <p className="text-center">Copyright © 2021 FloMarketing</p>
                </div>
            </footer>
        </div>
    );
}

export default Contact;
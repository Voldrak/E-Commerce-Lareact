import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './../components/Header'

const Register = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate("/add")
        }
    }, [])

    const signUp = async () => {
        let item = { name, password, email };
        console.warn(item);

        let result = await fetch("http://localhost:8000/api/register", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        navigate("/add")
    }

    return (
        <>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Register Page</h1>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="name" /> <br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="password" /><br />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="email" /><br />
                <button onClick={signUp} className="btn btn-primary">Sing Up</button>
            </div>
        </>
    )
}

export default Register;
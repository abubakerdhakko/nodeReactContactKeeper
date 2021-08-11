import React, { useState } from 'react'

const Login = ({ alert }) => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const { email, password } = user;
    onchange = (e) => setUser({ ...user, [e.target.name]: e.target.value })
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('sss login', e)

        alert.show('Oh look, an alert!')

    }

    return (
        <div className="form-container StyleForm">
            <h1 > Account <span className="text-primary">Login</span></h1>
            <form onSubmit={onSubmit}>
                <div className="Form-group">
                    <label className="" htmlFor="email">E-mail</label>
                    <input type="email" name="email" value={email} onChange={onchange}></input>
                </div>
                <div className="Form-group">
                    <label className="" htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onchange}></input>
                </div>
                <input type="submit" value="Login" className="btn btn-primary btn-block "></input>
            </form>
        </div>
    )
}
export default Login
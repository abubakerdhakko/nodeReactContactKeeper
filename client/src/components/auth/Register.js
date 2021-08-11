import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../../context/Auth/authContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = (props) => {
    const authContext = useContext(AuthContext)
    const { register2, register, error, isAuthenticated } = authContext
    const [user, setUser] = useState({
        name: '',
        email: '',
        // checkItem: '',
        password: '',
        password2: ''
    })

    useEffect(() => {
        if (error === 'User already exists') {
            errorAlert(error)
        }
        if (isAuthenticated) {
            props.history.push('/')
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history])

    const { name, email, checkItem, password, password2 } = user;
    onchange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

    const notifyEmptyAlert = () => toast(' Please Enter All Fields');
    const passwordNotMatchAlert = () => toast('Password Not Match');
    const errorAlert = (e) => toast(e);

    const onSubmit = (e) => {

        e.preventDefault();
        // register({
        //     name,
        //     email,

        //     password1
        // })
        if (name === "" || email === "" || password === "") {
            notifyEmptyAlert()
        } else if (password !== password2) {
            passwordNotMatchAlert()
        } else {
            register({
                name,
                email,
                // checkItem,
                password
            })
        }

    }
    return (
        <div className="form-container StyleForm">
            <h1 > Account <span className="text-primary">Register</span></h1>
            <form onSubmit={onSubmit}>
                <div className="Form-group">
                    <label className="" htmlFor="name">Name</label>
                    <input type="text" name="name" value={name} onChange={onchange}></input>
                </div>
                <div className="Form-group">
                    <label className="" htmlFor="email">E-mail</label>
                    <input type="email" name="email" value={email} onChange={onchange}></input>
                </div>
                {/* <div className="Form-group">
                    <label className="" htmlFor="checkItem">checkItem</label>
                    <input type="checkbox" name="checkItem" value="checkItem" onChange={onchange}></input>
                </div> */}
                <div className="Form-group">
                    <label className="" htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onchange}></input>
                </div>
                <div className="Form-group">
                    <label className="" htmlFor="password2">Confirm Password</label>
                    <input type="password" name="password2" value={password2} onChange={onchange}></input>
                </div>
                <input type="submit" value="Register" className="btn btn-primary btn-block "></input>

                <input type="submit" value="Register2" onClick={() => register2()} className="btn btn-primary btn-block "></input>

            </form>

            <ToastContainer />
        </div>
    )
}
export default Register
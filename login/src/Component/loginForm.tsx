import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../store/store'
import { makeId } from "../store/Login";

const LoginForm:React.FC = () => {
    const navigate = useNavigate();
    const loading = useSelector((state: RootState) => state.login.loadingMakeId);
    
    const dispatch = useDispatch<AppDispatch>();

    const [form, setForm] = useState({
        username: "",
        password: "",
    })

    const { username, password } = form;

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(makeId());
        navigate("/mainPage");
    }

    const handleOnClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        navigate("/signIn");
    }

    return (
        <div>
            {loading ? <div> make new id .... </div>: <div></div>}
            <form onSubmit={handleFormSubmit}>
                <h2>Login Form</h2>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={handleFormChange}
                    required
                />
                <br />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleFormChange}
                    required
                />
                <br />
                <button type="submit">Submit</button>
                <button onClick={handleOnClick}>SignIn</button>
            </form>
        </div>
    );
};

export default LoginForm;
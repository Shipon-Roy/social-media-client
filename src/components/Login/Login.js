import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {user, logInUser, isLoading, error} = useAuth();

    const location = useLocation();
    const histroy = useHistory();

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        logInUser(data.email, data.password, location, histroy )
        
    };

    return (
        <div className="container my-5 text-center">
             <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register("email")} placeholder="Your Email" />
                <input type="password" {...register("password")} placeholder="Password" />
                <input type="submit" value="LogIN" />
            </form>
            {isLoading && <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}
            {user.email && <p className="text-center text-info">user logIn successfully</p>}
            {error && <p className="text-center text-danger">{error}</p>}

            <p>Are you new? <Link to="/register">create account</Link> </p>
        </div>
    );
};

export default Login;
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const {user, userRegister, isLoading, error} = useAuth();
    const history = useHistory();
    
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        userRegister(data.name, data.email, data.password, history)
        const proced = window.confirm('Registation Sucessfully')
        if(proced){
            fetch('http://localhost:5000/user', {
            method: "POST",
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                reset();
            })
        }
    };
    return (
        <div className="my-5">
            {!isLoading && <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("displayName")} placeholder="Your Name" />
                <input defaultValue={user.email} type="email" {...register("email")} placeholder="Your Email" />
                <input type="password" {...register("password")} placeholder="Password" />
                <input type="submit" value="Register" />
            </form>}
            {isLoading && <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}
            {user.email && <p className="text-center text-info">user register successfully</p>}
            {error && <p className="text-center text-danger">{error}</p>}
            <p className="text-center">Already have a account <Link to="/logIn">LonIn here</Link> </p>
        </div>
    );
};

export default Register;
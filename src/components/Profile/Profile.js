import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import img from '../../images/shipon-01.jpeg';
import './profile.css'

const Profile = () => {
    const {user} = useAuth();
    const [currentUsers, setCurrentUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
        .then(res => res.json())
        .then(data => setCurrentUsers(data))
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    {currentUsers.map(
                        (currentUser) => 
                            user.email === currentUser.email && (
                            <div class="card bg-secondary text-white text-center shadow my-5 py-5" style={{width: "18rem;"}}>
                            <img src={img} class="p-img card-img-top rounded-circle" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Name:{currentUser.displayName}</h5>
                                <p class="card-text">Email:{currentUser.email}</p>
                            </div>
                            </div>
                        )
                    )}
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    );
};

export default Profile;
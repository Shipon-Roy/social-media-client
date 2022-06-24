import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import '../Posts/Posts.css';
import './Home.css';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div className='sticky-top'>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <div className="container">
                    <Link className="navbar-brand" to="/"><strong>CRYPTO NAUKRI</strong></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/home">
                        <i class="h-icons fas fa-home"></i>
                        </Link>
                        </li> */}
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/job">Job</Link>
                        </li>
                    </ul>
                    <div class="dropdown">
                        <button class="p-button" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        {user?.email ? <i class="h-icons fas fa-user-circle"></i>
                        :
                        <Link to="/logIn"><button className="p-button"><i class="fas fa-sign-in-alt mx-2"></i>LogIn</button></Link>
                        }
                        </button>
                        <ul class="h-dropdown dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li>
                                <Link to="/profile" class="dropdown-item"><i class="fas fa-address-card mx-2"></i>Profile</Link>
                            </li>
                            <li>
                                <Link to="/dashboard" class="dropdown-item"><i class="fas fa-address-card mx-2"></i>DashBoard</Link>
                            </li>
                            <li><a class="dropdown-item">
                                {user?.email ? <button onClick={logOut} className="p-button"><i class="fas fa-sign-out-alt mx-2"></i>LogOut</button>
                                :
                                <Link to="/logIn"><button className="p-button"><i class="fas fa-sign-in-alt mx-2"></i>LogIn</button></Link>}
                            </a></li>
                        </ul>
                    </div>
                    
                    <img style={{width: "40px"}} className="rounded-circle" src={user?.photoURL} alt="" />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
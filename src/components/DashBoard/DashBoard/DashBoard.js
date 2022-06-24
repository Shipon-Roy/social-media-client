import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import ApplyData from '../ApplyData/ApplyData';
import JobPost from '../JobPost/JobPost';
import MyApplications from '../MyApplications/MyApplications';
import './DashBoard.css';

const DashBoard = () => {
    const {url, path} = useRouteMatch()
    return (
        <div>
            <div className="row">
                <div className="dashboard col-md-3 p-5 shadow">
                <h3>Dashboard</h3>
                    <div>
                        <Link className='d-link' to={url}>
                            <li className="d-white shadow">My Applications</li>
                        </Link>
                        <div>
                            <h5 className=" mt-3">Admin</h5>
                            <Link className='d-link' to={`${url}/applydata`}>
                                <li className="d-white shadow">All Applications</li>
                            </Link>
                            <Link className='d-link' to={`${url}/jobPost`}>
                                <li className="d-white my-2 shadow">Add Job Post</li>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <Switch>
                        <Route exact path={path}>
                            <MyApplications />
                        </Route>
                        <Route exact path={`${path}/applydata`}>
                            <ApplyData />
                        </Route>
                        <Route exact path={`${path}/jobPost`}>
                            <JobPost />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
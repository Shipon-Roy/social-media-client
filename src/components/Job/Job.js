import React from 'react';
import {Link} from 'react-router-dom';

const Job = () => {
    return (
        <div>
            <div className="container my-5">
                <h1>MERN Stack Intern</h1>
                <p>CryptoNaukri  India Remote </p>
                <h3>About the job</h3>
                <p>CryptoNaukri is an ecosystem for Blockchain developers where they can learn, solve doubts, build presence as a Blockchain developer and get the job as well in verified web3 startups.
                    Website: http://www.cryptonaukri.com/
                    Join #alphasquad
                    What your duties will be:
                    <ol>
                        <li>Will be working on MERN stack</li>
                        <li>Will have to take ownership</li>
                    </ol>
                    Whom we are looking for:
                    <ol>
                        <li>You are MERN developer</li>
                        <li>You have worked on personal projects</li>
                        <li>You are College student</li>
                        <li>Strong analytical skills and problem solving aptitude</li>
                    </ol>
                    Skills: JavaScript, React JS, Node JS, Tailwind CSS, Bootstrap, MongoDB
                    Perks:
                    <ol>
                        <li>Recommendation letter</li>
                        <li>Internship certificate</li>
                        <li>Star of the month award</li>
                        <li>Birthday gifts</li>
                        <li>Work directly with top management</li>
                        <li>Personal growth and development as an entrepreneur.</li>
                    </ol>
                </p>
                <Link to="/applyNow">
                <button className='btn btn-info'>Apply Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Job;
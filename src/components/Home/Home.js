import React, { useState } from 'react';
import Posts from '../Posts/Posts';
import './home.css';

const Home = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if(!image){
            return;
        }
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("image", image);

        fetch('http://localhost:5000/posts', {
            method: 'POST',
            body: formData
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    setSuccess("Your Post Successfully");
                    alert("Your Post Successfully")
                }
            })
            .catch(error => {
            console.error('Error:', error);
            });

    }


    return (
        <div className='container m-center my-3'>
            <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">

                <div>
                    <button type="button" class="btn btn-info rounded-pill w-50 my-3" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">What's on your mind?</button>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content bg-dark text-white">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Create Your Post</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form onSubmit={handleSubmit}>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Title:</label>
                                    <input onChange={e => setTitle(e.target.value)} type="text" class="form-control" id="recipient-name" />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Description:</label>
                                    <input onChange={e => setDescription(e.target.value)} type="text" class="form-control" id="recipient-name" />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Upload Image:</label>
                                    <input onChange={e => setImage(e.target.files[0])} type="file" class="form-control" id="recipient-name" />
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary">Post</button>
                                </div>
                                {success && <p>{success}</p>}
                                </form>
                            </div>
                            
                            </div>
                        </div>
                    </div>
                </div>


            {/* post */}
            <Posts />
            </div>
            <div className="col-md-2"></div>
            </div>
        </div>
    );
};

export default Home;
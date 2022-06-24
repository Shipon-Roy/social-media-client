import React, { useEffect, useState } from 'react';
import './Posts.css';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/posts")
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    const handleDelete = (id) => {
        const sure = window.confirm("Are you sure, you want to delete?");
        if(sure){
            fetch(`http://localhost:5000/posts/${id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount){
                    alert("Delete Successfully");
                }
            })
        }
    }

    return (
        <div>
            {
                posts.map(post => {
                    const {title, description, image} = post;
                    return (
                        <div className="card shadow my-2">
                            <div class="card-body d-flex justify-content-between">
                                <div>
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{description}</p>
                                </div>
                                <div class="dropdown">
                                    <button class="p-button" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <h1>...</h1>
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><p class="p-pointer dropdown-item"><i class="fas fa-edit mx-3"></i>Edit Post</p></li>
                                        <li onClick={() => handleDelete(post._id)}><p class="p-pointer bg-danger text-white dropdown-item"><i class="fas fa-trash-alt mx-3"></i>Delete</p></li>
                                    </ul>
                                </div>
                            </div>
                            <img className='card-img-bottom' src={`data:image/jpeg;base64,${image}`} alt="..."/>
                            <div className="m-3">
                                <i class="far fa-thumbs-up">Like</i>
                                <i class="far fa-comment-alt mx-3">Comment</i>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Posts;
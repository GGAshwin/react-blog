import React from "react";
import {Navigate, Route, useNavigate}  from 'react-router-dom'

function Write() {
    const [formData, setFormData] = React.useState('')
    const navigate = useNavigate();

    function handleChange(e) {
        setFormData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    // console.log(formData);

    function handleSubmit(e) {
        const fetchOptions = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }
        // console.log(fetchOptions.body);
        fetch('http://localhost:3001/posts/store', fetchOptions)

        e.preventDefault();
        navigate('/')

    }

    return (
        <>
            <div className="from-container">
                <label htmlFor="author">Author</label>
                <input type="text" name="author" id="author" placeholder="(Optional)"
                    onChange={handleChange}
                />
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title"
                    onChange={handleChange}
                    required
                />
                <label htmlFor="description">Description</label>
                <input type="text" name="description" id="description" placeholder="(Optional)"
                    onChange={handleChange}
                />
                <label htmlFor="content">Content</label>
                <textarea name="content" id="content"
                    onChange={handleChange}
                    required
                />
                <button id="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}

export default Write;
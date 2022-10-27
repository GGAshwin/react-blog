import React from "react";
import { useNavigate } from 'react-router-dom'

function Write() {
    const [formData, setFormData] = React.useState({
        author:'',
        title:'',
        description:'',
        content:''
    })
    const navigate = useNavigate();
    const [btnDisable, setBtnDisable] = React.useState(true);

    function handleChange(e) {
        setFormData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })

    }

    React.useEffect(()=>{
        if(formData.title!=='' && formData.content!==''){
            setBtnDisable(false)
        }
        else{
            setBtnDisable(true)
        }
    },[formData])

    // console.log(formData);
    // console.log(btnDisable);

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
            <form className="from-container">
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
                <button id="submit" disabled={btnDisable} onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default Write;
import React from "react";
import { useLocation } from 'react-router-dom'

function Blog(props) {
    const location = useLocation()
    const { from } = location.state
    const [blogContent, setBLogContent] = React.useState('')
    // console.log(location);
    React.useEffect(() => {
        // console.log(from);
        const requestOption = {
            method: 'GET',
        }
        fetch(`http://localhost:3001/post/${from}`, requestOption)
            .then((response) => response.json())
            .then((data) => {
                setBLogContent(data)
            })
    }, [])

    console.log(blogContent);

    return (
        <>
            <div className="blog-container">
                <div className="blog-title">
                    <p>{blogContent.title}</p>
                </div>
                <div className="blog-content">
                    <p>{blogContent.content}</p>
                </div>
                <div className="blog-author">
                    <blockquote>-{blogContent.author}</blockquote>
                </div>
            </div>
        </>
    )
}

export default Blog;
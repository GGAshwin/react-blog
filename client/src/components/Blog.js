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
        fetch(`https://dark-cyan-cape.cyclic.app/post/${from}`, requestOption)
            .then((response) => response.json())
            .then((data) => {
                setBLogContent(data)
            })
    }, [])

    // console.log(blogContent);

    return (
        <>
            <div className="blog-container">
                <div className="blog-title">
                    <p>{blogContent.title}</p>
                </div>
                <div className="blog-content">
                    <p style={{whiteSpace:"pre-wrap"}}>{blogContent.content}</p>
                </div>
                <div className="blog-author">
                    <b style={{fontVariant:"small-caps"}}>-{blogContent.author}</b>
                </div>
            </div>
        </>
    )
}

export default Blog;
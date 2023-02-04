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
        // fetch(`http://localhost:3001/post/${from}`, requestOption)
            .then((response) => response.json())
            .then((data) => {
                setBLogContent(data)
                console.log(blogContent.imgLink)
            })
    }, [])

    try{
        // console.log((JSON.parse(sessionStorage.getItem("data"))).find(data=>{
        //     data._id===`${from}`
        // }))
    }
    catch(e){

    }

    // console.log(blogContent);

    return (
        <>
            <div className="blog-container">
                <div className="blog-title">
                    <p>{blogContent.title}</p>
                </div>
                <div className="blog-img">
                    <img src={blogContent.imgLink} alt="img" />
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
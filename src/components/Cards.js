import React from "react";
import Card from "./Card";


function Cards() {
    const [blogData, setBlogData] = React.useState([])
    var blogArr = []

    React.useEffect(() => {
        const fetchOptions = {
            method: 'POST',
        }
        fetch("http://localhost:5000/blog", fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                setBlogData(data.data)
            })
    }, [])
    blogArr = blogData.map(e => {
        return (
            <Card key={e._id} author={e.author} description={e.description} title={e.title} id={e._id} />
        )
    })
    return (
        <>
            <div className="card-wrapper">
                {blogArr}
            </div>
        </>
    )
}

export default Cards;
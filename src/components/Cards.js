import React from "react";
import Card from "./Card";


function Cards() {
    const [blogData, setBlogData] = React.useState([])
    var blogArr = []

    React.useEffect(() => {
        const fetchOptions = {
            method: 'POST',
        }
        fetch("https://dark-cyan-cape.cyclic.app/blog", fetchOptions)
        // fetch('http://localhost:3001/blog', fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                setBlogData(data.data)
                sessionStorage.setItem("data", JSON.stringify(data.data))
            })
    }, [])

    try {
        let sessionArr = JSON.parse(sessionStorage.getItem("data"))
        blogArr = sessionArr.map(e => {
            return (
                <Card key={e._id} author={e.author} description={e.description} title={e.title} id={e._id} imgLink={e.imgLink} />
            )
        })
    }
    catch (e) {
        // console.log(blogData);
        blogArr = blogData.map(e => {
            return (
                <Card key={e._id} author={e.author} description={e.description} title={e.title} id={e._id} imgLink={e.imgLink} />
            )
        })
    }

    const styles={
        textAlign:'center',
        color:'#0c0c0f',
        fontSize:'4em',
        fontFamily:'Monospace',
        marginBottom:'20px',
        padding:'10px'
    }

    return (
        <>
            <div className="page-title" style={{fontSize:'15px'}}>
                <h1 style={styles}>Writings from our team</h1>
            </div>
            <div className="card-wrapper">
                {blogArr}
            </div>
        </>
    )
}

export default Cards;
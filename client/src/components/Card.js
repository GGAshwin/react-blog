import React from "react";
import { Outlet, Link } from "react-router-dom";
// import Blog from "./Blog";

function Card(props) {
    return (
        <>
            <div className="card">
                <div className="author-name">{props.author}</div>
                <div className="card-title">{props.title}</div>
                {props.description && <div className="card-desc">{props.description}</div>}
                <button><Link to="/read" state={{ from: `${props.id}` }} >Read More</Link></button>
                <Outlet />
            </div>
        </>
    )
}

export default Card;
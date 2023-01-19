import React from "react";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
    return (
        <>
        <nav>
            <ul>
                <Link to="/">Home</Link>
            </ul>
        </nav>
        <Outlet />
        </>
    )
}

export default Navbar;
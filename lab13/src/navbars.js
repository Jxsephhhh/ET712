import React from 'react';
import {Link} from "react-router-dom";
import './App.css'


const Navbars = function(){
    return(
        <>
            <nav className="navheader">
                <section className="iconlink">
                    <Link>QCC</Link>
                </section>
                <section className="navlinks">
                    <button className="tablink"><Link to="/">Home</Link></button>
                    <button className="tablink"><Link to="/about">About Us</Link></button>
                    <button className="tablink"><Link to="/contact">Contact Us</Link></button>
                </section>
            </nav>
        </>
    )
}

export default Navbars
import React from "react";
import "./index"
import "./index.css"

const User = function(props){
    return(
        <>
            <section className="card">
                <img src={props.image}/>
                <div className="content">
                    <a className="linkauthor">{props.username}</a>
                </div>
                <div className="metadata">
                    <span className="postdate">{props.date}</span>
                </div>
                <div className="comment">
                    <p>{props.usercomments}</p>
                </div>
            </section>
        </>
    )
}

export default User; 
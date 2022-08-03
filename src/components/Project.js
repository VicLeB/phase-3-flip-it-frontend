import React from "react";

function Project({name}){
    return(
        <div className='project-listing'>
            <a href='./#'>{name}</a> <button className="btn btn-primary delete-buttons">X</button>
        </div>
    )
}
export default Project
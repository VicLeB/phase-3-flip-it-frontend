import React from "react";

function Project({name}){
    return(
        <div className='project-listing'>
            <a href='./#'>{name}</a>
        </div>
    )
}
export default Project
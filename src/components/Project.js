import React from "react";

function Project({project, handleProjectClick}){

    function handleClick(){
        handleProjectClick(project.id)
    }

    return(
        <div className='project-listing'>
            <p onClick={handleClick}>{project.name}</p>
        </div>
    )
}
export default Project
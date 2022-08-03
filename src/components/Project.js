import React from "react";

function Project({project, handleProjectClick}){

    function handleClick(e){
        (e).preventDefault()
        handleProjectClick(project.id)
    }

    return(
        <div className='project-listing'>

            <a href='./#' onClick={handleClick}>{project.name}</a> <button className="btn btn-primary delete-buttons">X</button>

        </div>
    )
}
export default Project
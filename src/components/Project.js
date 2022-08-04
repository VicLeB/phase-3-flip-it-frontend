import React from "react";

function Project({project, handleProjectClick, handleProjectsRender}){

    function handleClick(e){
        (e).preventDefault()
        handleProjectClick(project.id)
    }

    function handleDeleteClick(){
        fetch(`http://localhost:9292/projects/${project.id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(handleProjectsRender)
    }

    return(
        <div className='project-listing'>

            <a href='./#' onClick={handleClick}>{project.name}</a> <button onClick={handleDeleteClick}className="btn btn-primary delete-buttons">X</button>

        </div>
    )
}
export default Project
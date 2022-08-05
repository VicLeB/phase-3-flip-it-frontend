import React from "react";
import { useRecoilState } from 'recoil'
import { theProjectInitialLoad } from '../atoms'

function Project({project, handleProjectClick, handleProjectsRender}){

    const [projectInitialLoad, setProjectInitialLoad] = useRecoilState(theProjectInitialLoad);

    function handleClick(e){
        (e).preventDefault()
        handleProjectClick(project.id)
    }

    function handleDeleteClick(){
        setProjectInitialLoad(true);

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
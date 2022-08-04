import React from "react";
import Project from './Project';
import Popup from 'reactjs-popup';
import { useRecoilState } from 'recoil'
import {theFormProjectName, theFormProjectDescription} from '../atoms'

function Projects({roomProjects, handleProjectClick, handleProjectsRender, roomId}){

    const [formProjectName, setFormProjectName] = useRecoilState(theFormProjectName);
    const [formProjectDescription, setFormProjectDescription] = useRecoilState(theFormProjectDescription);

    const projects = roomProjects.projects

    const projectList = projects?.map(project =>{
        return <Project key={project.id} project={project} handleProjectClick = {handleProjectClick} handleProjectsRender={handleProjectsRender}/>
    })

    function projectFormSubmit(){
        fetch("http://localhost:9292/projects",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                Accept:"application/json",
            },
            body: JSON.stringify({
                name: formProjectName,
                description: formProjectDescription,
                room_id: roomId
            })
        })
        .then(res => res.json())
        .then(handleProjectsRender)
    }


    return (
        <div className='col-md-3'>
            <div className='row'>
                <div className='col-sm-6'>
                    <div id='project-title'>
                        <h2>Projects</h2>
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div id='project-add-button'>
                        <Popup trigger={<button id="new-project-button" className="btn btn-primary">Add Project</button>} modal>
                            {close => (
                                <form onSubmit={(e) => {(e).preventDefault(); projectFormSubmit(); close(); }}>
                                    <div className='form-group'>
                                        <label htmlFor='project-name'>Project Name</label>
                                        <input type='text' name='project-name' placeholder='Project Name' onChange={(e) => setFormProjectName(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor='project-description'>Project Description</label>
                                        <textarea id='project-description' rows='5' className="form-control" onChange={(e) => setFormProjectDescription(e.target.value)} />
                                    </div>
                                    <button name="submit"  type="submit" className="btn btn-primary">Create Project</button>
                                </form>
                            )}
                        </Popup>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div id='projects-container' className='col-sm-12'>
                    {projectList}
                </div>
            </div>
        </div>
    )
}
export default Projects
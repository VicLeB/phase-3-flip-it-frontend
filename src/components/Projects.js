import React from "react";
import Project from './Project';
import Popup from 'reactjs-popup';

function Projects({roomProjects, handleProjectClick, handleProjectsRender}){
    const projects = roomProjects.projects

    const projectList = projects?.map(project =>{
        return <Project key={project.id} project={project} handleProjectClick = {handleProjectClick} handleProjectsRender={handleProjectsRender}/>
    })

    console.log(projects)

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
                            <form>
                                <div className='form-group'>
                                    <label for='project-name'>Project Name</label>
                                    <input type='text' name='project-name' placeholder='Project Name' />
                                </div>
                                <button name="submit" type="submit" className="btn btn-primary">Create Project</button>
                            </form>
                        </Popup>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div id='projects-container' className='col-sm-12'>
                    <h3>Projects</h3>
                    {projectList}
                </div>
            </div>
        </div>
    )
}
export default Projects
import React from "react";
import Project from './Project';

function Projects(){
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
                        <button className='btn btn-primary'>Add Project</button>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div id='projects-container' className='col-sm-12'>
                    <h3>Kitchen Projects</h3>
                    <Project name={'Fix Sink'} />
                    <Project name={'Install Stove'} />
                    <Project name={'Replace Countertop'} />
                </div>
            </div>
        </div>
    )
}
export default Projects
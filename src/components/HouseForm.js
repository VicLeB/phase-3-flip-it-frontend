import React from 'react';
import House from './House';
import Rooms from './Rooms';
import Projects from './Projects';
import ProjectInfo from './ProjectInfo';


function HouseForm(){
    return (
        <div className='my-house-form'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='row'>
                        <House />
                        <Rooms />
                        <Projects />
                        <ProjectInfo />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HouseForm
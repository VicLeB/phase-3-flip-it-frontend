import React from 'react';
import House from './House';
import Rooms from './Rooms';
import Projects from './Projects';
import ProjectInfo from './ProjectInfo';


function HouseForm({id}){
    return (
        <div className='my-house-form'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='row'>
                        <House id={id}/>
                        <Rooms id={id}/>
                        <Projects id={id}/>
                        <ProjectInfo id={id}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HouseForm
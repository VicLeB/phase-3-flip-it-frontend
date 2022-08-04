import React from "react";
import Tool from './Tool';
import Part from './Part';
import Popup from 'reactjs-popup';
import { useRecoilState } from 'recoil'
import {theFormProjectInfoName, theFormProjectInfoDescription, theFormProjectInfoCompleted, theFormToolName, theFormToolImage, theFormPartName, theFormPartImage, theFormPartPrice} from '../atoms'

function ProjectInfo({projectSupplies, handleSuppliesRender, projectId}){

    const [formProjectInfoName, setFormProjectInfoName] = useRecoilState(theFormProjectInfoName);
    const [formProjectInfoDescription, setFormProjectInfoDescription] = useRecoilState(theFormProjectInfoDescription);
    const [formProjectInfoCompleted, setFormProjectInfoCompleted] = useRecoilState(theFormProjectInfoCompleted);
    const [formToolName, setFormToolName] = useRecoilState(theFormToolName);
    const [formToolImage, setFormToolImage] = useRecoilState(theFormToolImage);
    const [formPartName, setFormPartName] = useRecoilState(theFormPartName);
    const [formPartImage, setFormPartImage] = useRecoilState(theFormPartImage);
    const [formPartPrice, setFormPartPrice] = useRecoilState(theFormPartPrice);

    const tools = projectSupplies.tools
    const parts = projectSupplies.parts

    const toolsList = tools?.map(tool =>{
        return <Tool key={tool.id} tool={tool} handleSuppliesRender = {handleSuppliesRender}/>
    })

    const partsList = parts?.map(part => {
        return <Part key= {part.id} part={part} handleSuppliesRender = {handleSuppliesRender}/>
    })

    function toolFormSubmit(){
        fetch("http://localhost:9292/tools",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                Accept:"application/json",
            },
            body: JSON.stringify({
                name: formToolName,
                image_url: formToolImage,
                project_id: projectId
            })
        })
        .then(res => res.json())
        .then(handleSuppliesRender)
    }

    function partFormSubmit(){
        fetch("http://localhost:9292/parts",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                Accept:"application/json",
            },
            body: JSON.stringify({
                name: formPartName,
                image_url: formPartImage,
                cost: formPartPrice,
                project_id: projectId
            })
        })
        .then(res => res.json())
        .then(handleSuppliesRender)
    }

    const cost = parts?.map(part => part.cost)
        .reduce((accumulator, a) => {
            return accumulator + a;
        }, 0);

    return(
        <div className='col-md-3'>
            {projectSupplies.name !== undefined ?
                <div className='row'>
                    <div className='col-sm-12'>
                        <form>
                            <div className="form-group">
                                <strong>Project Name</strong>
                                <p>{projectSupplies.name}</p>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="project-completed" onChange={(e) => setFormProjectInfoCompleted(e.target.value)} />
                                <label className="form-check-label" htmlFor="project-completed">Project Completed?</label>
                            </div>
                            <div className="form-group">
                                <strong>Project Description</strong>
                                <p>{projectSupplies.description}</p>
                            </div>
                        </form>
                    </div>
                </div>
            : <></>}
            {projectSupplies.name !== undefined ?
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <p>Tools Needed</p>
                            </div>
                            <div className='col-sm-6'>
                                <Popup trigger={<button id="new-tool-button" className="btn btn-primary">Add a Tool</button>} modal>
                                    {close => (
                                        <form onSubmit={(e) => {(e).preventDefault(); toolFormSubmit(); close(); }}>
                                            <div className='form-group'>
                                                <label htmlFor='tool-name'>Tool Name</label>
                                                <input type='text' name='tool-name' placeholder='Tool Name' onChange={(e) => setFormToolName(e.target.value)} />
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='tool-image'>Tool Image</label>
                                                <input type='text' name='tool-image' placeholder='Image URL' onChange={(e) => setFormToolImage(e.target.value)} />
                                            </div>
                                            <button name="submit" type="submit" className="btn btn-primary">Add Tool</button>
                                        </form>
                                    )}
                                </Popup>
                            </div>
                        </div>
                        <div id='tools-list-container'>
                            <div className='row'>
                                {toolsList}
                            </div>
                        </div>
                    </div>
                </div>
            : <></>}
            {projectSupplies.name !== undefined ?
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <p>Parts Needed</p>
                            </div>
                            <div className='col-sm-6'>
                                <Popup trigger={<button id="new-part-button" className="btn btn-primary">Add a Part</button>} modal>
                                    {close => (
                                        <form onSubmit={(e) => {(e).preventDefault(); partFormSubmit(); close(); }}>
                                            <div className='form-group'>
                                                <label htmlFor='part-name'>Part Name</label>
                                                <input type='text' name='part-name' placeholder='Part Name' onChange={(e) => setFormPartName(e.target.value)} />
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='part-image'>Part Image</label>
                                                <input type='text' name='part-image' placeholder='Image URL' onChange={(e) => setFormPartImage(e.target.value)} />
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='part-price'>Part Price</label>
                                                <input type='text' name='part-price' placeholder='Part Price' onChange={(e) => setFormPartPrice(e.target.value)} />
                                            </div>
                                            <button name="submit" type="submit" className="btn btn-primary">Add Part</button>
                                        </form>
                                    )}
                                </Popup>
                            </div>
                        </div>
                    </div>
                </div>
            : <></>}
            {projectSupplies.name !== undefined ?
                <div id='parts-list-container'>
                    <div className='row'>
                        {partsList}
                    </div>
                </div>
            : <></>}
            {projectSupplies.name !== undefined ?
                <div className='row'>
                    <div className='col-sm-12'>
                        <p><strong>Total Cost: ${cost}</strong></p>
                    </div>
                </div>
            : <></>}

        </div>
    )
}
export default ProjectInfo
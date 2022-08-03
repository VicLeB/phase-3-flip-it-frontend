import React from "react";
import Tool from './Tool';
import Part from './Part';
import Popup from 'reactjs-popup';
import { useRecoilState } from 'recoil'
import {theFormProjectInfoName, theFormProjectInfoDescription, theFormProjectInfoCompleted, theFormToolName, theFormToolImage, theFormPartName, theFormPartImage, theFormPartPrice} from '../atoms'

function ProjectInfo({projectSupplies}){

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
        return <Tool key={tool.id} tool={tool}/>
    })

    const partsList = parts?.map(part => {
        return <Part key= {part.id} part={part}/>
    })

    function toolFormSubmit(e){
        (e).preventDefault();
    }

    function partFormSubmit(e){
        (e).preventDefault();
    }

    return(
        <div className='col-md-3'>
            <div className='row'>
                <div className='col-sm-12'>
                    <form>
                        <div className="form-group">
                            <label htmlFor='project-name'>Project Name</label>
                            <input type="text" id='project-name' className="form-control" onChange={(e) => setFormProjectInfoName(e.target.value)} value={projectSupplies.name} />
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="project-completed" onChange={(e) => setFormProjectInfoCompleted(e.target.value)} />
                            <label className="form-check-label" htmlFor="project-completed">Project Completed?</label>
                        </div>
                        <div className="form-group">
                            <label htmlFor='project-description'>Project Description</label>
                            <textarea id='project-description' rows='5' className="form-control" onChange={(e) => setFormProjectInfoDescription(e.target.value)} value={projectSupplies.description} />
                        </div>
                    </form>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-12'>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <p>Tools Needed</p>
                        </div>
                        <div className='col-sm-6'>
                            <Popup trigger={<button id="new-tool-button" className="btn btn-primary">Add a Tool</button>} modal>
                                <form onSubmit={toolFormSubmit}>
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
            <div className='row'>
                <div className='col-sm-12'>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <p>Parts Needed</p>
                        </div>
                        <div className='col-sm-6'>
                            <Popup trigger={<button id="new-part-button" className="btn btn-primary">Add a Part</button>} modal>
                                <form onSubmit={partFormSubmit}>
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
                            </Popup>
                        </div>
                    </div>
                </div>
            </div>
            <div id='parts-list-container'>
                <div className='row'>
                    {partsList}
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-12'>
                    <p><strong>Total Cost: $99.99</strong></p>
                </div>
            </div>
        </div>
    )
}
export default ProjectInfo
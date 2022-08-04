import React from "react";
import Tool from './Tool';
import Part from './Part';
import Popup from 'reactjs-popup';

function ProjectInfo({projectSupplies, handleSuppliesRender}){
    const tools = projectSupplies.tools
    const parts = projectSupplies.parts

    const toolsList = tools?.map(tool =>{
        return <Tool key={tool.id} tool={tool} handleSuppliesRender = {handleSuppliesRender}/>
    })

    const partsList = parts?.map(part => {
        return <Part key= {part.id} part={part} handleSuppliesRender = {handleSuppliesRender}/>
    })
    return(
        <div className='col-md-3'>
            <div className='row'>
                <div className='col-sm-12'>
                    <form>
                        <div className="form-group">
                            <label htmlFor='project-name'>Project Name</label>
                            <input type="text" id='project-name' className="form-control" value={projectSupplies.name} />
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="project-completed" />
                            <label className="form-check-label" htmlFor="project-completed">Project Completed?</label>
                        </div>
                        <div className="form-group">
                            <label htmlFor='project-description'>Project Description</label>
                            <textarea id='project-description' rows='5' className="form-control" value={projectSupplies.description} />
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
                                <form>
                                    <div className='form-group'>
                                        <label htmlFor='tool-name'>Tool Name</label>
                                        <input type='text' name='tool-name' placeholder='Tool Name' />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='tool-image'>Tool Image</label>
                                        <input type='text' name='tool-image' placeholder='Image URL' />
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
                                <form>
                                    <div className='form-group'>
                                        <label htmlFor='part-name'>Part Name</label>
                                        <input type='text' name='part-name' placeholder='Part Name' />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='part-image'>Part Image</label>
                                        <input type='text' name='part-image' placeholder='Image URL' />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='part-price'>Part Price</label>
                                        <input type='text' name='part-price' placeholder='Part Price' />
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
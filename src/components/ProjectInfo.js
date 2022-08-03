import React from "react";
import Tool from './Tool';
import Part from './Part';
import Popup from 'reactjs-popup';

function ProjectInfo(){
    return(
        <div className='col-md-3'>
            <div className='row'>
                <div className='col-sm-12'>
                    <form>
                        <div class="form-group">
                            <label for='project-name'>Project Name</label>
                            <input type="text" id='project-name' class="form-control" value='Fix Sink' />
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="project-completed" />
                            <label class="form-check-label" for="project-completed">Project Completed?</label>
                        </div>
                        <div class="form-group">
                            <label for='project-description'>Project Description</label>
                            <textarea id='project-description' rows='5' class="form-control" value='The faucet is leaking so I need to replace it.' />
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
                                        <label for='tool-name'>Tool Name</label>
                                        <input type='text' name='tool-name' placeholder='Tool Name' />
                                    </div>
                                    <div className='form-group'>
                                        <label for='tool-image'>Tool Image</label>
                                        <input type='text' name='tool-image' placeholder='Image URL' />
                                    </div>
                                    <button name="submit" type="submit" className="btn btn-primary">Add Tool</button>
                                </form>
                            </Popup>
                        </div>
                    </div>
                    <div id='tools-list-container'>
                        <div className='row'>
                            <Tool name={'Hammer'} image={'https://cdn-icons-png.flaticon.com/512/2505/2505264.png'} />
                            <Tool name={'Wrench'} image={'https://www.iconpacks.net/icons/1/free-wrench-icon-951-thumb.png'} />
                            <Tool name={'Screwdriver'} image={'https://static.thenounproject.com/png/45421-200.png'} />
                            <Tool name={'Blowtorch'} image={'https://static.thenounproject.com/png/295351-200.png'} />                          
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
                                        <label for='part-name'>Part Name</label>
                                        <input type='text' name='part-name' placeholder='Part Name' />
                                    </div>
                                    <div className='form-group'>
                                        <label for='part-image'>Part Image</label>
                                        <input type='text' name='part-image' placeholder='Image URL' />
                                    </div>
                                    <div className='form-group'>
                                        <label for='part-price'>Part Price</label>
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
                    <Part name={'Faucet'} image={'https://cdn-icons-png.flaticon.com/512/3096/3096626.png'} price={'99.99'} />
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
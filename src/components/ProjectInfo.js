import React from "react";
import Tool from './Tool';
import Part from './Part';

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
                            <button className='btn btn-primary'>Add a Tool</button>
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
                            <button className='btn btn-primary'>Add a Part</button>
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
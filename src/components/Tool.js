import React from "react";

function Tool({tool}){
    return(
        <div className='col-sm-12 single-tool'>
            <div className='row'>
                <div className='col-sm-3 tool-image-container'>
                    <img className='tool-image' src={tool.image_url} alt='tool' />
                </div>
                <div className='col-sm-6'>
                    <p>{tool.name}</p>
                </div>
                <div className='col-sm-3'>
                    <button className="btn btn-primary tools-delete">X</button>
                </div>
            </div>
        </div>
    )
}
export default Tool
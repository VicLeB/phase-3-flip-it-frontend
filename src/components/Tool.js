import React from "react";

function Tool({name, image}){
    return(
        <div className='col-sm-12 single-tool'>
            <div className='row'>
                <div className='col-sm-3 tool-image-container'>
                    <img className='tool-image' src={image} alt='tool' />
                </div>
                <div className='col-sm-9'>
                    <p>{name}</p>
                </div>
            </div>
        </div>
    )
}
export default Tool
import React from 'react';

function HousePreview({image, houseName}){
    return (
    <div className='col-sm-2 house-preview'>
        <div className='house-preview-image'>
            <img src={image} alt={houseName} />
        </div>
        <div className='house-preview-name'>
            <h5>{houseName}</h5>
        </div>
        <div className='house-preview-button'>
            <button className='btn btn-primary'>View Project</button>
        </div>
    </div>
    )
}
export default HousePreview
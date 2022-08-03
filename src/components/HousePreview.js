import React from 'react';

function HousePreview({house}){
    return (
    <div className='row'>
        <div className='col-sm-2 house-preview'>
            <div className='house-preview-image'>
                <img src={house.image_url} alt={house.house_name} />
            </div>
            <div className='house-preview-name'>
                <h5>{house.house_name}</h5>
            </div>
            <div className='house-preview-button'>
                <button className='btn btn-primary'>View Project</button>
            </div>
        </div>
    </div>
    )
}
export default HousePreview
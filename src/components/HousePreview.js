import React from 'react'

function HousePreview({house}) {
return (
    <div className='col-sm-2 house-preview'>
        <div className='house-preview-image'>
            <img height= "150" width= "150" src={house.image_url} alt='House Preview Button' />
        </div>
        <div className='house-preview-name'>
            <h5>{house.owner_name}</h5>
        </div>
        <div className='house-preview-button'>
            <button className='btn btn-primary'>View Project</button>
        </div>
    </div>
)
}

export default HousePreview
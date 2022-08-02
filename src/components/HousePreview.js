import React from 'react'

function HousePreview({house}) {
return (
    <div className='col-sm-2 house-preview'>
        <div className='house-preview-image'>
            <img src='https://cdn-icons-png.flaticon.com/512/25/25694.png' alt='House Preview Button' />
        </div>
        <div className='house-preview-name'>
            <h5>Project2</h5>
        </div>
        <div className='house-preview-button'>
            <button className='btn btn-primary'>View Project</button>
        </div>
    </div>
)
}

export default HousePreview
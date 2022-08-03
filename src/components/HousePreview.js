import React from 'react';
import { Link } from "react-router-dom"

function HousePreview({house}){

    return (
            <div className='col-sm-2 house-preview'>
                <div className='house-preview-image'>
                    <img src={house.image_url} alt={house.house_name} />
                </div>
                <div className='house-preview-name'>
                    <h5>{house.house_name}</h5>
                </div>
                <div className='house-preview-button'>
                    <Link to={`/home/${house.id}`} className='btn btn-primary'>View Project</Link>
                </div>
            </div>
    )
}
export default HousePreview
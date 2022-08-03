import React from "react";

function Part({part}){


    return(
        <div className='col-sm-12'>
            <div className='row'>
                <div className='col-sm-2 part-image-container'>
                    <img className='part-image' src={part.image_url} alt='part' />
                </div>
                <div className='col-sm-4'>
                    <p>{part.name}</p>
                </div>
                <div className='col-sm-3 part-price'>
                    <p>{'$' + part.cost}</p>
                </div>
                <div className='col-sm-2'>
                    <button className="btn btn-primary parts-delete">X</button>
                </div>
            </div>
        </div>
    )
}
export default Part
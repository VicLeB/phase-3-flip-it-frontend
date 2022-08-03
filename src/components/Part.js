import React from "react";

function Part({name, image, price}){
    return(
        <div className='col-sm-12'>
            <div className='row'>
                <div className='col-sm-2 part-image-container'>
                    <img className='part-image' src={image} alt='part' />
                </div>
                <div className='col-sm-4'>
                    <p>{name}</p>
                </div>
                <div className='col-sm-3 part-price'>
                    <p>{'$' + price}</p>
                </div>
                <div className='col-sm-2'>
                    <button className="btn btn-primary parts-delete">X</button>
                </div>
            </div>
        </div>
    )
}
export default Part
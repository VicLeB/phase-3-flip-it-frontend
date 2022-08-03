import React from "react";

function Room({name}){
    return(
        <div className='room-listing'>
            <a href='./#'>{name}</a> <button className="btn btn-primary delete-buttons">X</button>
        </div>
    )
}
export default Room
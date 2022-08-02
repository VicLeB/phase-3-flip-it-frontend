import React from "react";

function Room({name}){
    return(
        <div className='room-listing'>
            <a href='./#'>{name}</a>
        </div>
    )
}
export default Room
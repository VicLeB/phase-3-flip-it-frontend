import React from "react";

function Room({room, handleRoomClick}){

    function handleClick(e){
        (e).preventDefault()
        handleRoomClick(room.id)
    }

    return(
        <div className='room-listing'>
            <a href='./#' onClick= {handleClick}>{room.name}</a> <button className="btn btn-primary delete-buttons">X</button>
        </div>
    )
}
export default Room
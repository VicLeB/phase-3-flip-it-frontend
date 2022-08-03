import React from "react";

function Room({room, handleRoomClick}){

    function handleClick(){
        handleRoomClick(room.id)
    }

    return(
        <div className='room-listing'>
            <p onClick= {handleClick}>{room.name}</p>
        </div>
    )
}
export default Room
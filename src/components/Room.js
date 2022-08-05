import React from "react";
import { useRecoilState } from 'recoil'
import {theInitialLoad} from '../atoms'

function Room({room, handleRoomClick, handleRoomsRender}){

    function handleClick(e){
        (e).preventDefault()
        handleRoomClick(room.id)
    }

    function handleDeleteClick(){
        fetch(`http://localhost:9292/rooms/${room.id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(handleRoomsRender)

    }

    return(
        <div className='room-listing'>
            <a href='./#' onClick= {handleClick}>{room.name}</a> <button onClick={handleDeleteClick} className="btn btn-primary delete-buttons">X</button>
        </div>
    )
}
export default Room
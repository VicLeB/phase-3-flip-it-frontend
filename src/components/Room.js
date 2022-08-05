import React from "react";
import { useRecoilState } from 'recoil'
import { theRoomInitialLoad, theProjectInitialLoad } from '../atoms'

function Room({room, handleRoomClick, handleRoomsRender}){

    const [roomInitialLoad, setroomInitialLoad] = useRecoilState(theRoomInitialLoad);
    const [projectInitialLoad, setProjectInitialLoad] = useRecoilState(theProjectInitialLoad);

    function handleClick(e){
        (e).preventDefault()
        handleRoomClick(room.id)
    }

    function handleDeleteClick(){
        setroomInitialLoad(true)
        setProjectInitialLoad(true)
        
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
import React, {useState, useEffect} from "react";
import Room from './Room'

function Rooms({id, handleRoomClick}){
    const [rooms, setRooms] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:9292/houses/${id}/rooms`)
        .then(res=> res.json())
        .then(setRooms)
    },[])

    const roomList = rooms.map(room => {
        return <Room key={room.id} room={room} handleRoomClick={handleRoomClick}/>
    })

    return (
        <div className='col-md-3'>
            <div className='row'>
                <div className='col-sm-6'>
                    <div id='room-title'>
                        <h2>Rooms</h2>
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div id='room-add-button'>
                        <button className='btn btn-primary'>Add Room</button>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div id='rooms-container' className='col-sm-12'>
                    {roomList}
                </div>
            </div>
        </div>
    )
}
export default Rooms
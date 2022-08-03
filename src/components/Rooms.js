import React, {useState, useEffect} from "react";
import Room from './Room'
import Popup from 'reactjs-popup';

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
                        <Popup trigger={<button id="new-room-button" className="btn btn-primary">Add Room</button>} modal>
                            <form>
                                <div className='form-group'>
                                    <label htmlFor='room-name'>Room Name</label>
                                    <input type='text' name='room-name' placeholder='Room Name' />
                                </div>
                                <button name="submit" type="submit" className="btn btn-primary">Create Room</button>
                            </form>
                        </Popup>
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
import React from "react";
import Room from './Room'

function Rooms(){
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
                    <Room name={'Kitchen'} />
                    <Room name={'Guest Bedroom'} />
                    <Room name={'Master Bedroom'} />
                </div>
            </div>
        </div>
    )
}
export default Rooms
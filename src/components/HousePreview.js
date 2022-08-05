import React from 'react';
import { Link } from "react-router-dom"
import { useRecoilState } from 'recoil'
import { theRoomInitialLoad, theProjectInitialLoad } from '../atoms'

function HousePreview({house}){

    const [roomInitialLoad, setroomInitialLoad] = useRecoilState(theRoomInitialLoad);
    const [projectInitialLoad, setProjectInitialLoad] = useRecoilState(theProjectInitialLoad);

    setroomInitialLoad(true);
    setProjectInitialLoad(true);

    return (
            <div className='col-sm-2 house-preview'>
                <div className='house-preview-image'>
                    <img src={house.image_url} alt={house.house_name} />
                </div>
                <div className='house-preview-name'>
                    <p>{house.house_name}</p>
                </div>
                <div className='house-preview-button'>
                    <Link to={`/home/${house.id}`} className='btn btn-primary'>View Project</Link>
                </div>
            </div>
    )
}
export default HousePreview
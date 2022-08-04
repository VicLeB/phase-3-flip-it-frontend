import React, {useEffect} from 'react';
import House from './House';
import Rooms from './Rooms';
import Projects from './Projects';
import ProjectInfo from './ProjectInfo';
import { useRecoilState } from 'recoil'
import { theHouseDetials, theRoomId, theAddress, theRoomProjects, theProjectId, theProjectSupplies } from '../atoms'


function HouseForm({id}){
    const [houseDetails, setHouseDetails] = useRecoilState(theHouseDetials);
    const [roomId, setRoomId] = useRecoilState(theRoomId);
    const [address, setAddress] = useRecoilState(theAddress);
    const [roomProjects, setRoomProjects] = useRecoilState(theRoomProjects);
    const [projectId, setProjectId] = useRecoilState(theProjectId);
    const [projectSupplies, setProjectSupplies] = useRecoilState(theProjectSupplies);

    console.log(id)

    useEffect(()=>{
        fetch(`http://localhost:9292/houses/${id}`)
        .then(res => res.json())
        .then(setHouseDetails)
    },[id])


    useEffect(()=>{
        fetch(`http://localhost:9292/houses/${id}/address`)
        .then(res=> res.json())
        .then(setAddress)
    },[id])

    useEffect(()=>{
        fetch(`http://localhost:9292/rooms/${roomId}`)
        .then(res => res.json())
        .then(setRoomProjects)
    },[roomId])

    useEffect(()=>{
        fetch(`http://localhost:9292/projects/${projectId}`)
        .then(res => res.json())
        .then(setProjectSupplies)
    },[projectId])

    function handleSuppliesRender(){
        fetch(`http://localhost:9292/projects/${projectId}`)
        .then(res => res.json())
        .then(setProjectSupplies)
    }

    function handleProjectsRender(){
        fetch(`http://localhost:9292/rooms/${roomId}`)
        .then(res => res.json())
        .then(setRoomProjects)
    }



    if (houseDetails === undefined) {
        return <div>Loading...</div>
    }

    // console.log(houseDetails)
    console.log(roomId)
    // console.log(address)
    console.log(roomProjects)
    console.log(projectSupplies)

    function handleRoomClick(roomIdent){
        setRoomId(roomIdent)
    }

    function handleProjectClick(projectIdent){
        setProjectId(projectIdent)
    }


    return (
        <div className='my-house-form'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='row'>
                        <House address = {address}/>
                        <Rooms id={id} handleRoomClick={handleRoomClick} />
                        <Projects roomProjects = {roomProjects} handleProjectClick={handleProjectClick} handleProjectsRender={handleProjectsRender}/>
                        <ProjectInfo id={id} projectSupplies= {projectSupplies} handleSuppliesRender={handleSuppliesRender}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HouseForm
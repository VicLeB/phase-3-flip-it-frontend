import React from 'react'
import HouseForm from '../components/HouseForm'
import {useParams} from 'react-router-dom'

function HouseProject() {
    const {id} = useParams()
return (
    <div>
        <HouseForm id={id}/>
    </div>
)
}

export default HouseProject
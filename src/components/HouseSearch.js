import React, { useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import CreateNewHome from './CreateNewHome';
import {theHouses} from '../atoms'


function HouseSearch(){
  const [houses, setHouses] = useRecoilState(theHouses);

  useEffect(()=>{
    fetch('http://localhost:9292/houses')
    .then(res => res.json())
    .then(setHouses)
  },[])

  const houseCatalog = houses.map(house => {
    return <SearchResults key={house.id} house={house}/>
  })

    return (
      <div className='other-houses-search'>
          <div className='row'>
            <SearchBar />
            <CreateNewHome />
          </div>
          <div className='col-md-12' id='house-preview-container'>
            <div className='row'>
              {houseCatalog}
            </div>
          </div>
      </div>
        )
}

    export default HouseSearch
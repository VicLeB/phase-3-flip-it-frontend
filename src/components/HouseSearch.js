import React, { useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import CreateNewHome from './CreateNewHome';
import { useRecoilState } from 'recoil'
import {theHouses, theSearchData} from '../atoms'


function HouseSearch(){

  const [houses, setHouses] = useRecoilState(theHouses);
  const [searchData, setSearchData] = useRecoilState(theSearchData);

  useEffect(()=>{
    fetch('http://localhost:9292/houses')
    .then(res => res.json())
    .then(setHouses)
  },[])

  let houseCatalog = []

  if(searchData === ''){

    houseCatalog = houses.map(house => <SearchResults key={house.id} house={house}/> )

  }
  else{
    const houseFilteredCatalog = houses.filter(house => house.house_name.includes(searchData.toLowerCase()))
    houseCatalog = houseFilteredCatalog.map(house => <SearchResults key={house.id} house={house}/> )
  }

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
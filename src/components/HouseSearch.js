import React, { useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';


function HouseSearch(){
  const [houses, setHouses] = useState([])

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

            <SearchBar />
            <div className='col-md-12' id='house-preview-container'>
            {houseCatalog}
            </div>
        </div>
        )
}

    export default HouseSearch
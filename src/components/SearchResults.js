import React from 'react';
import HousePreview from './HousePreview';

function SearchResults({house}){
    return (
        <>
            <HousePreview house={house}  houseName={house.house_name} />
        </>
    )
}
export default SearchResults
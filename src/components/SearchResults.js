import React from 'react';
import HousePreview from './HousePreview';

function SearchResults({house}){
    return (
        <div className='column'>
                    <HousePreview house={house}  houseName={house.house_name} />
        </div>
    )
}
export default SearchResults
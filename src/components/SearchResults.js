import React from 'react';
import HousePreview from './HousePreview';

function SearchResults(){
    return (
        <div className='row'>
            <div className='col-md-12' id='house-preview-container'>
                <div className='row'>
                    <HousePreview image={'https://cdn-icons-png.flaticon.com/512/25/25694.png'} houseName='Project1' />
                    <HousePreview image={'https://cdn-icons-png.flaticon.com/512/25/25694.png'} houseName='Project2' />
                    <HousePreview image={'https://cdn-icons-png.flaticon.com/512/25/25694.png'} houseName='Project3' />
                    <HousePreview image={'https://cdn-icons-png.flaticon.com/512/25/25694.png'} houseName='Project4' />
                    <HousePreview image={'https://cdn-icons-png.flaticon.com/512/25/25694.png'} houseName='Project5' />
                    <HousePreview image={'https://cdn-icons-png.flaticon.com/512/25/25694.png'} houseName='Project6' />
                    <HousePreview image={'https://cdn-icons-png.flaticon.com/512/25/25694.png'} houseName='Project7' />
                </div>
            </div>
        </div>  
    )
}
export default SearchResults
import React from 'react'

function SearchBar(){
    return (
        
        <div className='col-md-4'>
            <form>
                <div className='form-group house-search'>
                    <input type='text' className='form-control' placeholder='Search for other Houses' />
                </div>
            </form>
        </div>
        )
    }
export default SearchBar
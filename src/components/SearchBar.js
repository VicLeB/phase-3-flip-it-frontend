import React from 'react'
import { useRecoilState } from 'recoil'
import {theSearchData} from '../atoms'

function SearchBar(){

    const [searchData, setSearchData] = useRecoilState(theSearchData);

    return (
        
        <div className='col-md-4'>
            <form>
                <div className='form-group house-search'>
                    <input type='text' className='form-control' placeholder='Search for other Houses' onChange={(e) => setSearchData(e.target.value)} />
                </div>
            </form>
        </div>
        )
    }
export default SearchBar
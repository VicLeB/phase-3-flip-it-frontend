import React from 'react'
import {Link} from 'react-router-dom'

function Header(){
    return (
        <div className='header'>
          <div className='row'>
            <div className='col-md-4'>
              <Link to="/"><h1>Flip-it</h1></Link>
            </div>
            <div className='col-md-8'>
            </div>
          </div>
        </div>
    )
}

export default Header
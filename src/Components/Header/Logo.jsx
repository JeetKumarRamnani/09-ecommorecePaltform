import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <div className='Logo-Container w-28 '>
        <Link to='/'><img src="https://icms-image.slatic.net/images/ims-web/e650d6ca-1841-4646-b0e9-4ddbf2beb731.png" alt="" className='w-full' />
        </Link>
    </div>
  )
}

export default Logo
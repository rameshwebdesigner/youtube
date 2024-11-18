import React from 'react'
import Sidebar from './Sidebar'
import Maincontainer from './Maincontainer'

const Body = () => {
    return (
        <div className='flex pl-4 pr-4'>
            <Sidebar />
            <Maincontainer />
        </div>
    )
}

export default Body
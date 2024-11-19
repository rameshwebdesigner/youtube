import React from 'react'
import Sidebar from './Sidebar'
import Maincontainer from './Maincontainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
    return (
        <div className='flex pl-4 pr-4'>
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Body
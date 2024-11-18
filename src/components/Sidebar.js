import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
    console.log("isMenuOpen", isMenuOpen);

    if (!isMenuOpen) return null;
    return (
        <div className='flex-col p-5 shadow-lg w-56'>
            <h2>Subscription</h2>
            <ul>
                <li>Music</li>
                <li>Dance</li>
            </ul>
        </div>
    )
}

export default Sidebar
import React from 'react'

const Button = (props) => {
     return (
          <div>
               <button className='px-3 p-1 m-2 bg-gray-200 rounded-md'>{props.name}</button>
          </div>
     )
}

export default Button
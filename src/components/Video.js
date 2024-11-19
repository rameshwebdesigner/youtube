import React from 'react'

const Video = (props) => {
     debugger;
     console.log(props.info)
     const { snippet, statistics } = props.info;
     // if (!snippet) return null;
     const { title, thumbnails, channelTitle } = snippet;
     return (
          <div className='p-2 m-2 w-72 shadow-lg'>

               <img alt={title} src={thumbnails.medium.url} className='rounded-md' />
               <ul>
                    <li className='font-bold text-lg'>{title}</li>
                    <li>{channelTitle}</li>
                    <li>{statistics.viewCount}</li>

               </ul>
          </div>
     )
}

export default Video
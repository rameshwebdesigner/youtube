import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { YOUTUBE_API } from "../utils/constants"
import Video from './Video';

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    const getVideos = async () => {
        const data = await fetch(YOUTUBE_API)
        const res = await data.json();

        setVideos(res.items);
    }
    useEffect(() => {
        getVideos();
    }, []);

    return (
        <div className='flex flex-wrap'>
            {videos.map((item) => <Video key={item.id} info={item} />)}
        </div>
    )
}

export default VideoContainer
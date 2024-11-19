import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { YOUTUBE_API } from "../utils/constants"
import Video from './Video';
import { Link } from 'react-router-dom';

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
            {videos.map((item) =>
                <Link to={"/watch?v=" + item.id} key={item.id} ><Video info={item} /></Link>
            )}
        </div>
    )
}

export default VideoContainer
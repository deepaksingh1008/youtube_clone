import React from 'react'
import './VideoCard.css'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
const VideoCrad = ({ thumbnail, videoId, channelId, channelTitle, description, publishTime, publishedAt, title }) => {
    const navigate = useNavigate();
    return (
        <div className='s-card' onClick={() => navigate(`/video-details/${videoId}`)}>
            <div className="s-thumbnails">
                <img src={thumbnail} alt="thumbnail" />
            </div>
            <div className="s-dis">
                <p className="s-title">{title}</p>
                <p className='s-channel'><span>{channelTitle}</span><IoIosCheckmarkCircleOutline /></p>
                <p className='s-views'>Views</p>
            </div>

        </div>
    )
}

export default VideoCrad
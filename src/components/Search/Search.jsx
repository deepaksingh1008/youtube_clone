import React from 'react';
import './Search.css'; // Make sure to update the CSS file name if needed
import { useNavigate } from 'react-router-dom';
const VideoThumbnail = ({ video }) => {
    const navigate = useNavigate();
    console.log('videos->', video?.snippet?.channelTitle);
    return (
        <>

            <div className="video-thumbnail" onClick={() => navigate(`/video-details/${video?.id?.videoId}`)} >
                <img src={video?.snippet?.thumbnails?.default?.url} alt={video?.snippet?.title} className="thumbnail-image" />
                <div className="video-info">
                    <h3 className="video-title">{video?.snippet?.title}</h3>
                    <p className="video-channel">{video?.snippet?.channelTitle}</p>
                </div>
            </div >


        </>
    )
};

export default VideoThumbnail;

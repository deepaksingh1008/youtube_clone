import React from 'react';
import './VideoItem.css';
import { useNavigate } from 'react-router-dom';
const VideoItem = ({ video }) => {
    const navigate = useNavigate();
    return (
        <div className="video-item" onClick={() => navigate(`/video-details/${video?.id?.videoId}`)}>
            <img
                src={video?.snippet?.thumbnails?.default?.url}
                alt={video?.snippet?.title}
                className="video-thumbnail"
            />
            <div className="video-info">
                <h3>{video?.snippet?.title}</h3>
                {/* <p>{video.views} • {video.time}</p> */}
            </div>
        </div>
    );
}

export default VideoItem;

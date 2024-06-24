import React from 'react';
import './VideoList.css';
import VideoItem from './VideoItem';



const VideoList = ({ videoList }) => {
    return (
        <>
            {videoList ? <div className="video-list">
                {videoList?.map((video, idx) => (
                    <VideoItem key={idx} video={video} />
                ))}
            </div> : <h1 style={{ color: 'white' }}>Loading....</h1>}

        </>
    );
}

export default VideoList;

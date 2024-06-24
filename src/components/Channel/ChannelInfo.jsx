import React from 'react';
import './ChannelInfo.css';

const ChannelInfo = ({ img, name, username, suscriber, toVideos, videoType, setVideoType, fetchChannelHomeVideo, fetchPlaylistVideo }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px', background: '#202020', borderBottom: '1px solid #333' }}>
            <div className="channel-info">
                <img
                    src={img}
                    alt="Channel Logo"
                    className="channel-logo"
                />
                <div className="channel-details">
                    <h1>{name}</h1>
                    <p>{username} • {suscriber} subscribers • {toVideos} videos</p>
                    <p>Indian YouTube News Channel</p>
                    <button>Subscribe</button>
                </div>

            </div>
            <div className='channel-video' style={{ display: 'flex', gap: '20px', position: 'relative', bottom: '0' }}>
                <li onClick={() => {
                    fetchChannelHomeVideo()
                    setVideoType('home')

                }}>Video</li>
                <li onClick={() => {

                    setVideoType('playlist')
                    fetchPlaylistVideo()
                }}>Playlist</li>

            </div>

        </div>
    );
}

export default ChannelInfo;

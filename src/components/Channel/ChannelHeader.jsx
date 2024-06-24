import React from 'react';
import './ChannelHeader.css';

const ChannelHeader = ({ image }) => {
    return (
        <div className="channel-header">
            <img
                src={image || "https://via.placeholder.com/1500x500"}
                alt="Channel Banner"
                className="channel-banner"
            />
        </div>
    );
}

export default ChannelHeader;

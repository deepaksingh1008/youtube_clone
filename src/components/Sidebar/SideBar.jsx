import React from 'react';
import './Sidebar.css';
import { FaHome, FaHistory, FaPlay, FaClock, FaThumbsUp, FaTrophy, FaCog, FaQuestionCircle, FaFlag, FaShoppingBag, FaMusic, FaFilm, FaTv, FaGamepad, FaNewspaper, FaBroadcastTower, FaTshirt, FaPodcast, FaRegUserCircle, FaCut } from 'react-icons/fa';
import { MdSubscriptions, MdOutlineVideoLibrary, MdOutlineFeedback } from 'react-icons/md';

const Sidebar = ({ sidebarOpen }) => {


    return (
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
            {/* Close button for mobile */}

            <div className="sidebar__section">
                <div className="sidebar__item">
                    <FaHome /> Home
                </div>
                <div className="sidebar__item">
                    <FaRegUserCircle /> Shorts
                </div>
                <div className="sidebar__item">
                    <MdSubscriptions /> Subscriptions
                </div>
            </div>
            <hr />
            <div className="sidebar__section">
                <div className="sidebar__item">
                    <MdOutlineVideoLibrary /> Library
                </div>
                <div className="sidebar__item">
                    <FaHistory /> History
                </div>
                <div className="sidebar__item">
                    <FaPlay /> Your videos
                </div>
                <div className="sidebar__item">
                    <FaClock /> Watch Later
                </div>
                <div className="sidebar__item">
                    <FaThumbsUp /> Liked videos
                </div>
                <div className="sidebar__item">
                    <FaCut /> Your clips
                </div>
            </div>
            <hr />
            <div className="sidebar__section">
                <div className="sidebar__item">
                    <FaTrophy /> Sport
                </div>
                <div className="sidebar__item">
                    <FaShoppingBag /> Shopping
                </div>
                <div className="sidebar__item">
                    <FaMusic /> Music
                </div>
                <div className="sidebar__item">
                    <FaFilm /> Films
                </div>
                <div className="sidebar__item">
                    <FaTv /> Live
                </div>
                <div className="sidebar__item">
                    <FaGamepad /> Gaming
                </div>
                <div className="sidebar__item">
                    <FaNewspaper /> News
                </div>
                <div className="sidebar__item">
                    <FaBroadcastTower /> Podcasts
                </div>
                <div className="sidebar__item">
                    <FaTshirt /> Fashion & Beauty
                </div>
            </div>
            <hr />
            <div className="sidebar__section">
                <div className="sidebar__item">
                    YouTube Premium
                </div>
                <div className="sidebar__item">
                    <FaCog /> YouTube Studio
                </div>
                <div className="sidebar__item">
                    <FaMusic /> YouTube Music
                </div>
                <div className="sidebar__item">
                    <FaRegUserCircle /> YouTube Kids
                </div>
            </div>
            <hr />
            <div className="sidebar__section">
                <div className="sidebar__item">
                    <FaCog /> Settings
                </div>
                <div className="sidebar__item">
                    <FaFlag /> Report history
                </div>
                <div className="sidebar__item">
                    <FaQuestionCircle /> Help
                </div>
                <div className="sidebar__item">
                    <MdOutlineFeedback /> Send feedback
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

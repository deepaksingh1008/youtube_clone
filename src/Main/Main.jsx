import React from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/SideBar'
import Video from '../components/Video/Video'
import { fetchFromApi } from '../Api-client/FetchFromApi'
import { useState, useEffect } from 'react'
const Main = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => {
                // console.log("data=>", data.items);
                setVideos(data?.items)
                setLoading(false)
            })

    }, [selectedCategory]);
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return (
        <div className="app">
            <Header toggleSidebar={toggleSidebar} />
            <div className="app__body">
                <Sidebar sidebarOpen={sidebarOpen} />
                <div className="main-content" style={sidebarOpen ? { marginLeft: '240px' } : { marginLeft: '0px' }}>
                    <div className='videos' >
                        {loading && <h1 style={{ color: 'white' }}>Loading...</h1>}
                        {

                            videos?.map((video, idx) => (
                                <Video key={idx} thumbnail={video.snippet.thumbnails.default.url}
                                    videoId={video.id.videoId}
                                    channelId={video.snippet.channelId}
                                    channelTitle={video.snippet.channelTitle}
                                    description={video.snippet.description}
                                    publishTime={video.snippet.publishTime}
                                    publishedAt={video.snippet.publishedAt}
                                    title={video.snippet.title}
                                />
                            ))

                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Main
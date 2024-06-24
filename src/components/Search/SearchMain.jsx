import React, { useEffect, useState } from 'react'
import Search from './Search';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/SideBar';
import { fetchFromApi } from '../../Api-client/FetchFromApi';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const SearchMain = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const { id } = useParams();
    const [videos, setVideos] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://youtube-v31.p.rapidapi.com/search?q=${id}&part=snippet,id&regionCode=US&maxResults=50&order=date`, {
                    headers: {
                        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
                        "X-RapidAPI-Host": import.meta.env.VITE_HOST,
                    },
                });
                setLoading(false)
                setVideos(response?.data?.items);
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();


    }, [id])
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="app">
            <Header toggleSidebar={toggleSidebar} />
            <div className="app__body">
                <Sidebar sidebarOpen={sidebarOpen} />
                <div className="main-content" style={sidebarOpen ? { marginLeft: '240px' } : { marginLeft: '0px' }}>
                    <div className='videos custom' >
                        {loading && <h1 style={{ color: 'white' }}>Loading...</h1>}
                        {

                            videos?.map((video, idx) => (
                                <Search key={idx} video={video} />
                            ))

                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SearchMain
import React, { useEffect, useState } from 'react'
import ChannelHeader from './ChannelHeader'
import ChannelInfo from './ChannelInfo'
import VideoList from './VideoList'
import Sidebar from '../Sidebar/SideBar'
import Header from '../Header/Header'
import { useParams } from 'react-router-dom'
import { fetchComment } from '../../Api-client/FetchFromApi'
import axios from 'axios'
const ChannelDetails = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const { id } = useParams();
    const [videos, setVideos] = useState([])
    const [loading, setLoading] = useState(false)
    const [videoType, setVideoType] = useState('home')
    const [channelVideos, setChannelVideos] = useState([])
    const [playlistVideo, setPlayListVideo] = useState([]);

    const fetchDataFromApi = async () => {
        try {
            setLoading(true)

            const options = {
                method: 'GET',
                url: 'https://youtube-v31.p.rapidapi.com/channels',
                params: {
                    part: 'snippet,statistics',
                    id: id
                },
                headers: {
                    'x-rapidapi-key': import.meta.env.VITE_API_KEY,
                    'x-rapidapi-host': import.meta.env.VITE_HOST
                }
            };

            try {
                const response = await axios.request(options);
                console.log('channeldata', response.data);
                setVideos(response?.data?.items[0])
                setLoading(false)
            } catch (error) {
                console.error(error);
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    console.log('id->', id)
    useEffect(() => {

        fetchDataFromApi();
        fetchChannelHomeVideo();

    }, [id]);
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    const fetchChannelHomeVideo = async () => {
        const options = {
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/search',
            params: {
                channelId: id,
                part: 'snippet,id',
                order: 'date',
                maxResults: '50'
            },
            headers: {
                'x-rapidapi-key': import.meta.env.VITE_API_KEY,
                'x-rapidapi-host': import.meta.env.VITE_HOST
            }
        };

        try {
            const response = await axios.request(options);
            console.log('channell-cideo->', response.data);
            setChannelVideos(response?.data?.items)
        } catch (error) {
            console.error(error);
        }

    }
    const fetchPlaylistVideo = async () => {
        const options = {
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/playlistItems',
            params: {
                playlistId: videos?.contentDetails?.relatedPlaylists?.uploads,
                part: 'snippet',
                maxResults: '50'
            },
            headers: {
                'x-rapidapi-key': import.meta.env.VITE_API_KEY,
                'x-rapidapi-host': import.meta.env.VITE_HOST
            }
        };

        try {
            const response = await axios.request(options);
            console.log("playlistVideo->", response.data);
            setPlayListVideo(response?.data?.items)

        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="app">
            <Header toggleSidebar={toggleSidebar} />
            <div className="app__body">
                <Sidebar sidebarOpen={sidebarOpen} />
                <div className="main-content" style={sidebarOpen ? { marginLeft: '240px' } : { marginLeft: '0px' }}>
                    <div className="channel-d">
                        <ChannelHeader image={videos?.brandingSettings?.image?.bannerExternalUrl} />
                        <ChannelInfo img={videos?.snippet?.thumbnails?.default?.url} name={videos?.snippet?.title} username={videos?.snippet?.customUrl} suscriber={videos?.statistics?.subscriberCount} toVideos={videos?.statistics?.videoCount} fetchChannelHomeVideo={fetchChannelHomeVideo} setVideoType={setVideoType} fetchPlaylistVideo={fetchPlaylistVideo} />
                        {videoType === 'home' ? <VideoList videoList={channelVideos} /> : videoType === 'playlist' ? <VideoList videoList={playlistVideo} /> : ''}
                    </div>
                </div>

            </div>
        </div>




    )
}

export default ChannelDetails
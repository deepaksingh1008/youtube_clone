// src/App.js
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main/Main';
import VideoDetails from './components/VideoDetails/VideoDetails'
import ChannelDetails from './components/Channel/ChannelDetails';
import SearchMain from './components/Search/SearchMain';
import PageNotFound from './components/CommingSoon';
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/video-details/:id' element={<VideoDetails />} />
          <Route path='/channel-details/:id' element={<ChannelDetails />} />
          <Route path='/search/:id' element={<SearchMain />} />
          <Route path='/*' element={<PageNotFound />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

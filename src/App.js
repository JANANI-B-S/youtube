// src/App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed, WatchLater,  } from './components'; // Import LikedVideos

const App = () => {
  const [watchLaterList, setWatchLaterList] = useState([]);
 

  const addToWatchLater = (video) => {
    setWatchLaterList((prevList) => [...prevList, video]);
  };

  const removeFromWatchLater = (videoId) => {
    setWatchLaterList((prevList) => prevList.filter(video => video.id.videoId !== videoId));
  };

  

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Feed addToWatchLater={addToWatchLater}  />} />
          <Route path='/video/:id' element={<VideoDetail addToWatchLater={addToWatchLater}  />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
          <Route path='/watch-later' element={<WatchLater watchLaterList={watchLaterList} removeFromWatchLater={removeFromWatchLater} />} />
      
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;

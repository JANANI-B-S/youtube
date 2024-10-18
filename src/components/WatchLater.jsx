
// src/components/WatchLater.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import VideoCard from './VideoCard'; // Adjust the path if needed

const WatchLater = ({ watchLaterList, removeFromWatchLater }) => {
  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
        Watch Later
      </Typography>
      <Box>
        {watchLaterList.length > 0 ? (
          watchLaterList.map(video => (
            <Box key={video.id.videoId} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
              <VideoCard video={video} />
              <Button variant="outlined" color="error" onClick={() => removeFromWatchLater(video.id.videoId)}>
                Remove
              </Button>
            </Box>
          ))
        ) : (
          <Typography variant="subtitle1" sx={{ color: 'gray' }}>
            No videos saved for later.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default WatchLater;

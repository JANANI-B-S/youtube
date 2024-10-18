import React from 'react';
import { Stack, Box } from '@mui/material';
import VideoCard from './VideoCard';  // Assuming VideoCard is in the same directory

const Videos = ({ videos, addToWatchLater }) => {
  if (!videos?.length) return 'Loading...';

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((video, idx) => (
        <Box key={idx}>
          {/* Pass addToWatchLater function to each VideoCard */}
          <VideoCard video={video} addToWatchLater={addToWatchLater} />
        
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;

import React from 'react';

const Playlist = ({ playlist }) => {
  return (
    <div>
      <h3>Playlist</h3>
      {playlist.length === 0 ? (
        <p>No videos in playlist.</p>
      ) : (
        <ul>
          {playlist.map((video, index) => (
            <li key={index}>{video.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Playlist;


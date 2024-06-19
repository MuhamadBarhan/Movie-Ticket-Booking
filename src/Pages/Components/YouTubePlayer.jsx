import React, { useState } from 'react';
import YouTube from 'react-youtube';
import '../Styles/YouTubePlayer.css';
import ClipLoader from 'react-spinners/ClipLoader';

const YouTubePlayer = ({ videoId }) => {
  const [loading, setLoading] = useState(true);

  const opts = {
    playerVars: {
      autoplay: 0,
    },
  };

  const onReady = (event) => {
    setLoading(false);
  };

  return (
    <div className="video-container">
      {loading && (
        <div className="spinner-container">
          <ClipLoader color="#df1827" loading={loading} size={50} />
        </div>
      )}
      <div className={`video-responsive ${loading ? 'hidden' : ''}`}>
        <YouTube videoId={videoId} opts={opts} onReady={onReady} />
      </div>
    </div>
  );
};

export default YouTubePlayer;

import YouTube from 'react-youtube';
import '../Styles/YouTubePlayer.css'

const YouTubePlayer = ({ videoId }) => {
    const opts = {
      playerVars: {
        autoplay: 0,
      },
    };

    return (
        <div className="video-responsive">
          <YouTube videoId={videoId} opts={opts} />
        </div>
      );
  };

  export default YouTubePlayer
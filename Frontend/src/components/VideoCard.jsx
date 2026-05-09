import { useNavigate } from "react-router-dom";

const VideoCard = ({ video }) => {
  const navigate = useNavigate();

  if (!video) return null;

  return (
    <div
      className="video-card"
      onClick={() => navigate(`/watch/${video.id}`)}
    >
      {/* LEFT: Thumbnail */}
      <div className="thumbnail2">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="thumbnail"
        />
        <span className="duration">10:30</span>
      </div>

      {/* RIGHT: Text */}
      <div className="video-details">
        {/* ⚠️ IMPORTANT: use h4 instead of div */}
        <h4 className="video-title">{video.title}</h4>

        <p className="channel-name">{video.channelName}</p>
      </div>
    </div>
  );
};

export default VideoCard;
import React, { useEffect, useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";
import axios from "axios";

import "../styles/VideoPage.css";

export default function VideoPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  // =====================================
  // FETCH VIDEO (IMPORTANT FIX)
  // =====================================
  useEffect(() => {
    fetchVideo();
  }, [id]);

  const fetchVideo = async () => {
    try {
      const res = await axios.get(
        `https://your-backend.onrender.com/api/ctube/videos/${id}`
      );

      setVideo(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // =====================================
  // RECOMMENDED VIDEOS (STATIC FOR NOW)
  // =====================================
  const recommendedVideos = [
    {
      id: "r1",
      thumbnail:
        "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      title: "Never Gonna Give You Up",
      channelName: "Rick Astley",
      videoUrl:
        "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "r2",
      thumbnail:
        "https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg",
      title: "Big Buck Bunny",
      channelName: "Blender",
      videoUrl:
        "https://www.youtube.com/embed/ysz5S6PUM-U",
    },
    {
      id: "r3",
      thumbnail:
        "https://img.youtube.com/vi/jNQXAC9IVRw/hqdefault.jpg",
      title: "Me at the zoo",
      channelName: "Jawed",
      videoUrl:
        "https://www.youtube.com/embed/jNQXAC9IVRw",
    },
  ];

  // =====================================
  // LOADING
  // =====================================
  if (loading) {
    return (
      <div className="videoPage center">
        Loading video...
      </div>
    );
  }

  // =====================================
  // NO VIDEO
  // =====================================
  if (!video) {
    return (
      <div className="videoPage center">
        Video not found
      </div>
    );
  }

  return (
    <div className="videoPage">

      {/* LEFT SIDE */}
      <div className="videoLeft">

        {/* VIDEO PLAYER */}
        <div className="videoPlayer">
          {video.videoUrl?.includes("youtube") ? (
            <iframe
              width="100%"
              height="100%"
              src={video.videoUrl}
              title="video"
              frameBorder="0"
              allowFullScreen
            />
          ) : (
            <video
              width="100%"
              height="100%"
              controls
              autoPlay
            >
              <source
                src={video.videoUrl}
                type="video/mp4"
              />
            </video>
          )}
        </div>

        {/* TITLE */}
        <h2 className="videoTitle">
          {video.title}
        </h2>

        {/* CHANNEL */}
        <div className="videoChannel">

          <div className="channelLeft">
            <div className="channelAvatar"></div>

            <div>
              <h4>{video.channelName}</h4>
              <p>{video.views || 0} views</p>
            </div>
          </div>

          <button className="subscribeBtn">
            Subscribe
          </button>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="videoRight">

        {recommendedVideos.map((item) => (
          <div
            key={item.id}
            className="recommendCard"
            onClick={() =>
              navigate(`/video/${item.id}`)
            }
          >

            <img
              src={item.thumbnail}
              alt="thumb"
            />

            <div>
              <h4>{item.title}</h4>
              <p>{item.channelName}</p>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}


// import React from "react";
// import { useLocation, Link } from "react-router-dom";
// import "../styles/VideoPage.css";

// export default function VideoPage() {
//   const location = useLocation();
//   const video = location.state;

//   return (
//     <div className="watchPage">

//       {/* NAVBAR */}
//       <div className="watchNavbar">

//         {/* LEFT */}
//         <div className="watchNavLeft">
//           <img src="/icons/hamburger.png" alt="" />
//           <img src="/logo/Circle.png" alt="" className="watchLogo" />
//         </div>

//         {/* CENTER */}
//         <div className="watchSearchWrapper">
//           <input type="text" placeholder="Type something ..." />

//           <div className="watchSearchIcons">
//             <img src="/icons/search.png" alt="" />
//             <div className="divider"></div>
//             <img src="/icons/microphone-black-shape.png" alt="" />
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="watchNavRight">
//           <div className="watchIconGroup">
//             <img src="/icons/group.png" alt="" />
//             <div className="divider"></div>
//             <img src="/icons/video-camera.png" alt="" />
//             <div className="divider"></div>
//             <img src="/icons/bell.png" alt="" />
//           </div>

//           <Link to="/profile">
//             <div className="watchProfile"></div>
//           </Link>
//         </div>

//       </div>

//       {/* MAIN */}
//       <div className="watchContainer">

//         {/* LEFT */}
//         <div className="watchLeft">

//           <div className="watchVideoBox">
//             <iframe
//               src={video?.url}
//               title="video"
//               allowFullScreen
//             ></iframe>
//           </div>

//           <h2 className="watchTitle">
//             Title of the video uploaded by the channel on the platform known as "C Tube"
//           </h2>

//           <div className="watchChannelRow">
//             <div className="watchChannelInfo">
//               <div className="watchAvatar"></div>
//               <div>
//                 <h4>Channel Name</h4>
//                 <span>1.3 Million Subscribers</span>
//               </div>
//             </div>

//             <button className="watchSubscribe">Subscribe</button>
//             <button className="watchLike">Like</button>
//           </div>

//           <div className="watchDescription"></div>

//           <div className="watchComments">
//             <h3>Comments</h3>

//             <div className="watchCommentInput">
//               <div className="watchAvatar"></div>
//               <input type="text" placeholder="Type a comment" />
//             </div>

//             <div className="watchComment">
//               <div className="watchAvatar"></div>
//               <div>
//                 <h5>Channel Name • 2 years ago</h5>
//                 <p>This is a comment that was posted in this video</p>
//               </div>
//             </div>
//           </div>

//         </div>

//         {/* RIGHT */}
//         <div className="watchRight">
//           {new Array(10).fill(0).map((_, i) => (
//             <div key={i} className="watchSuggestion">
//               <div className="watchThumb"></div>
//               <div className="watchInfo">
//                 <h4>Title of the video</h4>
//                 <p>Channel Name</p>
//                 <span>7,382 views • 2 years ago</span>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }
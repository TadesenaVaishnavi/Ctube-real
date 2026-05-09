import React from "react";
import Navbar from "../components/Navbar";
import VideoPlayer from "../components/VideoPly";
import Comments from "../components/Comments";
import VideoCard from "../components/VideoCard";
import WatchParty from "../components/WatchParty";
import "../styles/watch.css";

const WatchPage = () => {

  // ✅ Temporary video data (replace with backend later)
  const videos = [
    {
      id: "1",
      title: "React Full Course",
      thumbnail: "https://img.youtube.com/vi/bMknfKXIFA8/0.jpg",
      channelName: "Programming Hub",
    },
    {
      id: "2",
      title: "Node.js Crash Course",
      thumbnail: "https://img.youtube.com/vi/fBNz5xF-Kx4/0.jpg",
      channelName: "Backend Dev",
    },
    {
      id: "3",
      title: "MongoDB Tutorial",
      thumbnail: "https://img.youtube.com/vi/ofme2o29ngU/0.jpg",
      channelName: "DB Master",
    },
    {
      id: "4",
      title: "JavaScript Basics",
      thumbnail: "https://img.youtube.com/vi/W6NZfCO5SIk/0.jpg",
      channelName: "JS World",
    },
    {
      id: "5",
      title: "Spring Boot Guide",
      thumbnail: "https://img.youtube.com/vi/9SGDpanrc8U/0.jpg",
      channelName: "Java Backend",
    },
    {
      id: "6",
      title: "System Design Intro",
      thumbnail: "https://img.youtube.com/vi/UzLMhqg3_Wc/0.jpg",
      channelName: "Tech Duniya",
    },
    {
      id: "7",
      title: "Frontend Roadmap",
      thumbnail: "https://img.youtube.com/vi/zJSY8tbf_ys/0.jpg",
      channelName: "Frontend Pro",
    },
    {
      id: "8",
      title: "AI Basics",
      thumbnail: "https://img.youtube.com/vi/JMUxmLyrhSk/0.jpg",
      channelName: "AI Hub",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="watch-container">
        
        {/* LEFT SIDE */}
        <div className="left">
          <VideoPlayer />
          <Comments />
        </div>

        {/* RIGHT SIDE */}
        <div className="right">
          <WatchParty />

          {/* ✅ Suggestions with real data */}
          <div className="suggestions">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default WatchPage;



// import React from "react";
// import Navbar from "../components/Navbar";
// import VideoPlayer from "../components/VideoPly";
// import Comments from "../components/Comments";
// import VideoCard from "../components/VideoCard";
// import WatchParty from "../components/WatchParty";
// // import UpNext from "../components/UpNext";
// // import AddToQueue from "../components/AddToQueue";
// import "../styles/watch.css";

// const WatchPage = () => {
//   return (
//     <>
//       <Navbar />

//       <div className="watch-container">
        
//         {/* LEFT SIDE */}
//         <div className="left">
//           <VideoPlayer />
//           <Comments />
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="right">
//           <WatchParty />
//           {/* <UpNext /> */}
//           {/* <AddToQueue /> */}

//           <div className="suggestions">
//             {[...Array(8)].map((_, i) => (
//               <VideoCard key={i} />
//             ))}
//           </div>
//         </div>

//       </div>
//     </>
//   );
// };

// export default WatchPage;
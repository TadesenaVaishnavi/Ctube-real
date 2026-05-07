import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgotPassword from "./Pages/ForgotPassword";
import VideoPage from "./Pages/VideoPage";
import WatchPage from "./Pages/WatchPage";
import Channelpage from "./components/Channelpage";

import Subscriptions from "./Pages/Subscriptions";
import History from "./Pages/History";
import WatchLater from "./Pages/WatchLater";
import LikedVideos from "./Pages/LikedVideos";

// ✅ Check login (token exists or not)
const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

// ✅ Protected Route Component
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default function App() {
  return (
    <Router>
      <Routes>

        {/* Default route */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<ForgotPassword />} />

        {/* Protected Routes */}
        <Route path="/home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />

        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />

        <Route path="/video" element={
          <ProtectedRoute>
            <VideoPage />
          </ProtectedRoute>
        } />

        <Route path="/watch" element={
          <ProtectedRoute>
            <WatchPage />
          </ProtectedRoute>
        } />

        <Route path="/channel" element={
          <ProtectedRoute>
            <Channelpage />
          </ProtectedRoute>
        } />

        <Route path="/subscriptions" element={
          <ProtectedRoute>
            <Subscriptions />
          </ProtectedRoute>
        } />

        <Route path="/history" element={
          <ProtectedRoute>
            <History />
          </ProtectedRoute>
        } />

        <Route path="/watchlater" element={
          <ProtectedRoute>
            <WatchLater />
          </ProtectedRoute>
        } />

        <Route path="/liked" element={
          <ProtectedRoute>
            <LikedVideos />
          </ProtectedRoute>
        } />

      </Routes>
    </Router>
  );
}
import api from "./axios";

export const getVideos = () => api.get("/api/ctube/videos");

export const uploadVideo = (data) =>
  api.post("/api/ctube/videos", data);

export const getVideoById = (id) =>
  api.get(`/api/ctube/videos/${id}`);
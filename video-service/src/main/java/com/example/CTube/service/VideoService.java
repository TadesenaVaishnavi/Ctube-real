package com.example.CTube.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.CTube.model.Video;
import com.example.CTube.repository.VideoRepository;


@Service
public class VideoService {

    @Autowired
    private VideoRepository videoRepository;

    public void uploadVideo(MultipartFile videofile, MultipartFile thumbnailfile, String title) throws IOException {

        try {
        	
        	if (videofile.isEmpty() || thumbnailfile.isEmpty()) {
        	    throw new RuntimeException("File is empty");
        	}

            // Save Video
            String videoName = System.currentTimeMillis() + "_" + videofile.getOriginalFilename();

            Path videoPath = Paths.get("videos/" + videoName); // ✅ fixed
            Files.createDirectories(videoPath.getParent());
            Files.write(videoPath, videofile.getBytes());

            // Save Thumbnail
            String thumbName = System.currentTimeMillis() + "_" + thumbnailfile.getOriginalFilename();
            Path thumbPath = Paths.get("thumbnails/" + thumbName);

            Files.createDirectories(thumbPath.getParent());
            Files.write(thumbPath, thumbnailfile.getBytes());

            // Save in DB
            Video video = new Video();
            video.setVideoTitle(title);

            video.setFilePath(videoPath.toString());
            video.setContentType(videofile.getContentType());

            video.setThumbnailPath(thumbPath.toString());
            video.setThumbnailContentType(thumbnailfile.getContentType());

            video.setSize(videofile.getSize());
            video.setUploadAt(LocalDateTime.now());

            videoRepository.save(video);

        } catch (Exception e) {
            throw new RuntimeException("Upload failed" + e.getMessage());
        }
    }

    // Get Single Video
    public Video getVideo(Long id) {
        return videoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Video not found" ));
    }

    // Get All Videos
    public List<Video> getAllVideos() {
        return videoRepository.findAll();
    }
}
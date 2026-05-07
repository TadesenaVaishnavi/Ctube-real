package com.example.CTube.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Video {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String videoTitle;
	private String filePath;
	private String contentType;
	
	private String thumbnailPath;
	private String thumbnailContentType;
	private Long size;
	private LocalDateTime uploadAt;
	
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getVideoTitle() {
		return videoTitle;
	}
	
	public void setVideoTitle(String videoTitle) {
		this.videoTitle = videoTitle;
	}
	
	public String getFilePath() {
		return filePath;
	}
	
	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}
	
	public String getContentType() {
		return contentType;
	}
	
	public void setContentType(String contentType) {
		this.contentType = contentType;
	}
	
	public String getThumbnailPath() {
		return thumbnailPath;
	}
	
	public void setThumbnailPath(String thumbnailPath) {
		this.thumbnailPath = thumbnailPath;
	}
	
	public String getThumbnailContentType() {
		return thumbnailContentType;
	}
	
	public void setThumbnailContentType(String thumbnailContentType) {
		this.thumbnailContentType = thumbnailContentType;
	}
	
	public Long getSize() {
		return size;
	}
	
	public void setSize(Long size) {
		this.size = size;
	}
	
	public LocalDateTime getUploadAt() {
		return uploadAt;
	}
	
	public void setUploadAt(LocalDateTime uploadAt) {
		this.uploadAt = uploadAt;
	}
	
	
	
	
	
	
	
	

}

package com.example.CTube.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.CTube.model.Video;


public interface VideoRepository extends JpaRepository<Video, Long>{

}

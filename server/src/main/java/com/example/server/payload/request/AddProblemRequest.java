package com.example.server.payload.request;

import com.example.server.models.ImageProblem;

import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;
import java.util.List;
import java.util.Set;

public class AddProblemRequest {
    private  String Id;

    @NotBlank
    private String name;

    @NotBlank
    private String description;

    @NotBlank
    private String roomName;


    private List<MultipartFile> images;

    private String reportedById;

    public AddProblemRequest() {}


    public AddProblemRequest(String name, String description, String roomName, List<MultipartFile> images, String reportedById) {
        this.name = name;
        this.description = description;
        this.roomName = roomName;
        this.images = images;
        this.reportedById = reportedById;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getRoomName() {
        return roomName;
    }

    public void setRoomName(String roomName) {
        this.roomName = roomName;
    }


    public List<MultipartFile> getImages() {
        return images;
    }

    public void setImages(List<MultipartFile> images) {
        this.images = images;
    }

    public String getReportedById() {
        return reportedById;
    }

    public void setReportedById(String reportedById) {
        this.reportedById = reportedById;
    }
}


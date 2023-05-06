package com.example.server.dto;

import com.example.server.models.ImageProblem;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;
import java.util.List;

public class ProblemDTO {



    private  String Id;
    @NotBlank
    private String name;

    @NotBlank
    private String description;

    @NotBlank
    private String roomName;

    private List<ImageProblem> images;

    private String reportedById;
    private String reportedByname;

    public String getReportedById() {
        return reportedById;
    }

    public void setReportedById(String reportedById) {
        this.reportedById = reportedById;
    }

    public String getReportedByname() {
        return reportedByname;
    }

    public void setReportedByname(String reportedByname) {
        this.reportedByname = reportedByname;
    }

    public String getId() {
        return Id;
    }

    public void setId(String id) {
        Id = id;
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

    public List<ImageProblem> getImages() {
        return images;
    }

    public void setImages(List<ImageProblem> images) {
        this.images = images;
    }



    public ProblemDTO() {
    }

    public ProblemDTO(String name, String description, String roomName, List<ImageProblem> images, String reportedBy) {

        this.name = name;
        this.description = description;
        this.roomName = roomName;
        this.images = images;

    }

    public ProblemDTO(String id, String name, String description, String roomName, List<ImageProblem> images, String reportedById, String reportedByname) {
        Id = id;
        this.name = name;
        this.description = description;
        this.roomName = roomName;
        this.images = images;
        this.reportedById = reportedById;
        this.reportedByname = reportedByname;
    }
}



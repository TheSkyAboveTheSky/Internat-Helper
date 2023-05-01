package com.example.server.payload.request;

import com.example.server.models.ImageProblem;
import com.example.server.models.User;
import org.springframework.data.mongodb.core.mapping.DBRef;

import javax.validation.constraints.NotBlank;
import java.util.Set;

public class AddProblemRequest {
    @NotBlank
    private String name;

    @NotBlank
    private String description;

    @NotBlank
    private String roomName;


    @DBRef
    private Set<ImageProblem> images ;

    @DBRef
    private User reportedBy;


    public User getReportedBy() {
        return reportedBy;
    }

    public void setReportedBy(User reportedBy) {
        this.reportedBy = reportedBy;
    }


    public Set<ImageProblem> getImages() {
        return images;
    }

    public void setImages(Set<ImageProblem> images) {
        this.images = images;
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





}
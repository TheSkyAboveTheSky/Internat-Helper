package com.example.server.models;


import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import org.springframework.data.annotation.Id;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Document(collection = "problems")
public class Problem {
    @Id
    private String id;

    private String name;

    private String description;

    private String roomName;

    @DBRef
    private User reportedBy;

    @DBRef
    private List<ImageProblem> images ;
    private String state ;


    public Problem(String id, String name, String description, String roomName, List<ImageProblem> images, User reportedBy, String state) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.roomName = roomName;
        this.images = images;
        this.reportedBy = reportedBy;
        this.state = state;
    }


    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public User getReportedBy() {
        return reportedBy;
    }

    public void setReportedBy(User reportedBy) {

        this.reportedBy = reportedBy;
    }




    public List<ImageProblem> getImages() {
        return images;
    }

    public void setImages(List<ImageProblem> images) {
        this.images = images;
    }





    @DBRef
    private Set<Role> roles = new HashSet<>();

    public String getId() {
        return id;
    }

    public void setId(String Id) {
        this.id = Id;
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

    public void setDescription(String problemDescription) {
        this.description = description;
    }

    public String getRoomName() {
        return roomName;
    }

    public void setRoomName(String roomName) {
        this.roomName = roomName;
    }



    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public Problem(String name, String description, String roomName, String state){
        this.name = name;
        this.description = description;
        this.roomName = roomName;
        this.state= state;
        this.reportedBy = reportedBy;
        this.images = images;

    }

    public Problem() {
    }
}
package com.example.server.models;


import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import org.springframework.data.annotation.Id;
import java.util.HashSet;
import java.util.Set;

@Document(collection = "problems")
public class Problem {
    @Id
    private String Id;

    private String name;

    private String description;

    private String roomName;
    @DBRef
    private User reportedBy;

    @DBRef
    private Set<ImageProblem> images ;



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





    @DBRef
    private Set<Role> roles = new HashSet<>();

    public String getId() {
        return Id;
    }

    public void setId(String Id) {
        this.Id = Id;
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

    public Problem(String name, String description, String roomName){
        this.name = name;
        this.description = description;
        this.roomName = roomName;
    }
}

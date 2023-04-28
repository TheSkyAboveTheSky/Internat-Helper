package com.example.server.payload.response;

import com.example.server.models.ImageModel;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;
import java.util.List;

public class UserInfoResponse {

    private String id;
    private String username;
    private String email;
    private String name;

    private String poste;

    private String date;

    private byte[] picByte;

    private byte[] getPicByte() {
        return picByte;
    }

    private void setPicByte(byte[] picByte) {
        this.picByte = picByte;
    }

    public String getPoste() {
        return poste;
    }

    public void setPoste(String poste) {
        this.poste = poste;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getName() {
        return name;
    }

    private List<String> roles;

    public void setName(String name) {
        this.name = name;
    }

    public UserInfoResponse(String id, String username, String email, String name, String poste, String date, byte[] picByte, Collection<? extends GrantedAuthority> authorities, List<String> roles) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.name = name;
        this.poste = poste;
        this.date = date;
        this.roles = roles;
        this.picByte = picByte;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<String> getRoles() {
        return roles;
    }


}
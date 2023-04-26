package com.example.server.payload.response;

import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;
import java.util.List;

public class UserInfoResponse {
    private String id;
    private String username;
    private String email;
    private String name;

    public String getName() {
        return name;
    }

    private List<String> roles;

    public void setName(String name) {
        this.name = name;
    }

    public UserInfoResponse(String id, String username, String email, String name, Collection<? extends GrantedAuthority> authorities, List<String> roles) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.name = name;
        this.roles = roles;
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
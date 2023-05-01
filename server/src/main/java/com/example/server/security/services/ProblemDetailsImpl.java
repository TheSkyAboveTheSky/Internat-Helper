package com.example.server.security.services;

import com.example.server.models.Problem;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class ProblemDetailsImpl implements UserDetails{
    private static final long serialVersionUID = 1L;

    private String id;

    private String name;

    private String description;

    private String roomName;


    private Collection<? extends GrantedAuthority> authorities;

    public String getId() {
        return id;
    }

    public void setId(String Id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String problemName) {
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


    public ProblemDetailsImpl(String id, String name, String description, String roomName, Collection<? extends GrantedAuthority> authorities){
        this.id = id;
        this.name = name;
        this.description = description;
        this.roomName = roomName;
        this.authorities = authorities;
    }

    public static ProblemDetailsImpl build(Problem problem){
        List<GrantedAuthority> authorities = problem.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority(role.getName().name()))
                .collect(Collectors.toList());
        return new ProblemDetailsImpl(problem.getId(), problem.getName(), problem.getDescription(), problem.getRoomName(),  authorities);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return null;
    }

    @Override
    public String getUsername() {
        return "";
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        
        ProblemDetailsImpl problem = (ProblemDetailsImpl) o;
        return Objects.equals(id, problem.id);
    }
}
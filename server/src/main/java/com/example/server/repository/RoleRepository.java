package com.example.server.repository;

import java.util.Optional;

import com.example.server.models.ERole;
import com.example.server.models.Role;
import org.springframework.data.mongodb.repository.MongoRepository;
public interface RoleRepository extends MongoRepository<Role, String> {
    Optional<Role> findByName(ERole name);
}
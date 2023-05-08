package com.example.server.repository;

import java.util.Optional;

import com.example.server.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByUsername(String username);
    Optional<User> findById(String Id);

    Optional<User> findById(String Id);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
}

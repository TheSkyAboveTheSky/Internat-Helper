package com.example.server.repository;

import java.util.Optional;

import com.example.server.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByUsername(String username);
<<<<<<< HEAD:server/src/main/java/com/example/server/repository/UserRepository.java

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
}
=======
}
>>>>>>> origin:server/src/main/java/com/example/demo/repository/UserRepository.java

package com.example.server.repository;


import com.example.server.models.ImageProblem;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface ImageRepository extends MongoRepository<ImageProblem, String > {
    Optional<ImageProblem> findById(String Id);
}

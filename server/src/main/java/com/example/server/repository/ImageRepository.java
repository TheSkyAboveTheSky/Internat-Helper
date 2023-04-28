package com.example.server.repository;


import com.example.server.models.ImageModel;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface ImageRepository extends MongoRepository<ImageModel, Long> {
    Optional<ImageModel> findByName(String name);
}

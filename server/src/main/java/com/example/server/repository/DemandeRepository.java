package com.example.server.repository;

import com.example.server.models.Demande;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DemandeRepository extends MongoRepository<Demande, Long> {
}

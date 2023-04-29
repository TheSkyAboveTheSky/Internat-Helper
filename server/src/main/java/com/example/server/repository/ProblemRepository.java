package com.example.server.repository;

import com.example.server.models.Problem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProblemRepository extends MongoRepository <Problem, String> {
}

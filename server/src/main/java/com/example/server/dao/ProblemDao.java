package com.example.server.dao;

import com.example.server.models.Problem;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProblemDao  extends CrudRepository<Problem, Integer> {


}

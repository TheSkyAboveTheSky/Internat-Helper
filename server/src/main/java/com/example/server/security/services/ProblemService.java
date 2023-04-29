package com.example.server.security.services;


import com.example.server.dao.ProblemDao;
import com.example.server.models.Problem;
import com.example.server.repository.ProblemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProblemService {

    @Autowired
    private ProblemRepository problemRepository;
    public Problem addNewProblem(Problem problem){
       return  problemRepository.save(problem);

    }
}

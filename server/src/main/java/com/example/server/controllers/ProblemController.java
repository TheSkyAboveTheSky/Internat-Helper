package com.example.server.controllers;


import com.example.server.models.Problem;
import com.example.server.security.services.ProblemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/problem")
public class ProblemController {


    @Autowired
    private ProblemService problemService ;

    @PostMapping("/addNewProduct")
    @PreAuthorize("hasRole('USER')")
    public Problem addNewProblem(@RequestBody  Problem problem) {
        return problemService.addNewProblem(problem);
    }
}

package com.example.server.controllers;

import com.example.server.models.ImageProblem;
import com.example.server.models.Problem;
import com.example.server.models.User;
import com.example.server.payload.request.AddProblemRequest;
import com.example.server.payload.response.MessageResponse;
import com.example.server.repository.ImageRepository;
import com.example.server.repository.ProblemRepository;
import com.example.server.repository.UserRepository;
import org.springframework.http.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;



@CrossOrigin(origins = "*", maxAge = 3600)
@RestController


@RequestMapping("/api/problem")
public class ProblemController {
    @Autowired
    ProblemRepository problemRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ImageRepository imageRepository;


    @PostMapping(value = {"/addProblem"}, consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public Problem addProblem(@ModelAttribute AddProblemRequest addProblemRequest) {


        Problem problem = new Problem(addProblemRequest.getName(), addProblemRequest.getDescription(), addProblemRequest.getRoomName());
                /*

       User user = userRepository.findById(addProblemRequest.getReportedById()).orElse(null);
        if (user != null) {
            problem.setReportedBy(user);
        }*/


        try {
            List<MultipartFile> files = addProblemRequest.getImages();
            Set<ImageProblem> images = uploadImage(files);
            problem.setImages(images);
            problemRepository.save(problem);
            return problem;
        } catch (IOException e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @PostMapping(value = "/addImage", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> addImage(@ModelAttribute AddProblemRequest addProblemRequest) throws IOException {
        // Enregistrez les images dans la base de données
        Set<ImageProblem> images = uploadImage(addProblemRequest.getImages());
        imageRepository.saveAll(images);
        return ResponseEntity.ok().body("File(s) received successfully");
    }

    public Set<ImageProblem> uploadImage(List<MultipartFile> files) throws IOException {
        Set<ImageProblem> imageProblems = new HashSet<>();
        if (files != null) {
            for (MultipartFile file : files) {
                ImageProblem imageProblem = new ImageProblem(
                        file.getOriginalFilename(),
                        file.getContentType(),
                        file.getBytes()
                );
                imageProblems.add(imageProblem);
            }
        }
        imageRepository.saveAll(imageProblems);
        return new HashSet<>(imageRepository.findAll());
    }



    @GetMapping({"/getAllProblems"})
    public List<Problem> getAllProblems() {
        return problemRepository.findAll();


    }

    @GetMapping({"/getAllImages"})
    public List<ImageProblem> getAllImages() {
        return imageRepository.findAll();


    }
}
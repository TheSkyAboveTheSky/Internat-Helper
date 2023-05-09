package com.example.server.controllers;

import com.example.server.dto.ProblemDTO;
import com.example.server.models.ImageProblem;
import com.example.server.models.Problem;
import com.example.server.models.User;
import com.example.server.payload.request.AddProblemRequest;
import com.example.server.payload.response.MessageResponse;
import com.example.server.repository.ImageRepository;
import com.example.server.repository.ProblemRepository;
import com.example.server.repository.UserRepository;
import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.IOException;
import java.util.*;


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
    public ProblemDTO addProblem(@ModelAttribute AddProblemRequest addProblemRequest) {


        Problem problem = new Problem(addProblemRequest.getName(), addProblemRequest.getDescription(), addProblemRequest.getRoomName());

       User user = userRepository.findById(addProblemRequest.getReportedById())
               .orElseThrow(() -> new RuntimeException("user with id:" + addProblemRequest.getReportedById() + "does not exist"));

        problem.setReportedBy(user);


        try {
            List<MultipartFile> files = addProblemRequest.getImages();
            problem.setImages(uploadImage(files));
            problemRepository.save(problem);

            return new ProblemDTO(problem.getId(),problem.getName(),problem.getDescription(),problem.getRoomName(),problem.getImages(),problem.getReportedBy().getId(),problem.getReportedBy().getName());
        } catch (IOException e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @PostMapping(value = "/addImage", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> addImage(@ModelAttribute AddProblemRequest addProblemRequest) throws IOException {
        // Enregistrez les images dans la base de données
        List<ImageProblem> images = uploadImage(addProblemRequest.getImages());
        imageRepository.saveAll(images);
        return ResponseEntity.ok().body("File(s) received successfully");
    }



    public List<ImageProblem> uploadImage(List<MultipartFile> files) throws IOException {
        List<ImageProblem> imageProblems = new ArrayList<>();
        if (files != null) {
            for (MultipartFile file : files) {
                imageProblems.add(
                        new ImageProblem(
                                file.getOriginalFilename(),
                                file.getContentType(),
                                file.getBytes()
                        )
                );
            }
        }

        return imageRepository.saveAll(imageProblems);
    }



    @GetMapping({"/getAllProblems"})
    public List<ProblemDTO> getAllProblems() {
        List<ProblemDTO> problemDTOS = new ArrayList<>();
        List<Problem> problems = problemRepository.findAll();

        for (Problem problem : problems){
            problemDTOS.add(new ProblemDTO(problem.getId(),problem.getName(),problem.getDescription(),problem.getRoomName(),problem.getImages(),problem.getReportedBy().getId(),problem.getReportedBy().getName()));
        }
  return  problemDTOS;
    }

    @GetMapping({"/getAllImages"})
    public List<ImageProblem> getAllImages() {
        return imageRepository.findAll();


    }
}

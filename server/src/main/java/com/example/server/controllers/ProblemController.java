package com.example.server.controllers;

import com.example.server.models.ImageProblem;
import com.example.server.models.Problem;
import com.example.server.models.User;
import com.example.server.payload.request.AddProblemRequest;
import com.example.server.repository.ImageRepository;
import com.example.server.repository.ProblemRepository;
import com.example.server.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/problem")
public class ProblemController {
    private final ProblemRepository problemRepository;
    private final UserRepository userRepository;
    private final ImageRepository imageRepository;

    @Autowired
    public ProblemController(ProblemRepository problemRepository, UserRepository userRepository, ImageRepository imageRepository) {
        this.problemRepository = problemRepository;
        this.userRepository = userRepository;
        this.imageRepository = imageRepository;
    }

    @PostMapping(value = "/addProblem", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Problem addProblem(@ModelAttribute AddProblemRequest addProblemRequest) {
        Problem problem = new Problem(addProblemRequest.getName(), addProblemRequest.getDescription(), addProblemRequest.getRoomName(), "Non completé");

        User user = userRepository.findById(addProblemRequest.getReportedById())
                .orElseThrow(() -> new RuntimeException("User with id: " + addProblemRequest.getReportedById() + " does not exist"));

        problem.setReportedBy(user);

        try {
            List<MultipartFile> files = addProblemRequest.getImages();
            problem.setImages(uploadImage(files));
            problemRepository.save(problem);

            return problem;
        } catch (IOException e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

    @PostMapping(value = "/addImage", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> addImage(@ModelAttribute AddProblemRequest addProblemRequest) throws IOException {
        List<ImageProblem> images = uploadImage(addProblemRequest.getImages());
        imageRepository.saveAll(images);
        return ResponseEntity.ok().body("File(s) received successfully");
    }

    private List<ImageProblem> uploadImage(List<MultipartFile> files) throws IOException {
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

    @GetMapping("/all")
    public List<Problem> getAllProblems() {
        return problemRepository.findAll();
    }

    @GetMapping("/getAllImages")
    public List<ImageProblem> getAllImages() {
        return imageRepository.findAll();
    }

    @PutMapping("/state/{id}")
    public Problem updateProblemState(@PathVariable String id, @RequestBody String newState) {
        Problem problem = problemRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        problem.setState(newState);
        problemRepository.save(problem);
        return problem;
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProblem(@PathVariable String id) {
        Problem problem = problemRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        problemRepository.delete(problem);
        return ResponseEntity.ok().body("Problem deleted successfully");
    }

    @GetMapping("/{id}")
    public Optional<Problem> getProblem(@PathVariable String id) {
        return problemRepository.findById(id);
    }
    @PutMapping("/{id}")
    public ResponseEntity<String> updateProblem(@PathVariable String id, @RequestBody Problem updatedProblem) {
        Problem problem = problemRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        problem.setName(updatedProblem.getName());
        problem.setDescription(updatedProblem.getDescription());
        problem.setRoomName(updatedProblem.getRoomName());
        problem.setState(updatedProblem.getState());
        problem.setImages(updatedProblem.getImages());
        problem.setReportedBy(updatedProblem.getReportedBy());

        problemRepository.save(problem);

        return ResponseEntity.ok().body("Problem updated successfully");
    }

}




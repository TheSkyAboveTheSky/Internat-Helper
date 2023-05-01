package com.example.server.controllers;

import com.example.server.models.ImageProblem;
import com.example.server.models.Problem;
import com.example.server.models.User;
import com.example.server.payload.request.AddProblemRequest;
import com.example.server.payload.response.MessageResponse;
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

    @PostMapping(value = {"/addProblem"}, consumes = {MediaType.MULTIPART_FORM_DATA_VALUE} )
    public ResponseEntity<MessageResponse> addProblem(@Valid @RequestPart("problem") AddProblemRequest addProblemRequest , @RequestPart("imageFile") MultipartFile[] files) {
        Problem problem = new Problem(addProblemRequest.getName(), addProblemRequest.getDescription(), addProblemRequest.getRoomName());



        User reportedBy = userRepository.findByUsername(addProblemRequest.getReportedBy().getUsername())
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        problem.setReportedBy(reportedBy);

        try{
            Set<ImageProblem> images = uploadImage(files);
            problem.setImages(images);
            problemRepository.save(problem);

            MessageResponse response = new MessageResponse("Problem added with image");
            return ResponseEntity.ok(response);
        } catch (IOException e) {
            System.out.println(e.getMessage());
            return ResponseEntity.badRequest().build();
        }
    }

    public Set<ImageProblem> uploadImage(MultipartFile[] files) throws IOException {
        Set<ImageProblem> imageProblems = new HashSet<>();
        for (MultipartFile file : files) {
            ImageProblem imageProblem = new ImageProblem(
                    file.getOriginalFilename(),
                    file.getContentType(),
                    file.getBytes()
            );
            imageProblems.add(imageProblem);
        }
        return imageProblems;
    }
    @GetMapping({"/getAllProblems"})
    public List<Problem> getAllProblems(){
        return  problemRepository.findAll();


    }
}

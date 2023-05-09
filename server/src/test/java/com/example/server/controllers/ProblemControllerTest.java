/*package com.example.server.controllers;


import static org.mockito.ArgumentMatchers.anyList;
import static org.mockito.Mockito.when;

import com.example.server.dto.ProblemDTO;
import com.example.server.models.ImageProblem;
import com.example.server.models.Problem;
import com.example.server.models.User;
import com.example.server.payload.request.AddProblemRequest;
import com.example.server.repository.ImageRepository;
import com.example.server.repository.ProblemRepository;
import com.example.server.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;

import static org.hamcrest.Matchers.any;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.MockitoAnnotations.openMocks;
import static org.springframework.data.mongodb.core.aggregation.ConditionalOperators.Cond.when;

@ExtendWith(MockitoExtension.class)
@SpringBootTest
 public class ProblemControllerTest {

   @InjectMocks
   private ProblemController problemController;

   @Mock
   private ProblemRepository problemRepository;

   @Mock
   private UserRepository userRepository;

   @Mock
   private ImageRepository imageRepository;


    @BeforeEach
    public void setup() {
        openMocks(this);
    }
    @Test
   public  void testAddProblem()  throws Exception{



       AddProblemRequest addProblemRequest = new AddProblemRequest();
       addProblemRequest.setName("Test Problem");
       addProblemRequest.setDescription("This is a test problem");
       addProblemRequest.setRoomName("Test Room");
        addProblemRequest.setReportedById("644ae3f0e50c2b71e5871a0b");
        MockMultipartFile image = new MockMultipartFile(
               "image",
               "test.jpg",
               MediaType.IMAGE_JPEG_VALUE,
               "test image".getBytes()
       );

       addProblemRequest.setImages(Collections.singletonList(image));

        User user = new User();
        user.setId("644ae3f0e50c2b71e5871a0b");
        user.setName("Fatima Ezzahra ");

        when(userRepository.findById("644ae3f0e50c2b71e5871a0b")).thenReturn(Optional.of(user));


        ProblemDTO problemDTO = problemController.addProblem(addProblemRequest);

        verify(problemRepository, times(1)).save(any(Problem.class));


        assertEquals("644ae3f0e50c2b71e5871a0b", problemDTO.getReportedById());
        assertEquals("Fatima Ezzahra", problemDTO.getReportedByname());
        assertEquals(1, problemDTO.getImages().size());
        assertEquals("test.jpg", problemDTO.getImages().get(0).getName());
    }


    @Test
    void TestUploadImage() throws IOException {
        MockMultipartFile file = new MockMultipartFile("file", "test.jpg", MediaType.IMAGE_JPEG_VALUE, "test image".getBytes());
        List<MultipartFile> files = new ArrayList<>();
        files.add(file);

        List<ImageProblem> expectedImages = new ArrayList<>();
        expectedImages.add(new ImageProblem("test.jpg", MediaType.IMAGE_JPEG_VALUE, "test image".getBytes()));

        when(imageRepository.saveAll(anyList())).thenReturn(expectedImages);

        List<ImageProblem> actualImages = problemController.uploadImage(files);

        assertEquals(expectedImages.size(), actualImages.size());
        assertEquals(expectedImages.get(0).getName(), actualImages.get(0).getName());
        assertEquals(expectedImages.get(0).getType(), actualImages.get(0).getType());
        assertArrayEquals(expectedImages.get(0).getPicByte(), actualImages.get(0).getPicByte());
    }

    @Test
    void TestGetAllProblems() {

        User user = new User();
        user.setId("644ae3f0e50c2b71e5871a0b");
        user.setName("Fatima Ezzahra ");
        Problem problem1 = new Problem("Problem 1", "Description 1", "Room 1");
        problem1.setReportedBy(user);
        Problem problem2 = new Problem("Problem 2", "Description 2", "Room 2");
        problem2.setReportedBy(user);
        List<Problem> problems = Arrays.asList(problem1, problem2);

        when(problemRepository.findAll()).thenReturn(problems);

        List<ProblemDTO> problemDTOS = problemController.getAllProblems();

        verify(problemRepository, times(1)).findAll();

       List<ProblemDTO> expectedDTOS = Arrays.asList(
                new ProblemDTO(problem1.getId(), "Problem 1", "Description 1", "Room 1", Collections.emptyList(), user.getId(), user.getName()),
                new ProblemDTO(problem2.getId(), "Problem 2", "Description 2", "Room 2", Collections.emptyList(), user.getId(), user.getName())
        );
        assertEquals(expectedDTOS, problemDTOS);
    }
}*/

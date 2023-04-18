package exemple.demo.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
@RestController
@RequestMapping("/api/signup")
public class SignupController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public ResponseEntity<?> signup(@RequestBody SignupRequest request) {
        // Vérifier si l'utilisateur existe déjà
        if (userRepository.existsByEmail(request.getEmail())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Cet e-mail est déjà utilisé.");
        }

        // Créer un nouvel utilisateur
        User user = new User();
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());
        user.setFullName(request.getFullName());

        userRepository.save(user);

        return ResponseEntity.created(URI.create("/api/users/" + user.getId())).body("{'message': 'Inscription réussie.'}");
    }
}

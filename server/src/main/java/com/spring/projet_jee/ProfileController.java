import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/api")
public class ProfileController {

    private static final String UPLOAD_DIR = "./uploads/";

    @PostMapping("/profilepicture")
    public String updateProfileImage(@RequestParam("image") MultipartFile file) {
        try {
            if (!file.isEmpty()) {
                // Vérifier si le dossier uploads existe
                File dir = new File(UPLOAD_DIR);
                if (!dir.exists()) {
                    // Si le dossier n'existe pas, le créer
                    if (!dir.mkdirs()) {
                        // Si la création du dossier échoue, afficher un message d'erreur
                        return "Failed to create directory";
                    }
                }

                byte[] bytes = file.getBytes();
                Path path = Paths.get(UPLOAD_DIR + file.getOriginalFilename());
                Files.write(path, bytes);
                return "Image uploaded successfully";
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "Image upload failed";
    }


}

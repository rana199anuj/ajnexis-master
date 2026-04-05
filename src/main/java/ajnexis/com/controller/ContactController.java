package ajnexis.com.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private static final Logger logger = LoggerFactory.getLogger(ContactController.class);

    @PostMapping
    public ResponseEntity<Map<String, String>> submitContactForm(@RequestBody ContactRequest request) {
        logger.info("Received contact form submission from: {} ({})", request.getName(), request.getEmail());
        logger.info("Subject: {}", request.getSubject());
        logger.info("Message: {}", request.getMessage());

        // In a real application, you would send an email using JavaMailSender here
        // or save the request to a database.

        return ResponseEntity.ok(Map.of("message", "Contact form submitted successfully"));
    }

    public static class ContactRequest {
        private String name;
        private String email;
        private String subject;
        private String message;

        public String getName() { return name; }
        public void setName(String name) { this.name = name; }

        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }

        public String getSubject() { return subject; }
        public void setSubject(String subject) { this.subject = subject; }

        public String getMessage() { return message; }
        public void setMessage(String message) { this.message = message; }
    }
}

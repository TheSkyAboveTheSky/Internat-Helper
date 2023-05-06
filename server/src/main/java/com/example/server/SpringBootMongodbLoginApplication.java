package com.example.server;

import com.example.server.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SpringBootMongodbLoginApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringBootMongodbLoginApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner (UserRepository userRepository) {
        return (String[] args) -> {
            System.out.println(userRepository.findAll());
        };
    }
}
package com.example.eventmanager.controller;

import com.example.eventmanager.DTO.AdminDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Value("${spring.security.user.password}")
    private String password;
    @Value("${spring.security.user.name}")
    private String username;

    @PostMapping("/login")
    public ResponseEntity<?> adminLogin(@RequestBody AdminDTO loginDto) {
        if (loginDto.getUsername().equals(username) && loginDto.getPassword().equals(password)) {
            return ResponseEntity.ok().body("Admin authenticated successfully");
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized");
    }
}

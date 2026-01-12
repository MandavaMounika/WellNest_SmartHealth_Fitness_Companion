package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Profile;
import com.example.demo.entity.User;
import com.example.demo.repository.ProfileRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.JwtUtil;

@RestController
@RequestMapping("/profile")
@CrossOrigin(origins = "http://localhost:5173")
public class ProfileController {

    @Autowired
    private ProfileRepository profileRepo;

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/me")
    public Profile getProfile(
        @RequestHeader("Authorization") String auth) {

        String username =
                jwtUtil.extractUsername(auth.substring(7));

        User user = userRepo.findByUsername(username).orElseThrow();

        return profileRepo.findByUser(user).orElse(null);
    }

    @PostMapping("/create")
    public ResponseEntity<?> createProfile(
        @RequestHeader("Authorization") String auth,
        @RequestBody Profile profile) {

        String username =
                jwtUtil.extractUsername(auth.substring(7));

        User user = userRepo.findByUsername(username).orElseThrow();

        if (profileRepo.existsByUser(user)) {
            return ResponseEntity
                .badRequest()
                .body("Profile already exists");
        }

        profile.setUser(user);
        profileRepo.save(profile);
        return ResponseEntity.ok(profile);
    }
}

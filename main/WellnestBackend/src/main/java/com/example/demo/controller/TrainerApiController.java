package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/wellnest.com/trainer")
public class TrainerApiController {

    @GetMapping("/track-workouts")
    public String trackUserWorkouts() {
        return "Trainer can track user workouts";
    }

    @GetMapping("/track-meals")
    public String trackUserMeals() {
        return "Trainer can track user meals";
    }

    @GetMapping("/track-sleep")
    public String trackUserSleep() {
        return "Trainer can track user sleep";
    }

    @GetMapping("/track-water")
    public String trackUserWater() {
        return "Trainer can track user water intake";
    }
}

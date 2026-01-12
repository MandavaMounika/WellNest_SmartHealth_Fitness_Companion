package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.User;
import com.example.demo.entity.Profile;

public interface ProfileRepository extends JpaRepository<Profile, Long> {
	 boolean existsByUser(User user);
	    Optional<Profile> findByUser(User user);
}

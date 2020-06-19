package com.example.qlvp.repository;
import com.example.qlvp.entities.Film;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FilmRepository extends JpaRepository<Film, Long> {
    List<Film> findByName(String name);
}

package com.example.qlvp.service;

import com.example.qlvp.entities.Film;

import java.util.List;
import java.util.Optional;

public interface FilmService {
    List<Film> findAll();
    Film save(Film film);
    void update(Film film);
    void delete(Long id);
    Optional<Film> findOne(Long id);
}


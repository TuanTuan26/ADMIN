package com.example.qlvp.service;

import com.example.qlvp.entities.Cinema;

import java.util.List;
import java.util.Optional;

public interface CinemaService {

    List<Cinema> findAll();
    Cinema save(Cinema cinema);
    void update(Cinema cinema);
    void delete(Long id);
    Optional<Cinema> findOne(Long id);

}

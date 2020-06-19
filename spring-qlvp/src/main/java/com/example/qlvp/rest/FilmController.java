package com.example.qlvp.rest;

import com.example.qlvp.entities.Film;
import com.example.qlvp.service.FilmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/films")
public class FilmController {
    @Autowired
    FilmService filmService;
    @GetMapping
    public List<Film> findAll() {

        return filmService.findAll();
    }
}

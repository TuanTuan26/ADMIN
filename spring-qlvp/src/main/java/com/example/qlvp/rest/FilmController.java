package com.example.qlvp.rest;



import com.example.qlvp.entities.Category;
import com.example.qlvp.entities.Cinema;
import com.example.qlvp.entities.Film;
import com.example.qlvp.payload.request.FilmRequest;
import com.example.qlvp.service.FilmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.*;

@RestController
@RequestMapping("/api/film")
public class FilmController {

    @Autowired
    private FilmService filmService;


    @GetMapping
    public List<Film> findAll() {
        return filmService.findAll();
    }

    @PostMapping()
    public ResponseEntity<?> save(@Valid @RequestBody FilmRequest filmRequest) {
        Film film = new Film();
        film.setName(filmRequest.getName());
        film.setCast(filmRequest.getCast());
        film.setDescription(filmRequest.getDescription());
        film.setImage(filmRequest.getImage());
        film.setYearProduce(filmRequest.getYearProduce());
        film.setTrailer(filmRequest.getTrailer());
        film.setTime(filmRequest.getTime());
        film.setLanguage(filmRequest.getLanguage());
        film.setLanguage(filmRequest.getLanguage());
        Date date = new Date();
        film.setCreatDate(date);
        film.setUserName(filmRequest.getUserName());

        Set<Long> categories = filmRequest.getCategories();
        Set<Category> categorySet = new HashSet<>();
        if (categories == null) {
        } else {
            categories.forEach(id -> {
                Category category = new Category();
                category.setId(id);
                categorySet.add(category);

            });

        }
        film.setCategories(categorySet);
        filmService.save(film);
        return ResponseEntity.ok("Ok");
    }

    @PutMapping()
    public ResponseEntity<Void> update(@RequestBody FilmRequest filmRequest) {
        Film film = new Film();
        film.setId(filmRequest.getId());
        film.setName(filmRequest.getName());
        film.setCast(filmRequest.getCast());
        film.setDescription(filmRequest.getDescription());
        film.setImage(filmRequest.getImage());
        film.setYearProduce(filmRequest.getYearProduce());
        film.setTrailer(filmRequest.getTrailer());
        film.setTime(filmRequest.getTime());
        film.setLanguage(filmRequest.getLanguage());
        film.setLanguage(filmRequest.getLanguage());
        Optional<Date> optional = filmService.findOne(filmRequest.getId()).map(Film::getCreatDate);
        film.setCreatDate(optional.get());
        film.setUserName(filmRequest.getUserName());
        Set<Long> categories = filmRequest.getCategories();
        Set<Category> categorySet = new HashSet<>();
        if (categories == null) {
        } else {
            categories.forEach(id -> {
                Category category = new Category();
                category.setId(id);
                categorySet.add(category);

            });

        }
        film.setCategories(categorySet);
        filmService.save(film);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Film> findOne(@PathVariable Long id) {
        return filmService.findOne(id).map(film -> new ResponseEntity<>(film, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        filmService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}

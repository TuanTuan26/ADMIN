package com.example.qlvp.rest;

import com.example.qlvp.entities.Cinema;
import com.example.qlvp.service.CinemaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cinema")
public class CinemaController {

    @Autowired
    private CinemaService cinemaService;

    @GetMapping
    public List<Cinema> findAll() {

        return cinemaService.findAll();
    }

    @PostMapping
    public Cinema save(@RequestBody Cinema cinema) {
        return cinemaService.save(cinema);
    }

    @PutMapping
    public ResponseEntity<Void> update(@RequestBody Cinema product) {
        cinemaService.update(product);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cinema> findOne(@PathVariable Long id) {
        return cinemaService.findOne(id).map(product -> new ResponseEntity<>(product, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        cinemaService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

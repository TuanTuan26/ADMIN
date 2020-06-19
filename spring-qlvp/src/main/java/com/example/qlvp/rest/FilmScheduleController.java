package com.example.qlvp.rest;

import com.example.qlvp.entities.*;
import com.example.qlvp.payload.request.FilmScheduleRequest;
import com.example.qlvp.service.FilmScheduleService;
import com.example.qlvp.service.FilmService;
import com.example.qlvp.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/film")
public class FilmScheduleController {
    @Autowired
    FilmScheduleService filmScheduleService;

    @Autowired
    private RoomService roomService;
    @Autowired
    private FilmService filmService;
    @GetMapping
    public List<FilmSchedule> findAll() {

        return filmScheduleService.findAll();
    }

    @PostMapping()
    public FilmSchedule save(@RequestBody FilmScheduleRequest filmScheduleRequest) {
        Room room = new Room();
        room.setId(filmScheduleRequest.getRoom());
        Film film = new Film();
        film.setId(filmScheduleRequest.getFilm());
        Time time = new Time();
        time.setId(filmScheduleRequest.getTime());
        TicketPrice ticketPrice = new TicketPrice();
        ticketPrice.setId(filmScheduleRequest.getTicketPrice());
        FilmSchedule filmSchedule = new FilmSchedule();
        filmSchedule.setDay(filmScheduleRequest.getDay());
        filmSchedule.setTime(time);
        filmSchedule.setTicketPrice(ticketPrice);
        filmSchedule.setRoom(room);
        filmSchedule.setFilm(film);

        return filmScheduleService.save(filmSchedule);
    }

    @PutMapping()
    public ResponseEntity<Void> update(@RequestBody FilmScheduleRequest filmScheduleRequest) {

        Room room = new Room();
        room.setId(filmScheduleRequest.getRoom());
        Film film = new Film();
        film.setId(filmScheduleRequest.getFilm());
        Time time = new Time();
        time.setId(filmScheduleRequest.getTime());
        TicketPrice ticketPrice = new TicketPrice();
        ticketPrice.setId(filmScheduleRequest.getTicketPrice());
        FilmSchedule filmSchedule = new FilmSchedule();
        filmSchedule.setId(filmScheduleRequest.getId());
        filmSchedule.setDay(filmScheduleRequest.getDay());
        filmSchedule.setTime(time);
        filmSchedule.setTicketPrice(ticketPrice);
        filmSchedule.setRoom(room);
        filmSchedule.setFilm(film);
        filmScheduleService.update(filmSchedule);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FilmSchedule> findOne(@PathVariable Long id) {
        return filmScheduleService.findOne(id).map(filmSchedule -> new ResponseEntity<>(filmSchedule, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        filmScheduleService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

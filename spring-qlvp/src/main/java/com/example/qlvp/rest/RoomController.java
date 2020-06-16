package com.example.qlvp.rest;

import com.example.qlvp.entities.Cinema;
import com.example.qlvp.entities.Room;
import com.example.qlvp.payload.request.RoomRequest;
import com.example.qlvp.service.CinemaService;
import com.example.qlvp.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/room")
public class RoomController {


    @Autowired
    private RoomService roomService;

    @Autowired
    private CinemaService cinemaService;

    @GetMapping
    public List<Room> findAll() {

        return roomService.findAll();
    }

    @PostMapping()
    public Room save(@RequestBody RoomRequest roomRequest) {
        Cinema cinema = new Cinema();
        cinema.setId(roomRequest.getCinema());
        Room room = new Room();
        room.setName(roomRequest.getName());
        room.setCharacter(roomRequest.getCharacter());
        room.setCinema(cinema);

        return roomService.save(room);
    }

    @PutMapping()
    public ResponseEntity<Void> update(@RequestBody RoomRequest roomRequest) {
        Cinema cinema = new Cinema();
        Optional<Long> optional = cinemaService.findOne(roomRequest.getCinema()).map(Cinema::getId);
        cinema.setId(optional.get());
        Room room = new Room();
        room.setId(roomRequest.getId());
        room.setName(roomRequest.getName());
        room.setCharacter(roomRequest.getCharacter());
        room.setCinema(cinema);

        roomService.update(room);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Room> findOne(@PathVariable Long id) {
        return roomService.findOne(id).map(room -> new ResponseEntity<>(room, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        roomService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

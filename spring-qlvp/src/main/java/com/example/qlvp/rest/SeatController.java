package com.example.qlvp.rest;

import com.example.qlvp.entities.Cinema;
import com.example.qlvp.entities.Room;
import com.example.qlvp.entities.Seat;
import com.example.qlvp.payload.request.RoomRequest;
import com.example.qlvp.payload.request.SeatRequest;
import com.example.qlvp.service.CinemaService;
import com.example.qlvp.service.RoomService;
import com.example.qlvp.service.SeatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/seat")
public class SeatController {


    @Autowired
    private SeatService seatService;

    @Autowired
    private RoomService roomService;

    @GetMapping
    public List<Seat> findAll() {

        return seatService.findAll();
    }

    @PostMapping("/{id}")
    public Seat save(@RequestBody SeatRequest seatRequest, @PathVariable Long id) {
        Room room = new Room();
        Optional<Long> optional = roomService.findOne(id).map(Room::getId);
        room.setId(optional.get());
        Seat seat = new Seat();
        seat.setName(seatRequest.getName());
        seat.setType(seatRequest.getType());
        seat.setStatus(seatRequest.getStatus());
        seat.setRoom(room);

        return seatService.save(seat);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@RequestBody SeatRequest seatRequest, @PathVariable Long id) {
        Room room = new Room();
        Optional<Long> optional = roomService.findOne(id).map(Room::getId);
        room.setId(optional.get());
        Seat seat = new Seat();
        seat.setId(seatRequest.getId());
        seat.setName(seatRequest.getName());
        seat.setType(seatRequest.getType());
        seat.setStatus(seatRequest.getStatus());
        seat.setRoom(room);

        seatService.update(seat);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Seat> findOne(@PathVariable Long id) {
        return seatService.findOne(id).map(seat -> new ResponseEntity<>(seat, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        seatService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

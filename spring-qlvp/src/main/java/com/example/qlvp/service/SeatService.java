package com.example.qlvp.service;

import com.example.qlvp.entities.Seat;

import java.util.List;
import java.util.Optional;

public interface SeatService {
    List<Seat> findAll();
    Seat save(Seat seat);
    void update(Seat seat);
    void delete(Long id);
    Optional<Seat> findOne(Long id);
}

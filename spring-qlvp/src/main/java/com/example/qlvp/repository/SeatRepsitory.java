package com.example.qlvp.repository;

import com.example.qlvp.entities.Seat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SeatRepsitory extends JpaRepository<Seat,Long> {
    List<Seat> findByName(String name);
}

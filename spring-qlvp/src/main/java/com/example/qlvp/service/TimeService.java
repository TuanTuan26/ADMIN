package com.example.qlvp.service;

import com.example.qlvp.entities.Room;
import com.example.qlvp.entities.Time;

import java.util.List;
import java.util.Optional;

public interface TimeService {
    List<Time> findAll();
    Optional<Time> findOne(Long id);
}

package com.example.qlvp.service;

import com.example.qlvp.entities.Room;

import java.util.List;
import java.util.Optional;

public interface RoomService {
    List<Room> findAll();
    Room save(Room room);
    void update(Room room);
    void delete(Long id);
    Optional<Room> findOne(Long id);
}

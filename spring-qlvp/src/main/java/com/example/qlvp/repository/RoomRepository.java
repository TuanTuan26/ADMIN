package com.example.qlvp.repository;

import com.example.qlvp.entities.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RoomRepository extends JpaRepository<Room, Long> {
    List<Room> findByName(String name);
}

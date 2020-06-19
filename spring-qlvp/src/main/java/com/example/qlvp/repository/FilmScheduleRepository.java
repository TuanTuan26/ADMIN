package com.example.qlvp.repository;

import com.example.qlvp.entities.FilmSchedule;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FilmScheduleRepository extends JpaRepository<FilmSchedule,Long> {

}

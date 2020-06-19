package com.example.qlvp.service;



import com.example.qlvp.entities.FilmSchedule;

import java.util.List;
import java.util.Optional;

public interface FilmScheduleService {
    List<FilmSchedule> findAll();
    FilmSchedule save(FilmSchedule filmSchedule);
    void update(FilmSchedule filmSchedule);
    void delete(Long id);
    Optional<FilmSchedule> findOne(Long id);
}

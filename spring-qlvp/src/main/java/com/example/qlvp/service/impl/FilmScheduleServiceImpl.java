package com.example.qlvp.service.impl;

import com.example.qlvp.entities.FilmSchedule;
import com.example.qlvp.repository.FilmScheduleRepository;
import com.example.qlvp.service.FilmScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
@Transactional
@Service
public class FilmScheduleServiceImpl implements FilmScheduleService {
    @Autowired
    FilmScheduleRepository filmScheduleRepository;
    @Override
    public List<FilmSchedule> findAll() {
        return filmScheduleRepository.findAll();
    }

    @Override
    public FilmSchedule save(FilmSchedule filmSchedule) {
        return filmScheduleRepository.save(filmSchedule);
    }

    @Override
    public void update(FilmSchedule filmSchedule) {
        filmScheduleRepository.save(filmSchedule);
    }

    @Override
    public void delete(Long id) {
            filmScheduleRepository.deleteById(id);
    }

    @Override
    public Optional<FilmSchedule> findOne(Long id) {
        return filmScheduleRepository.findById(id);
    }
}

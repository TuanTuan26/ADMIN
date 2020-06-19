package com.example.qlvp.service.impl;

import com.example.qlvp.entities.Cinema;
import com.example.qlvp.repository.CinemaRepository;
import com.example.qlvp.service.CinemaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class CinemaServiceImpl implements CinemaService {

    @Autowired
    private CinemaRepository cinemaRepository;


    @Override
    public List<Cinema> findAll() {
        return cinemaRepository.findAll();
    }

    @Override
    public Cinema save(Cinema cinema) {
        return cinemaRepository.save(cinema);
    }

    @Override
    public void update(Cinema cinema) {
        cinemaRepository.save(cinema);
    }

    @Override
    public void delete(Long id) {
        cinemaRepository.deleteById(id);
    }

    @Override
    public Optional<Cinema> findOne(Long id) {
        return cinemaRepository.findById(id);
    }
}

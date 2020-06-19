package com.example.qlvp.service.impl;

import com.example.qlvp.entities.Film;
import com.example.qlvp.repository.FilmRepository;
import com.example.qlvp.service.FilmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class FilmServiceImpl implements FilmService {
    @Autowired
    FilmRepository filmRepository;
    @Override
    public List<Film> findAll() {
        return filmRepository.findAll();
    }

    @Override
    public Film save(Film film) {
        return null;
    }

    @Override
    public void update(Film film) {

    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public Optional<Film> findOne(Long id) {
        return filmRepository.findById(id);
    }
}

package com.example.qlvp.service.Ipml;

import com.example.qlvp.entities.Film;
import com.example.qlvp.repository.FilmRepository;
import com.example.qlvp.service.FilmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class FilmServiceImpl implements FilmService {

    @Autowired
    private FilmRepository filmRepository;

    @Override
    public List<Film> findAll() {
        return filmRepository.findAll();
    }

    @Override
    public Film save(Film film) {
        return filmRepository.save(film);
    }

    @Override
    public void update(Film film) {
        filmRepository.save(film);
    }

    @Override
    public void delete(Long id) {
        filmRepository.deleteById(id);
    }

    @Override
    public Optional<Film> findOne(Long id) {
        return filmRepository.findById(id);
    }
}

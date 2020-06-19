package com.example.qlvp.service.impl;

import com.example.qlvp.entities.Time;
import com.example.qlvp.repository.TimeRepository;
import com.example.qlvp.service.TimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class TimeServiceImpl implements TimeService {
    @Autowired
    TimeRepository timeRepository;
    @Override
    public List<Time> findAll() {
        return timeRepository.findAll();
    }

    @Override
    public Optional<Time> findOne(Long id) {
        return timeRepository.findById(id);
    }
}

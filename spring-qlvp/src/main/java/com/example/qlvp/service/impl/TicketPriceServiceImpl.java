package com.example.qlvp.service.impl;

import com.example.qlvp.entities.TicketPrice;
import com.example.qlvp.repository.TicketPriceRepository;
import com.example.qlvp.service.TicketPriceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class TicketPriceServiceImpl implements TicketPriceService {
    @Autowired
    TicketPriceRepository ticketPriceRepository;
    @Override
    public List<TicketPrice> findAll() {
        return ticketPriceRepository.findAll();
    }

    @Override
    public Optional<TicketPrice> findOne(Long id) {
        return ticketPriceRepository.findById(id);
    }
}

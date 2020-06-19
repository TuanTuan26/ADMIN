package com.example.qlvp.service;

import com.example.qlvp.entities.Room;
import com.example.qlvp.entities.TicketPrice;

import java.util.List;
import java.util.Optional;

public interface TicketPriceService {
    List<TicketPrice> findAll();
    Optional<TicketPrice> findOne(Long id);
}

package com.example.qlvp.rest;

import com.example.qlvp.entities.TicketPrice;
import com.example.qlvp.service.TicketPriceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/ticket-price")
public class TicketPriceController {
    @Autowired
    TicketPriceService ticketPriceService;
    @GetMapping
    public List<TicketPrice> findAll(){
        return ticketPriceService.findAll();
    }
}

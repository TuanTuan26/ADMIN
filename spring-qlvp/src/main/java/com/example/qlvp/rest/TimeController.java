package com.example.qlvp.rest;

import com.example.qlvp.entities.Time;
import com.example.qlvp.service.TimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/time")
public class TimeController {

    @Autowired
    TimeService timeService;

    @GetMapping
    public List<Time> findAll(){
        return timeService.findAll();
    }
}

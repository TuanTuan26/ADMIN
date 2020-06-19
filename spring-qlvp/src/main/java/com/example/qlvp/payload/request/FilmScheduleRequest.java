package com.example.qlvp.payload.request;

import com.example.qlvp.entities.Film;
import com.example.qlvp.entities.Room;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@AllArgsConstructor
@Data
@NoArgsConstructor
public class FilmScheduleRequest {
    private long id;

    private Date day;


    private long room;
    private long film;
    private long time;
    private long ticketPrice;
}

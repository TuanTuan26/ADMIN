package com.example.qlvp.payload.request;

import com.example.qlvp.entities.Film;
import com.example.qlvp.entities.Room;
import lombok.Data;

@Data
public class SeatRequest {
    private long id;
    private String name;
    private String type ;
    private long status;
    private long room;
}

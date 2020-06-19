package com.example.qlvp.payload.request;


import lombok.Data;


@Data
public class RoomRequest {

    private long id;
    private String name;
    private String character;
    private long cinema;


}

package com.example.qlvp.payload.request;

import lombok.Data;

@Data
public class SeatRequest {
    private long id;
    private String name;
    private String type ;
    private long status;
}

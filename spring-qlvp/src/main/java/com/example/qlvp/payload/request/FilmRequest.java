package com.example.qlvp.payload.request;

import lombok.Data;

import java.util.Set;

@Data
public class FilmRequest {

    private Long id;
    private String name;
    private String cast;
    private String image;
    private int yearProduce;
    private String description;
    private String trailer;
    private int time;
    private String language;
    private String userName;
    Set<Long> categories;

}

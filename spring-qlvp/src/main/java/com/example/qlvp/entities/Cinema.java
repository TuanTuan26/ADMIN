package com.example.qlvp.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "TBL_CINEMA")
@Data
public class Cinema {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "TBL_CINEMA_SEQ")
    @SequenceGenerator(name = "TBL_CINEMA_SEQ", sequenceName = "TBL_CINEMA_SEQ", allocationSize = 1)
    private Long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "ADDRESS")
    private String address;

    @Column(name = "INTRODUCE")
    private String introduce;



}

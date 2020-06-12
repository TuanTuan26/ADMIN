package com.example.qlvp.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "TBL_ROOM")
@Data
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "TBL_ROOM_SEQ")
    @SequenceGenerator(name = "TBL_ROOM_SEQ", sequenceName = "TBL_ROOM_SEQ", allocationSize = 1)
    private Long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "CHARACTERISTICS")
    private String character;

    @OneToOne
    @JoinColumn(name = "CINEMA_ID")
    Cinema cinema;



}

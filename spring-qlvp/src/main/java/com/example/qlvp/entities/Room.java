package com.example.qlvp.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.Set;

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
    @JoinColumn(name="CINEMA_ID")
    private Cinema cinema;

    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "ID")
    private Set<Seat> seats;


}

package com.example.qlvp.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "TBL_SEAT")
@Data
public class Seat {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "TBL_SEAT_SEQ")
    @SequenceGenerator(name = "TBL_SEAT_SEQ", sequenceName = "TBL_SEAT_SEQ", allocationSize = 1)
    private Long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "TYPE")
    private String type;

    @Column(name = "STATUS")
    private long status;

    @OneToOne
    @JoinColumn(name = "ROOM_ID")
    Room room;
}

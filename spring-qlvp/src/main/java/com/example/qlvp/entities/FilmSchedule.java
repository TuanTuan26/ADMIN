package com.example.qlvp.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "TBL_FILM_SCHEDULE")
@Data
public class FilmSchedule {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "TBL_FILM_SCHEDULE_SEQ")
    @SequenceGenerator(name = "TBL_FILM_SCHEDULE_SEQ", sequenceName = "TBL_FILM_SCHEDULE_SEQ", allocationSize = 1)
    private Long id;
    @JsonFormat(pattern="yyyy-MM-dd")
    @Column(name = "DAY")
    private Date day;

    @ManyToOne
    @JoinColumn(name = "TIME_ID")
    private Time time;

    @ManyToOne
    @JoinColumn(name = "TICKET_PRICE_ID")
    private TicketPrice ticketPrice;

    @ManyToOne
    @JoinColumn(name = "ROOM_ID")
    private Room room;

    @ManyToOne
    @JoinColumn(name = "FILM_ID")
    private Film film;



}

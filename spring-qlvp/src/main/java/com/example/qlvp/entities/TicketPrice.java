package com.example.qlvp.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "TBL_TICKET_PRICE")
@Data
public class TicketPrice {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "TBL_TICKET_PRICE_SEQ")
    @SequenceGenerator(name = "TBL_TICKET_PRICE_SEQ", sequenceName = "TBL_TICKET_PRICE_SEQ", allocationSize = 1)
    private Long id;

    @Column(name = "PRICE")
    private long price;
}

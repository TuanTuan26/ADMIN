package com.example.qlvp.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "TBL_TIME")
@Data
public class Time {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "TBL_TIME_SEQ")
    @SequenceGenerator(name = "TBL_TIME_SEQ", sequenceName = "TBL_TIME_SEQ", allocationSize = 1)
    private Long id;

    @Column(name = "NAME_TIME")
    private String nameTime;

}

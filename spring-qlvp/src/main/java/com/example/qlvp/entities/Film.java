package com.example.qlvp.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "TBL_FILM")
@Data
public class Film {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "TBL_FILM_SEQ")
    @SequenceGenerator(name = "TBL_FILM_SEQ", sequenceName = "TBL_FILM_SEQ", allocationSize = 1)
    private Long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "CAST")
    private String cast;

    @Column(name = "IMAGE")
    private String image;

    @Column(name = "YEAR_PRODUCE")
    private int yearProduce;

    @Column(name = "DESCRIPTION")
    private String description;


    @Column(name = "TRAILER")
    private String trailer;

    @Column(name = "TIME")
    private int time;


    @Column(name = "LANGUAGE")
    private String language;

    @Column(name = "CREATE_DATE")
    private Date creatDate;

    @Column(name = "USERNAME")
    private String userName;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "ID")
    Set<FilmCategory> filmCategories;
}

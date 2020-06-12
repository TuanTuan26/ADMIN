package com.example.qlvp.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "TBL_FILM_CATEGORY")
@Data
public class FilmCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "TBL_FILM_CATEGORY_SEQ")
    @SequenceGenerator(name = "TBL_FILM_CATEGORY_SEQ", sequenceName = "TTBL_FILM_CATEGORY_SEQ", allocationSize = 1)
    private Long id;

    @OneToOne
    @JoinColumn(name = "CATEGORY_ID")
    Category category;

    @OneToOne
    @JoinColumn(name = "FILM_ID")
    Film film;

}

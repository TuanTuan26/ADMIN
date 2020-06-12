package com.example.qlvp.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "TBL_CATEROGY")
@Data
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "TBL_CATEROGY_SEQ")
    @SequenceGenerator(name = "TBL_CATEROGY_SEQ", sequenceName = "TBL_CATEROGY_SEQ", allocationSize = 1)
    private Long id;

    @Column(name = "NAME")
    private String name;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "ID")
    Set<FilmCategory> filmCategories;

}

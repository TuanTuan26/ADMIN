package com.example.qlvp.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "TBL_ROLE")
@Data
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "TBL_ROLE_SEQ")
    @SequenceGenerator(name = "TBL_ROLE_SEQ", sequenceName = "TBL_ROLE_SEQ", allocationSize = 1)
    private Long id;

    @Column(name = "NAME")
    private String name;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "ID")
    Set<UserRole> userRoles;
}

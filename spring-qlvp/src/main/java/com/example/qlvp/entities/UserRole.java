package com.example.qlvp.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "TBL_USER_ROLE")
@Data
public class UserRole {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "TBL_USER_ROLE_SEQ")
    @SequenceGenerator(name = "TBL_USER_ROLE_SEQ", sequenceName = "TBL_USER_ROLE_SEQ", allocationSize = 1)
    private Long id;

    @OneToOne
    @JoinColumn(name = "USER_ID")
    User user;

    @OneToOne
    @JoinColumn(name = "ROLE_ID")
    Role role;
}

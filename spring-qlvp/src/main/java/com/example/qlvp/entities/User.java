package com.example.qlvp.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "TBL_USER")
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "TBL_USER_SEQ")
    @SequenceGenerator(name = "TBL_USER_SEQ", sequenceName = "TBL_USER_SEQ", allocationSize = 1)
    private Long id;

    @Column(name = "NAME")
    private String name;
    @Column(name = "USERNAME")
    private String userName;
    @Column(name = "PASSWORD")
    private String password;
    @Column(name = "GENDER")
    private String gender;

    @Column(name = "EMAIL")
    private String email;
    @Column(name = "CREATE_DATE")
    private Date createDate;

//    @OneToMany(fetch = FetchType.LAZY)
//    @JoinColumn(name = "ID")
//    Set<UserRole> userRoles;


}

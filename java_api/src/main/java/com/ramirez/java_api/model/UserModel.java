package com.ramirez.java_api.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("user")
public class UserModel {
    @Id
    private String id;
    private String name;
    private Date birthday;
    private String email;
    private String password;
    private String typeUser;
    private String genre;


    public UserModel(String name, Date birthday, String email, String password, String typeUser, String genre){
        this.name = name;
        this.birthday = birthday;
        this.email = email;
        this.password = password;
        this.typeUser = typeUser;
        this.genre = genre;
    }

    public UserModel(String id){
        this.id = id;
    }
}

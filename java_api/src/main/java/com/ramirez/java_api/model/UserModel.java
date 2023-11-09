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
    private String cpf;
    private String email;
    private String password;
    private String typeUser;
    private String genre;


    public UserModel(String name, String email, String password, String typeUser, String genre, String cpf){
        this.name = name;
        this.email = email;
        this.password = password;
        this.typeUser = typeUser;
        this.genre = genre;
        this.cpf = cpf;
    }

    public UserModel(String id){
        this.id = id;
    }

    public UserModel(){
    }
}

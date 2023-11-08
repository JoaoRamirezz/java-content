package com.ramirez.java_api.model;

import java.sql.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

public class EventModel {
    @Id
    private String id;
    private String name;
    private String genre;
    private Date date;

    @DBRef
    private UserModel idUser;

    public EventModel(String id, String name, Date date, String genre){
        this.name = name;
        this.date = date;
        this.genre = genre;
        this.id = id;
    }
}

package com.ramirez.java_api.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("userDto")
public class UserDTO {
    @Id
    private String id;
    public String userName;
    public String type;


    public UserDTO(String type, String userName){
        this.type = type;
        this.userName = userName;
    }
}

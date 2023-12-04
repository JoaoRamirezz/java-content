package com.ramirez.java_api.dtos;

import com.ramirez.java_api.model.UserModel;

public record UserDTO(String username, String type) {
    public UserDTO(UserModel user){
        this(user.getUsername(),user.getType());
    }
} 

package com.ramirez.java_api.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ramirez.java_api.model.UserModel;
import com.ramirez.java_api.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public UserModel save(UserModel userModel){
        return userRepository.save(userModel);
    }
    
    public List<UserModel> findAll(){
        return (List<UserModel>) this.userRepository.findAll();
    }

    public List<UserModel> Login (String email, String password){
        return (List<UserModel>) this.userRepository.findByName(email);
    }
}

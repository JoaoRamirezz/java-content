package com.ramirez.java_api.service;

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

    public UserModel Login (String email, String password){
        return (UserModel) this.userRepository.Login(email, password);
    }

    public UserModel findByEmail (String email){
        return (UserModel) this.userRepository.findByEmail(email);
    }

    public UserModel findbyUsername (String name){
        return (UserModel) this.userRepository.findByUsername(name);
    }

    public List<UserModel> findByCity(String city){
        return (List<UserModel>) this.userRepository.findByCity(city);
    }

    public List<UserModel> findByGenre(String genre){
        return (List<UserModel>) this.userRepository.findByGenre(genre);
    }
}

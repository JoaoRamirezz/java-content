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
        return this.userRepository.save(userModel);
    }

    public void save(String name, String email, String password, String typeUser, String genre, String cpf){
        this.userRepository.save(new UserModel(name, email, password, typeUser, genre, cpf));
    }

    public List<UserModel> findAll(){
        return (List<UserModel>) this.userRepository.findAll();
    }

    public List<UserModel> findByName(String name){
        return (List<UserModel>) this.userRepository.findByName(name);
    }

    public List<UserModel> findByAgeAndName(String name, short age){
        return (List<UserModel>) this.userRepository.findByAgeAndName(name, age);
    }
}

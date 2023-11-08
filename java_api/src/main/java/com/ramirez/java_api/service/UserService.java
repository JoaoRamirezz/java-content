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

    public UserModel update(UserModel userModel){
        return this.userRepository.save(userModel);
    }

    public void save(String name, Date birthday, String email, String password, String typeUser, String genre){
        this.userRepository.save(new UserModel(name, birthday, email, password, typeUser, genre));
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

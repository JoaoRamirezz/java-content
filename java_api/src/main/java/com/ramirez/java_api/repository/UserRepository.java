package com.ramirez.java_api.repository;

import org.apache.catalina.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.ramirez.java_api.model.UserLogin;
import com.ramirez.java_api.model.UserModel;
import java.util.*;

public interface UserRepository extends MongoRepository<UserModel, String>{

    @Query("{'name': ?0}")
    List<UserModel> findByName(String name);

    @Query("{'name': ?0, 'age': ?1}")
    List<UserModel> findByAgeAndName(String name, short age);

    @Query("{'email': ?0, 'password': ?1}")
    List<UserModel> Login(String email, String password);


}
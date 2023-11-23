package com.ramirez.java_api.controller;

import java.sql.Date;
import java.util.List;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ramirez.java_api.model.UserLogin;
import com.ramirez.java_api.model.UserModel;
import com.ramirez.java_api.repository.UserRepository;
import com.ramirez.java_api.service.UserService;

@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserService UserService;

    @GetMapping("")
    public void test() {
        System.out.println("deu boa");
    }

    @GetMapping("/findUsers")
    public List<UserModel> getAllUser() {
        List<UserModel> listRes = UserService.findAll();
        return listRes;
    }

    @PostMapping("/newuser")
    public void newUser(@RequestBody UserModel newUser) {
        UserService.save(newUser);
    }

    @PostMapping("/login")
    public void tryLogin(@RequestBody UserLogin login) {
        UserService.Login(login.email(), login.password());
    }
}

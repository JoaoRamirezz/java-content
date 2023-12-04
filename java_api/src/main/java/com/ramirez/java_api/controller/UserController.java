package com.ramirez.java_api.controller;

import java.util.List;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ramirez.java_api.model.CreateUser;
import com.ramirez.java_api.model.UserLogin;
import com.ramirez.java_api.model.UserModel;
import com.ramirez.java_api.service.JwtService;
import com.ramirez.java_api.service.UserService;

@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserService UserService;

    @Autowired
    private JwtService jwtService;

    @PostMapping("/searchUser")
    public UserModel searchUser(@RequestBody String username) {
        var user = username.replace("=", "");
        UserModel resultUser = UserService.findbyUsername(user);
        return resultUser;
    }
    @GetMapping("/findCity")
    public List<UserModel> getByCity(@RequestHeader("Authorization") String token) {
        var tokenOk = token.replace("Bearer ", "");
        String email = jwtService.validateToken(tokenOk);
        UserModel user = UserService.findByEmail(email);
        List<UserModel> listUsers = UserService.findByCity(user.getCity());
        return JwtService.GetRandomUsers(listUsers, user.getName());
    }

    @GetMapping("/findGenre")
    public List<UserModel> getByGenre(@RequestHeader("Authorization") String token) {
        var tokenOk = token.replace("Bearer ", "");
        String email = jwtService.validateToken(tokenOk);
        UserModel user = UserService.findByEmail(email);
        List<UserModel> listUsers = UserService.findByGenre(user.getMusicalGenre());
        return JwtService.GetRandomUsers(listUsers, user.getName());
    }

    @GetMapping("/userData")
    public UserModel getUSerData(@RequestHeader("Authorization") String token) {
        var tokenOk = token.replace("Bearer ", "");
        String email = jwtService.validateToken(tokenOk);
        UserModel user = UserService.findByEmail(email);
        return user;
    }

    @GetMapping("/findAll")
    public List<UserModel> getAllUser() {
        List<UserModel> listRes = UserService.findAll();
        return listRes;
    }

    @PostMapping("/newuser")
    public UserModel newUser(@RequestBody CreateUser data) {
        int workFactor = 12;
        var newUser = new UserModel(data, BCrypt.hashpw(data.password(), BCrypt.gensalt(workFactor)),
                BCrypt.hashpw(data.cpf(), BCrypt.gensalt(workFactor)));
        UserModel user = UserService.save(newUser);
        return user;
    }

    @PostMapping("/login")
    public ResponseEntity<String> tryLogin(@RequestBody UserLogin login) {
        UserModel user = UserService.findByEmail(login.email());
        if (BCrypt.checkpw(login.password(), user.getPassword())) {
            String token = this.jwtService.genToken(user);
            return ResponseEntity.ok(token);
        }
        return ResponseEntity.badRequest().build();
    }

}

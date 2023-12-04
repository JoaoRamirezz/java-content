package com.ramirez.java_api.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.ramirez.java_api.exception.AuthException;
import com.ramirez.java_api.model.UserModel;

@Service
public class JwtService implements UserDetailsService {

    @Autowired
    private UserService userService;

    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.issuer}")
    private String issuer;

    public String genToken(UserModel user) {
        try {

            final var anAlgorithm = Algorithm.HMAC256(secret);
            final String aToken = JWT.create()
                    .withIssuer(issuer)
                    .withSubject(user.getEmail())
                    .withExpiresAt(new Date(new Date().getTime() + 24 * 60 * 60 * 1000))
                    .sign(anAlgorithm);
            return aToken;

        } catch (IllegalArgumentException e) {
            throw new AuthException(e.getMessage());
        } catch (JWTCreationException e) {
            throw new AuthException(e.getMessage());
        }

    }

    public String validateToken(String token) {
        try {
            final var anAlgorithm = Algorithm.HMAC256(secret);
            final var decoded = JWT.require(anAlgorithm)
                    .withIssuer(issuer)
                    .build()
                    .verify(token);

            final var anSubject = decoded.getSubject();
            return anSubject;
        } catch (Exception e) {
            System.out.println(token);
            System.out.println(e.getMessage());
            return "";
        }
    }

    public static List<UserModel> GetRandomUsers(List<UserModel> Array, String name) {
        List<UserModel> newArray = new ArrayList<UserModel>() ;
        Random rand = new Random();

        for (int i = 0; i < 10; i++) {
            UserModel randomElement = Array.get(rand.nextInt(Array.size()));
            if (newArray.contains(randomElement) == false){
                newArray.add(randomElement);  
            }
        }

        return newArray;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserModel resp = this.userService.findByEmail(username);
        if (resp.getEmail().equals(username)) {
            return (UserDetails) resp;
        } else {
            throw new UsernameNotFoundException("User not found");
        }
    }
}
package com.ramirez.java_api.model;

import java.util.Collection;
import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("user")
public class UserModel implements UserDetails{
    @Id
    private String id;
    private String name;
    private String userName;
    private String cpf;
    private String email;
    private String password;
    private String type;
    private String genre;
    private String city;
    private String musicalGenre;


    public UserModel(CreateUser user, String hashedPassword, String hashedCpf){
        this.name = user.name();
        this.email = user.email();
        this.password = hashedPassword;
        this.type = user.type();
        this.genre = user.genre();
        this.cpf = hashedCpf;
        this.userName = user.userName();
        this.city = user.city();
        this.musicalGenre = user.musicalGenre();
    }

    public UserModel(String id){
        this.id = id;
    }

    public UserModel(){
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("USER"));
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}

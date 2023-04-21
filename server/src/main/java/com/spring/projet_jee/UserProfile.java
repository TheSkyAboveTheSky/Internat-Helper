package com.spring.projet_jee;

public class UserProfile {
    private String firstName;
    private String lastName;
    private String email;



    public String getEmail() {
        return email;
    }



    // getters and setters for the fields

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}

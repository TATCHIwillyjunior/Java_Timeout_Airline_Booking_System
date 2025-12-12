package fr.epita.timeoutAirlineBookingSystem.domain.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "User_Id")   // maps to SQL column User_Id
    private Long userId;

    @Column(name = "Firstname", nullable = false)
    private String firstname;

    @Column(name = "Lastname", nullable = false)
    private String lastname;

    @Column(name = "Address")
    private String address;

    @Column(name = "Email", unique = true, nullable = false)
    private String email;

    @Column(name = "PhoneNo")
    private String phoneNo;

    @Column(name = "BirthDte", nullable = false)
    private LocalDate birthDate;

    // JPA requires a no-arg constructor
    public User() {}

    // All-args constructor
    public User(Long userId, String firstname, String lastname, String address,
                String email, String phoneNo, LocalDate birthDate) {
        this.userId = userId;
        this.firstname = firstname;
        this.lastname = lastname;
        this.address = address;
        this.email = email;
        this.phoneNo = phoneNo;
        this.birthDate = birthDate;
    }

    // Getters and setters
    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public String getFirstname() { return firstname; }
    public void setFirstname(String firstname) { this.firstname = firstname; }

    public String getLastname() { return lastname; }
    public void setLastname(String lastname) { this.lastname = lastname; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPhoneNo() { return phoneNo; }
    public void setPhoneNo(String phoneNo) { this.phoneNo = phoneNo; }

    public LocalDate getBirthDate() { return birthDate; }
    public void setBirthDate(LocalDate birthDate) { this.birthDate = birthDate; }
}

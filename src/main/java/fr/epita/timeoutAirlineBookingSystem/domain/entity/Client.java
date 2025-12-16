package fr.epita.timeoutAirlineBookingSystem.domain.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

@Entity
@Table(name = "clients")
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Client_Id")
    private Long clientId;

    @OneToOne(optional = false, fetch = FetchType.EAGER)
    @Fetch(FetchMode.JOIN)
    @JoinColumn(name = "User_Id", unique = true, nullable = false,
            foreignKey = @ForeignKey(name = "fk_client_user"))
    private User user;

    @Column(name = "PassportNo", unique = true, nullable = false)
    private String passportNo;

    // JPA requires a no-arg constructor
    public Client() {}

    // All-args constructor
    public Client(Long clientId, User user, String passportNo) {
        this.clientId = clientId;
        this.user = user;
        this.passportNo = passportNo;
    }

    // Getters and setters
    public Long getClientId() { return clientId; }
    public void setClientId(Long clientId) { this.clientId = clientId; }

    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }

    public String getPassportNo() { return passportNo; }
    public void setPassportNo(String passportNo) { this.passportNo = passportNo; }
}

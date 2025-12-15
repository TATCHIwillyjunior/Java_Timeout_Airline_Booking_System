package fr.epita.timeoutAirlineBookingSystem.domain.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "airports")
public class Airport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Airport_Id")
    private Long airportId;

    @Column(name = "Name", nullable = false)
    private String name;

    @Column(name = "Country", nullable = false)
    private String country;

    @Column(name = "City", nullable = false)
    private String city;

    @Column(name = "Code", nullable = false)
    private String code;

    // JPA requires a no-arg constructor
    public Airport() {}

    // All-args constructor
    public Airport(Long airportId, String name, String country, String city, String code) {
        this.airportId = airportId;
        this.name = name;
        this.country = country;
        this.city = city;
        this.code = code;
    }

    // Getters and setters
    public Long getAirportId() { return airportId; }
    public void setAirportId(Long airportId) { this.airportId = airportId; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getCountry() { return country; }
    public void setCountry(String country) { this.country = country; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}

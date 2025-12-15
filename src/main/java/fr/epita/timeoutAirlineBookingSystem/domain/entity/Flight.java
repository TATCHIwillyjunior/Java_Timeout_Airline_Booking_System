package fr.epita.timeoutAirlineBookingSystem.domain.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "flights")
public class Flight {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Flights_Id")
    private Long flightsId;

    @Column(name = "Flight_No", unique = true, nullable = false)
    private String flightNo;

    @Column(name = "Departure_City", nullable = false)
    private String departureCity;

    @Column(name = "Arrival_City", nullable = false)
    private String arrivalCity;

    @Column(name = "Departure_Hour", nullable = false)
    private LocalDateTime departureHour;

    @Column(name = "Arrival_Hour", nullable = false)
    private LocalDateTime arrivalHour;

    @ManyToOne
    @JoinColumn(name = "Departure_Airport_Id")
    private Airport departureAirport;

    @ManyToOne
    @JoinColumn(name = "Arrival_Airport_Id")
    private Airport arrivalAirport;

    @ManyToOne
    @JoinColumn(name = "Plane_Id")
    private Plane plane;

    @Column(name = "No_Of_Seat", nullable = false)
    private int noOfSeat;

    @Column(name = "First_Class_Seat_Price", nullable = false)
    private double firstClassSeatPrice;

    @Column(name = "Premium_Seat_Price", nullable = false)
    private double premiumSeatPrice;

    @Column(name = "Business_Class_Price", nullable = false)
    private double businessClassPrice;

    @Column(name = "Economics_Class_Price", nullable = false)
    private double economicsClassPrice;

    // JPA requires a no-arg constructor
    public Flight() {}

    // All-args constructor
    public Flight(Long flightsId, String flightNo, String departureCity, String arrivalCity, LocalDateTime departureHour, LocalDateTime arrivalHour, Airport departureAirport, Airport arrivalAirport, Plane plane, int noOfSeat, double firstClassSeatPrice, double premiumSeatPrice, double businessClassPrice, double economicsClassPrice) {
        this.flightsId = flightsId;
        this.flightNo = flightNo;
        this.departureCity = departureCity;
        this.arrivalCity = arrivalCity;
        this.departureHour = departureHour;
        this. arrivalHour = arrivalHour;
        this.departureAirport =departureAirport;
        this.arrivalAirport = arrivalAirport;
        this. plane = plane;
        this. noOfSeat = noOfSeat;
        this. firstClassSeatPrice = firstClassSeatPrice;
        this. premiumSeatPrice = premiumSeatPrice;
        this. businessClassPrice = businessClassPrice;
        this. economicsClassPrice = economicsClassPrice;
    }

    // Getters and setters

    public Long getFlightsId() {
        return flightsId;
    }

    public void setFlightsId(Long flightsId) {
        this.flightsId = flightsId;
    }

    public String getFlightNo() {
        return flightNo;
    }

    public void setFlightNo(String flightNo) {
        this.flightNo = flightNo;
    }

    public String getDepartureCity() {
        return departureCity;
    }

    public void setDepartureCity(String departureCity) {
        this.departureCity = departureCity;
    }

    public String getArrivalCity() {
        return arrivalCity;
    }

    public void setArrivalCity(String arrivalCity) {
        this.arrivalCity = arrivalCity;
    }

    public LocalDateTime getDepartureHour() {
        return departureHour;
    }

    public void setDepartureHour(LocalDateTime departureHour) {
        this.departureHour = departureHour;
    }

    public LocalDateTime getArrivalHour() {
        return arrivalHour;
    }

    public void setArrivalHour(LocalDateTime arrivalHour) {
        this.arrivalHour = arrivalHour;
    }

    public Airport getDepartureAirport() {
        return departureAirport;
    }

    public void setDepartureAirport(Airport departureAirport) {
        this.departureAirport = departureAirport;
    }

    public Airport getArrivalAirport() {
        return arrivalAirport;
    }

    public void setArrivalAirport(Airport arrivalAirport) {
        this.arrivalAirport = arrivalAirport;
    }

    public Plane getPlane() {
        return plane;
    }

    public void setPlane(Plane plane) {
        this.plane = plane;
    }

    public int getNoOfSeat() {
        return noOfSeat;
    }

    public void setNoOfSeat(int noOfSeat) {
        this.noOfSeat = noOfSeat;
    }

    public double getFirstClassSeatPrice() {
        return firstClassSeatPrice;
    }

    public void setFirstClassSeatPrice(double firstClassSeatPrice) {
        this.firstClassSeatPrice = firstClassSeatPrice;
    }

    public double getPremiumSeatPrice() {
        return premiumSeatPrice;
    }

    public void setPremiumSeatPrice(double premiumSeatPrice) {
        this.premiumSeatPrice = premiumSeatPrice;
    }

    public double getBusinessClassPrice() {
        return businessClassPrice;
    }

    public void setBusinessClassPrice(double businessClassPrice) {
        this.businessClassPrice = businessClassPrice;
    }

    public double getEconomicsClassPrice() {
        return economicsClassPrice;
    }

    public void setEconomicsClassPrice(double economicsClassPrice) {
        this.economicsClassPrice = economicsClassPrice;
    }


}

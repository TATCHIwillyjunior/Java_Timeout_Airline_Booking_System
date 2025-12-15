package fr.epita.timeoutAirlineBookingSystem.web.dto;

import java.time.LocalDateTime;

public class FlightDTO {
    private Long flightsId;
    private String flightNo;
    private String departureCity;
    private String arrivalCity;
    private LocalDateTime departureHour;
    private LocalDateTime arrivalHour;
    private Long departureAirportId;
    private Long arrivalAirportId;
    private Long planeId;
    private int noOfSeat;
    private double firstClassSeatPrice;
    private double premiumSeatPrice;
    private double businessClassPrice;
    private double economicsClassPrice;

    public FlightDTO() {}

    public FlightDTO(Long flightsId, String flightNo, String departureCity, String arrivalCity,
                     LocalDateTime departureHour, LocalDateTime arrivalHour,
                     Long departureAirportId, Long arrivalAirportId, Long planeId,
                     int noOfSeat, double firstClassSeatPrice, double premiumSeatPrice,
                     double businessClassPrice, double economicsClassPrice) {
        this.flightsId = flightsId;
        this.flightNo = flightNo;
        this.departureCity = departureCity;
        this.arrivalCity = arrivalCity;
        this.departureHour = departureHour;
        this.arrivalHour = arrivalHour;
        this.departureAirportId = departureAirportId;
        this.arrivalAirportId = arrivalAirportId;
        this.planeId = planeId;
        this.noOfSeat = noOfSeat;
        this.firstClassSeatPrice = firstClassSeatPrice;
        this.premiumSeatPrice = premiumSeatPrice;
        this.businessClassPrice = businessClassPrice;
        this.economicsClassPrice = economicsClassPrice;
    }

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

    public Long getDepartureAirportId() {
        return departureAirportId;
    }

    public void setDepartureAirportId(Long departureAirportId) {
        this.departureAirportId = departureAirportId;
    }

    public Long getArrivalAirportId() {
        return arrivalAirportId;
    }

    public void setArrivalAirportId(Long arrivalAirportId) {
        this.arrivalAirportId = arrivalAirportId;
    }

    public Long getPlaneId() {
        return planeId;
    }

    public void setPlaneId(Long planeId) {
        this.planeId = planeId;
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

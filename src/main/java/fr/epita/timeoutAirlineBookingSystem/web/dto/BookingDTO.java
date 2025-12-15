package fr.epita.timeoutAirlineBookingSystem.web.dto;

import java.time.LocalDateTime;

public class BookingDTO {
    private Long bookingId;
    private Long flightId;
    private Long clientId;
    private String typeOfSeat;
    private LocalDateTime bookedAt;

    public BookingDTO() {}

    public BookingDTO(Long bookingId, Long flightId, Long clientId, String typeOfSeat, LocalDateTime bookedAt) {
        this.bookingId = bookingId;
        this.flightId = flightId;
        this.clientId = clientId;
        this.typeOfSeat = typeOfSeat;
        this.bookedAt = bookedAt;
    }

    // Getters and setters

    public Long getBookingId() {
        return bookingId;
    }

    public void setBookingId(Long bookingId) {
        this.bookingId = bookingId;
    }

    public Long getFlightId() {
        return flightId;
    }

    public void setFlightId(Long flightId) {
        this.flightId = flightId;
    }

    public Long getClientId() {
        return clientId;
    }

    public void setClientId(Long clientId) {
        this.clientId = clientId;
    }

    public String getTypeOfSeat() {
        return typeOfSeat;
    }

    public void setTypeOfSeat(String typeOfSeat) {
        this.typeOfSeat = typeOfSeat;
    }

    public LocalDateTime getBookedAt() {
        return bookedAt;
    }

    public void setBookedAt(LocalDateTime bookedAt) {
        this.bookedAt = bookedAt;
    }


}

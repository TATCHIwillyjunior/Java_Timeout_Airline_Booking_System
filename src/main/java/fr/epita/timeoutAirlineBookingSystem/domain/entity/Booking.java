package fr.epita.timeoutAirlineBookingSystem.domain.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Booking_Id")
    private Long bookingId;

    @ManyToOne
    @JoinColumn(name = "Flight_Id", nullable = false)
    private Flight flight;

    @ManyToOne
    @JoinColumn(name = "Client_Id", nullable = false)
    private Client client;

    @Column(name = "Type_Of_Seat", nullable = false)
    private String typeOfSeat;

    @Column(name = "Booked_At")
    private LocalDateTime bookedAt;

    // JPA requires a no-arg constructor
    public Booking() {}

    // All-args constructor
    public Booking(Long bookingId, Flight flight, Client client, String typeOfSeat, LocalDateTime bookedAt) {
        this.bookingId = bookingId;
        this.flight = flight;
        this.client = client;
        this.typeOfSeat = typeOfSeat;
        this.bookedAt = bookedAt;
    }

    // Getters and setters
    public Long getBookingId() { return bookingId; }
    public void setBookingId(Long bookingId) { this.bookingId = bookingId; }

    public Flight getFlight() { return flight; }
    public void setFlight(Flight flight) { this.flight = flight; }

    public Client getClient() { return client; }
    public void setClient(Client client) { this.client = client; }

    public String getTypeOfSeat() { return typeOfSeat; }
    public void setTypeOfSeat(String typeOfSeat) { this.typeOfSeat = typeOfSeat; }

    public LocalDateTime getBookedAt() { return bookedAt; }
    public void setBookedAt(LocalDateTime bookedAt) { this.bookedAt = bookedAt; }
}

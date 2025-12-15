package fr.epita.timeoutAirlineBookingSystem.web.controller;

import fr.epita.timeoutAirlineBookingSystem.domain.entity.Booking;
import fr.epita.timeoutAirlineBookingSystem.web.dto.BookingDTO;
import fr.epita.timeoutAirlineBookingSystem.services.BookingService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {
    private final BookingService bookingService;
    public BookingController(BookingService bookingService) { this.bookingService = bookingService; }

    @PostMapping
    public Booking create(@RequestBody BookingDTO dto) {
        System.out.println("Received booking for client: " + dto.getClientId());
        Booking booking = new Booking(dto.getBookingId(), null, null, dto.getTypeOfSeat(), dto.getBookedAt());
        return bookingService.bookSeat(booking);
    }

    @GetMapping("/{id}")
    public Booking get(@PathVariable Long id) {
        return bookingService.getBooking(id);
    }

    @GetMapping
    public List<Booking> getAll() {
        System.out.println("Fetching all bookings...");
        return bookingService.getAllBookings();
    }

    @PutMapping("/{id}")
    public Booking update(@PathVariable Long id, @RequestBody BookingDTO dto) {
        Booking updated = new Booking(dto.getBookingId(), null, null, dto.getTypeOfSeat(), dto.getBookedAt());
        return bookingService.updateBooking(id, updated);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        bookingService.cancelBooking(id);
    }
}

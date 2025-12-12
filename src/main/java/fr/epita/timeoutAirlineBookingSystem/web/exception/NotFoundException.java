package fr.epita.timeoutAirlineBookingSystem.web.exception;

public class NotFoundException extends RuntimeException {
    public NotFoundException(String message) {
        super(message);
    }
}

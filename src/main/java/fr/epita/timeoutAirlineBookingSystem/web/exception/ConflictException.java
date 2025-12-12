package fr.epita.timeoutAirlineBookingSystem.web.exception;

public class ConflictException extends RuntimeException {
    public ConflictException(String message) {
        super(message);
    }
}

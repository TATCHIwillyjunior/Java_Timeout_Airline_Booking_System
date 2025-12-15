package fr.epita.timeoutAirlineBookingSystem.domain.repo;

import fr.epita.timeoutAirlineBookingSystem.domain.entity.Flight;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlightRepo extends JpaRepository<Flight, Long> {
    boolean existsByFlightNo(String flightNo);
}

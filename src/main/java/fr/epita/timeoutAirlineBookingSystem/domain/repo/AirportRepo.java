package fr.epita.timeoutAirlineBookingSystem.domain.repo;

import fr.epita.timeoutAirlineBookingSystem.domain.entity.Airport;
import org.springframework.data.jpa.repository.JpaRepository;


public interface AirportRepo extends JpaRepository<Airport, Long> {
    boolean existsByCode(String code);
    boolean existsByNameAndCity(String name, String city);
}

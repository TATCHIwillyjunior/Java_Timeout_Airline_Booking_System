package fr.epita.timeoutAirlineBookingSystem.services;

import fr.epita.timeoutAirlineBookingSystem.domain.entity.Airport;
import fr.epita.timeoutAirlineBookingSystem.domain.repo.AirportRepo;
import fr.epita.timeoutAirlineBookingSystem.web.exception.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AirportService {

    private final AirportRepo airportRepository;

    public AirportService(AirportRepo airportRepository) {
        this.airportRepository = airportRepository;
    }

    // Register a new airport
    public Airport addAirport(Airport airport) {
        if (airportRepository.existsByCode(airport.getCode())) {
            throw new IllegalArgumentException("Airport with code " + airport.getCode() + " already exists");
        }
        return airportRepository.save(airport);
    }

    // Get airport by ID
    public Airport getAirport(Long airportId) {
        return airportRepository.findById(airportId)
                .orElseThrow(() -> new NotFoundException("Airport not found with id " + airportId));
    }

    // List all airports
    public List<Airport> listAllAirports() {
        return airportRepository.findAll();
    }

    // Update airport details
    public Airport updateAirport(Long id, Airport updated) {
        Airport airport = getAirport(id);
        airport.setName(updated.getName());
        airport.setCountry(updated.getCountry());
        airport.setCity(updated.getCity());
        airport.setCode(updated.getCode());
        return airportRepository.save(airport);
    }

    // Delete airport
    public void removeAirport(Long id) {
        airportRepository.deleteById(id);
    }

    // Find airports by city
    public List<Airport> findByCity(String city) {
        return airportRepository.findAll().stream()
                .filter(a -> a.getCity().equalsIgnoreCase(city))
                .toList();
    }

    // Find airports by country
    public List<Airport> findByCountry(String country) {
        return airportRepository.findAll().stream()
                .filter(a -> a.getCountry().equalsIgnoreCase(country))
                .toList();
    }
}

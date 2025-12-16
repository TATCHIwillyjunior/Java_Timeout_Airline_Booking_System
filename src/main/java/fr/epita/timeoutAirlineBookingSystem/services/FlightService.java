package fr.epita.timeoutAirlineBookingSystem.services;

import fr.epita.timeoutAirlineBookingSystem.domain.entity.Flight;
import fr.epita.timeoutAirlineBookingSystem.domain.repo.FlightRepo;
import fr.epita.timeoutAirlineBookingSystem.web.exception.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlightService {
    private final FlightRepo flightRepository;

    public FlightService(FlightRepo flightRepository) {
        this.flightRepository = flightRepository;
    }

    public Flight scheduleFlight(Flight flight) {
        if (flightRepository.existsByFlightNo(flight.getFlightNo())) {
            throw new IllegalArgumentException("Flight number already exists");
        }
        return flightRepository.save(flight);
    }

    public List<Flight> searchFlights(String departureCity, String arrivalCity, String departureDate) {
        return flightRepository.findAll().stream()
                .filter(f -> f.getDepartureCity().equalsIgnoreCase(departureCity)
                        && f.getArrivalCity().equalsIgnoreCase(arrivalCity)
                        && f.getDepartureHour().toLocalDate().toString().equals(departureDate))
                .toList();
    }


    public Flight getFlight(Long id) {
        return flightRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Flight not found with id " + id));
    }

    public List<Flight> getAllFlights() {
        return flightRepository.findAll();
    }

    public Flight updateFlight(Long flightsId, Flight updated) {
        Flight flight = flightRepository.findById(flightsId)
                .orElseThrow(() -> new NotFoundException("Flight not found"));
        flight.setDepartureHour(updated.getDepartureHour());
        flight.setArrivalHour(updated.getArrivalHour());
        flight.setPlane(updated.getPlane());
        return flightRepository.save(flight);
    }

    public void cancelFlight(Long id) {
        flightRepository.deleteById(id);
    }
}

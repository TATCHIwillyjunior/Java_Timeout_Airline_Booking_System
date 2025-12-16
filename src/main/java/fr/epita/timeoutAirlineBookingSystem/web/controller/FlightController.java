package fr.epita.timeoutAirlineBookingSystem.web.controller;

import fr.epita.timeoutAirlineBookingSystem.domain.entity.Airport;
import fr.epita.timeoutAirlineBookingSystem.domain.entity.Flight;
import fr.epita.timeoutAirlineBookingSystem.domain.entity.Plane;
import fr.epita.timeoutAirlineBookingSystem.services.AirportService;
import fr.epita.timeoutAirlineBookingSystem.services.PlaneService;
import fr.epita.timeoutAirlineBookingSystem.web.dto.FlightDTO;
import fr.epita.timeoutAirlineBookingSystem.services.FlightService;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.constraints.NotNull;


import java.util.List;

@RestController
@RequestMapping("/api/flights")
public class FlightController {
    private final FlightService flightService;
    private final AirportService airportService;
    private final PlaneService planeService;

    public FlightController(FlightService flightService, AirportService airportService, PlaneService planeService) {
        this.flightService = flightService;
        this.airportService = airportService;
        this.planeService = planeService;
    }

    @PostMapping
    public Flight create(@RequestBody @NotNull FlightDTO dto) {
        System.out.println("Received flight: " + dto.getFlightNo());

        Airport departureAirport = airportService.getAirport(dto.getDepartureAirportId());
        Airport arrivalAirport = airportService.getAirport(dto.getArrivalAirportId());
        Plane plane = planeService.getPlane(dto.getPlaneId());

        Flight flight = new Flight(
                dto.getFlightsId(),
                dto.getFlightNo(),
                dto.getDepartureCity(),
                dto.getArrivalCity(),
                dto.getDepartureHour(),
                dto.getArrivalHour(),
                departureAirport,
                arrivalAirport,
                plane,
                dto.getNoOfSeat(),
                dto.getFirstClassSeatPrice(),
                dto.getPremiumSeatPrice(),
                dto.getBusinessClassPrice(),
                dto.getEconomicsClassPrice()
        );

        return flightService.scheduleFlight(flight);
    }

    @GetMapping("/search")
    public List<Flight> searchFlights(
            @RequestParam String departureCity,
            @RequestParam String arrivalCity) {
        System.out.println("Searching flights from " + departureCity + " to " + arrivalCity);
        return flightService.searchFlights(departureCity, arrivalCity);
    }


    @GetMapping("/{id}")
    public Flight get(@PathVariable Long id) {
        return flightService.getFlight(id);
    }

    @GetMapping
    public List<Flight> getAll() {
        System.out.println("Fetching all flights...");
        return flightService.getAllFlights();
    }

    @PutMapping("/{id}")
    public Flight update(@PathVariable Long id, @RequestBody FlightDTO dto) {
        System.out.println("Updating flight: " + dto.getFlightNo());

        Airport departureAirport = airportService.getAirport(dto.getDepartureAirportId());
        Airport arrivalAirport = airportService.getAirport(dto.getArrivalAirportId());
        Plane plane = planeService.getPlane(dto.getPlaneId());

        Flight updated = new Flight(
                dto.getFlightsId(),
                dto.getFlightNo(),
                dto.getDepartureCity(),
                dto.getArrivalCity(),
                dto.getDepartureHour(),
                dto.getArrivalHour(),
                departureAirport,
                arrivalAirport,
                plane,
                dto.getNoOfSeat(),
                dto.getFirstClassSeatPrice(),
                dto.getPremiumSeatPrice(),
                dto.getBusinessClassPrice(),
                dto.getEconomicsClassPrice()
        );

        return flightService.updateFlight(id, updated);
    }



    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        flightService.cancelFlight(id);
    }
}

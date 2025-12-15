package fr.epita.timeoutAirlineBookingSystem.web.controller;

import fr.epita.timeoutAirlineBookingSystem.domain.entity.Airport;
import fr.epita.timeoutAirlineBookingSystem.web.dto.AirportDTO;
import fr.epita.timeoutAirlineBookingSystem.services.AirportService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/airports")
public class AirportController {
    private final AirportService airportService;
    public AirportController(AirportService airportService) { this.airportService = airportService; }

    @PostMapping
    public Airport create(@RequestBody AirportDTO dto) {
        System.out.println("Received airport: " + dto.getName() + " (" + dto.getCode() + ")");
        return airportService.addAirport(new Airport(dto.getAirportId(), dto.getName(), dto.getCountry(), dto.getCity(), dto.getCode()));
    }

    @GetMapping("/{id}")
    public Airport get(@PathVariable Long id) {
        return airportService.getAirport(id);
    }

    @GetMapping
    public List<Airport> getAll() {
        System.out.println("Fetching all airports...");
        return airportService.listAllAirports();
    }

    @PutMapping("/{id}")
    public Airport update(@PathVariable Long id, @RequestBody AirportDTO dto) {
        return airportService.updateAirport(id, new Airport(dto.getAirportId(), dto.getName(), dto.getCountry(), dto.getCity(), dto.getCode()));
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        airportService.removeAirport(id);
    }
}

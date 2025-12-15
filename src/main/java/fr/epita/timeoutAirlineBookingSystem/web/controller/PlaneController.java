package fr.epita.timeoutAirlineBookingSystem.web.controller;

import fr.epita.timeoutAirlineBookingSystem.domain.entity.Plane;
import fr.epita.timeoutAirlineBookingSystem.web.dto.PlaneDTO;
import fr.epita.timeoutAirlineBookingSystem.services.PlaneService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/planes")
public class PlaneController {
    private final PlaneService planeService;
    public PlaneController(PlaneService planeService) { this.planeService = planeService; }

    @PostMapping
    public Plane create(@RequestBody PlaneDTO dto) {
        System.out.println("Received plane: " + dto.getBrand() + " " + dto.getModel());
        return planeService.addPlane(new Plane(dto.getPlaneId(), dto.getBrand(), dto.getModel(), dto.getManufacturingYear()));
    }

    @GetMapping("/{id}")
    public Plane get(@PathVariable Long id) {
        return planeService.getPlane(id);
    }

    @GetMapping
    public List<Plane> getAll() {
        System.out.println("Fetching all planes...");
        return planeService.listAllPlanes();
    }

    @PutMapping("/{id}")
    public Plane update(@PathVariable Long id, @RequestBody PlaneDTO dto) {
        return planeService.updatePlane(id, new Plane(dto.getPlaneId(), dto.getBrand(), dto.getModel(), dto.getManufacturingYear()));
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        planeService.removePlane(id);
    }
}

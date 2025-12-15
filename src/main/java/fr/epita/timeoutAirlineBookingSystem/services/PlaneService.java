package fr.epita.timeoutAirlineBookingSystem.services;

import fr.epita.timeoutAirlineBookingSystem.domain.entity.Plane;
import fr.epita.timeoutAirlineBookingSystem.domain.repo.PlaneRepo;
import fr.epita.timeoutAirlineBookingSystem.web.exception.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlaneService {
    private final PlaneRepo planeRepository;

    public PlaneService(PlaneRepo planeRepository) {
        this.planeRepository = planeRepository;
    }

    public Plane addPlane(Plane plane) {
        if (planeRepository.existsByBrandAndModel(plane.getBrand(), plane.getModel())) {
            throw new IllegalArgumentException("Plane already exists");
        }
        return planeRepository.save(plane);
    }

    public List<Plane> listAllPlanes() {
        return planeRepository.findAll();
    }

    public Plane getPlane(Long planeId) {
        return planeRepository.findById(planeId)
                .orElseThrow(() -> new NotFoundException("Plane not found with id " + planeId));
    }

    public Plane updatePlane(Long planeId, Plane updated) {
        Plane plane = planeRepository.findById(planeId)
                .orElseThrow(() -> new NotFoundException("Plane not found"));
        plane.setBrand(updated.getBrand());
        plane.setModel(updated.getModel());
        plane.setManufacturingYear(updated.getManufacturingYear());
        return planeRepository.save(plane);
    }

    public void removePlane(Long id) {
        planeRepository.deleteById(id);
    }
}

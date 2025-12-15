package fr.epita.timeoutAirlineBookingSystem.domain.repo;

import fr.epita.timeoutAirlineBookingSystem.domain.entity.Plane;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PlaneRepo extends JpaRepository<Plane, Long> {
    boolean existsByModel(String model);
    boolean existsByBrandAndModel(String brand, String model);
}

package fr.epita.timeoutAirlineBookingSystem.domain.repo;

import fr.epita.timeoutAirlineBookingSystem.domain.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmployeeRepo extends JpaRepository<Employee, Long> {
    // Check if an employee number already exists (for uniqueness validation)
    boolean existsByEmployeeNo(String employeeNo);

    // Retrieve an employee by their business identifier
    Optional<Employee> findByEmployeeNo(String employeeNo);
}

package fr.epita.timeoutAirlineBookingSystem.services;

import fr.epita.timeoutAirlineBookingSystem.domain.entity.Employee;
import fr.epita.timeoutAirlineBookingSystem.domain.entity.User;
import fr.epita.timeoutAirlineBookingSystem.domain.repo.EmployeeRepo;
import fr.epita.timeoutAirlineBookingSystem.domain.repo.UserRepo;
import fr.epita.timeoutAirlineBookingSystem.web.dto.EmployeeDTO;
import fr.epita.timeoutAirlineBookingSystem.web.exception.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    private final EmployeeRepo employeeRepository;
    private final UserRepo userRepository;

    public EmployeeService(EmployeeRepo employeeRepository, UserRepo userRepository) {
        this.employeeRepository = employeeRepository;
        this.userRepository = userRepository;
    }

    public Employee createEmployee(Long userId, String employeeNo, String profession, String title) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found with id " + userId));

        if (employeeRepository.existsByEmployeeNo(employeeNo)) {
            throw new IllegalArgumentException("Employee number already exists: " + employeeNo);
        }

        Employee employee = new Employee(null, user, employeeNo, profession, title);
        return employeeRepository.save(employee);
    }

    public Employee getEmployee(Long employeeId) {
        return employeeRepository.findById(employeeId)
                .orElseThrow(() -> new IllegalArgumentException("Employee not found with id " + employeeId));
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee updateEmployee(Long employeeId, EmployeeDTO dto) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new NotFoundException("Employee not found with id " + employeeId));

        employee.setEmployeeNo(dto.getEmployeeNo());
        employee.setProfession(dto.getProfession());
        employee.setTitle(dto.getTitle());

        if (dto.getUserId() != null) {
            User user = userRepository.findById(dto.getUserId())
                    .orElseThrow(() -> new NotFoundException("User not found with id " + dto.getUserId()));
            employee.setUser(user);
        }

        return employeeRepository.save(employee);
    }


    public void deleteEmployee(Long employeeId) {
        employeeRepository.deleteById(employeeId);
    }
}

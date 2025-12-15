package fr.epita.timeoutAirlineBookingSystem.web.controller;

import fr.epita.timeoutAirlineBookingSystem.domain.entity.Employee;
import fr.epita.timeoutAirlineBookingSystem.web.dto.EmployeeDTO;
import fr.epita.timeoutAirlineBookingSystem.services.EmployeeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
    private final EmployeeService employeeService;
    public EmployeeController(EmployeeService employeeService) { this.employeeService = employeeService; }

    @PostMapping
    public Employee create(@RequestBody EmployeeDTO dto) {
        return employeeService.createEmployee(dto.getUserId(), dto.getEmployeeNo(),
                dto.getProfession(), dto.getTitle());
    }

    @GetMapping("/{id}")
    public Employee get(@PathVariable Long id) {
        return employeeService.getEmployee(id);
    }

    @GetMapping
    public List<Employee> getAll() {
        return employeeService.getAllEmployees();
    }

    @PutMapping("/{id}")
    public Employee update(@PathVariable Long id, @RequestBody EmployeeDTO dto) {
        return employeeService.updateEmployee(id, dto);
    }


    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        employeeService.deleteEmployee(id);
    }
}

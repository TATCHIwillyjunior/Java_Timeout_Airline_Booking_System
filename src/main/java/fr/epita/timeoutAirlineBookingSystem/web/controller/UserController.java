package fr.epita.timeoutAirlineBookingSystem.web.controller;

import fr.epita.timeoutAirlineBookingSystem.domain.entity.User;
import fr.epita.timeoutAirlineBookingSystem.web.dto.UserDTO;
import fr.epita.timeoutAirlineBookingSystem.services.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;
    public UserController(UserService userService) { this.userService = userService; }

    @PostMapping
    public User create(@RequestBody UserDTO dto) {
        System.out.println("Received user: " + dto.getEmail());

        return userService.createUser(dto.getFirstname(), dto.getLastname(),
                dto.getEmail(), dto.getAddress(), dto.getPhoneNo(), dto.getBirthDate());
    }

    @GetMapping("/{id}")
    public User get(@PathVariable Long id) {
        return userService.getUser(id);
    }

    @GetMapping
    public List<User> getAll() {
        System.out.println("Fetching all users...");
        return userService.getAllUsers();
    }
    @PutMapping("/{id}")
    public User update(@PathVariable Long id, @RequestBody UserDTO dto) {
        return userService.updateUser(id, dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        userService.deleteUser(id);
    }
}

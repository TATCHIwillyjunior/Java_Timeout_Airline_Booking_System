package fr.epita.timeoutAirlineBookingSystem.services;

import fr.epita.timeoutAirlineBookingSystem.domain.entity.User;
import fr.epita.timeoutAirlineBookingSystem.domain.repo.UserRepo;
import fr.epita.timeoutAirlineBookingSystem.web.dto.UserDTO;
import fr.epita.timeoutAirlineBookingSystem.web.exception.NotFoundException;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class UserService {

    private final UserRepo userRepository;
    public UserService(UserRepo userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(String firstname, String lastname, String email,
                           String address, String phoneNo, LocalDate birthDate) {
        if (userRepository.existsByEmail(email)) {
            throw new IllegalArgumentException("Email already exists: " + email);   // check to add under exception
        }
        User user = new User(null, firstname, lastname, address, email, phoneNo, birthDate);
        return userRepository.save(user);
    }

    public User getUser(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found with id " + userId));
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User updateUser(Long userId, UserDTO dto) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new NotFoundException("User not found with id " + userId));

        user.setFirstname(dto.getFirstname());
        user.setLastname(dto.getLastname());
        user.setEmail(dto.getEmail());
        user.setAddress(dto.getAddress());
        user.setPhoneNo(dto.getPhoneNo());
        user.setBirthDate(dto.getBirthDate());

        return userRepository.save(user);
    }


    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }
}

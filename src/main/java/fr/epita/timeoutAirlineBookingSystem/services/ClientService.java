package fr.epita.timeoutAirlineBookingSystem.services;

import fr.epita.timeoutAirlineBookingSystem.domain.entity.Client;
import fr.epita.timeoutAirlineBookingSystem.domain.entity.User;
import fr.epita.timeoutAirlineBookingSystem.domain.repo.ClientRepo;
import fr.epita.timeoutAirlineBookingSystem.domain.repo.UserRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {

    private final ClientRepo clientRepository;
    private final UserRepo userRepository;

    public ClientService(ClientRepo clientRepository, UserRepo userRepository) {
        this.clientRepository = clientRepository;
        this.userRepository = userRepository;
    }

    public Client createClient(Long userId, String passportNo) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found with id " + userId));

        if (clientRepository.existsByPassportNo(passportNo)) {
            throw new IllegalArgumentException("Passport number already exists: " + passportNo);
        }

        Client client = new Client(null, user, passportNo);
        return clientRepository.save(client);
    }

    public Client getClient(Long clientId) {
        return clientRepository.findById(clientId)
                .orElseThrow(() -> new IllegalArgumentException("Client not found with id " + clientId));
    }

    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    public void deleteClient(Long clientId) {
        clientRepository.deleteById(clientId);
    }
}

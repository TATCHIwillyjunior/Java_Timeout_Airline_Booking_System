package fr.epita.timeoutAirlineBookingSystem.web.controller;

import fr.epita.timeoutAirlineBookingSystem.domain.entity.Client;
import fr.epita.timeoutAirlineBookingSystem.web.dto.ClientDTO;
import fr.epita.timeoutAirlineBookingSystem.services.ClientService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/clients")
public class ClientController {
    private final ClientService clientService;
    public ClientController(ClientService clientService) { this.clientService = clientService; }

    @PostMapping
    public Client create(@RequestBody ClientDTO dto) {
        return clientService.createClient(dto.getUserId(), dto.getPassportNo());
    }

    @GetMapping("/{id}")
    public Client get(@PathVariable Long id) {
        return clientService.getClient(id);
    }

    @GetMapping
    public List<Client> getAll() {
        return clientService.getAllClients();
    }

    @PutMapping("/{id}")
    public Client update(@PathVariable Long id, @RequestBody ClientDTO dto) {
        return clientService.updateClient(id, dto);
    }


    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        clientService.deleteClient(id);
    }
}

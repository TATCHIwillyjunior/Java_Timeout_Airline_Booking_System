package fr.epita.timeoutAirlineBookingSystem.web.controller;

import fr.epita.timeoutAirlineBookingSystem.domain.entity.MilesReward;
import fr.epita.timeoutAirlineBookingSystem.web.dto.MilesRewardDTO;
import fr.epita.timeoutAirlineBookingSystem.services.MilesRewardService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/miles-rewards")
public class MilesRewardController {

    private final MilesRewardService milesRewardService;

    public MilesRewardController(MilesRewardService milesRewardService) {
        this.milesRewardService = milesRewardService;
    }

    // Get a single reward by ID
    @GetMapping("/{id}")
    public MilesReward get(@PathVariable Long id) {
        return milesRewardService.getMilesReward(id);
    }

    // Get all rewards
    @GetMapping
    public List<MilesReward> getAll() {
        System.out.println("Fetching all rewards...");
        return milesRewardService.getAllMilesRewards();
    }

    // Get rewards for a specific client
    @GetMapping("/client/{clientId}")
    public List<MilesReward> getByClient(@PathVariable Long clientId) {
        System.out.println("Fetching rewards for client: " + clientId);
        return milesRewardService.listRewardsForClient(clientId);
    }

    // Update reward (e.g. discount code if needed)
    @PutMapping("/{id}")
    public MilesReward update(@PathVariable Long id, @RequestBody MilesRewardDTO dto) {
        return milesRewardService.updateReward(id, dto.getDateOffer(), dto.getDiscountCode());
    }

    // Delete reward
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        milesRewardService.deleteMilesReward(id);
    }
}

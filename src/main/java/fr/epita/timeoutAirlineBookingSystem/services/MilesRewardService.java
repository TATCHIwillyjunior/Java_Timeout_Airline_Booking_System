package fr.epita.timeoutAirlineBookingSystem.services;

import fr.epita.timeoutAirlineBookingSystem.domain.entity.MilesReward;
import fr.epita.timeoutAirlineBookingSystem.domain.repo.MilesRewardRepo;
import fr.epita.timeoutAirlineBookingSystem.web.exception.NotFoundException;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Service
public class MilesRewardService {
    private final MilesRewardRepo milesRewardRepository;

    public MilesRewardService(MilesRewardRepo milesRewardRepository) {
        this.milesRewardRepository = milesRewardRepository;
    }

    // Create / assign a new reward entry when a booking is made
    public MilesReward assignReward(MilesReward reward) {
        return milesRewardRepository.save(reward);
    }

    // Fetch a single reward by ID
    public MilesReward getMilesReward(Long id) {
        return milesRewardRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Miles reward not found with id " + id));
    }

    // Fetch all rewards
    public List<MilesReward> getAllMilesRewards() {
        return milesRewardRepository.findAll();
    }

    // List rewards for a specific client
    public List<MilesReward> listRewardsForClient(Long clientId) {
        return milesRewardRepository.findAll().stream()
                .filter(r -> r.getClient().getClientId().equals(clientId))
                .toList();
    }

    // Update reward details (date, discount code)
    public MilesReward updateReward(Long id, MilesReward updated) {
        MilesReward reward = getMilesReward(id);
        reward.setDateOffer(updated.getDateOffer());
        reward.setDiscountCode(updated.getDiscountCode());
        return milesRewardRepository.save(reward);
    }

    // Delete a reward
    public void deleteMilesReward(Long id) {
        milesRewardRepository.deleteById(id);
    }

    // Business logic: check if client qualifies for discount
    public void checkAndGenerateDiscount(Long clientId) {
        int currentYear = LocalDate.now().getYear();

        long flightsThisYear = milesRewardRepository.findAll().stream()
                .filter(r -> r.getClient().getClientId().equals(clientId)
                        && r.getDateOffer().getYear() == currentYear)
                .count();

        if (flightsThisYear == 3) {
            // Generate random discount code
            String discountCode = UUID.randomUUID().toString().substring(0, 8).toUpperCase();

            // Update the latest reward with discount
            MilesReward reward = milesRewardRepository.findAll().stream()
                    .filter(r -> r.getClient().getClientId().equals(clientId)
                            && r.getDateOffer().getYear() == currentYear)
                    .reduce((first, second) -> second) // get last reward
                    .orElseThrow(() -> new NotFoundException("No reward found"));

            reward.setDiscountCode(discountCode);
            milesRewardRepository.save(reward);

            System.out.println("Discount code generated for client " + clientId + ": " + discountCode);
        }
    }
}

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
    public MilesReward updateReward(Long id, LocalDate dateOffer, String discountCode) {
        MilesReward reward = getMilesReward(id);
        if (dateOffer != null) {
            reward.setDateOffer(dateOffer);
        }
        if (discountCode != null) {
            reward.setDiscountCode(discountCode);
        }
        return milesRewardRepository.save(reward);
    }


    // Delete a reward
    public void deleteMilesReward(Long id) {
        MilesReward reward = getMilesReward(id); // throws NotFoundException if missing
        milesRewardRepository.delete(reward);
    }


    // Business logic: check if client qualifies for discount
    public void checkAndGenerateDiscount(Long clientId) {
        int currentYear = LocalDate.now().getYear();

        List<MilesReward> rewardsThisYear = milesRewardRepository.findAll().stream()
                .filter(r -> r.getClient().getClientId().equals(clientId)
                        && r.getDateOffer().getYear() == currentYear)
                .toList();

        if (rewardsThisYear.size() == 3) {
            String discountCode = UUID.randomUUID().toString().substring(0, 8).toUpperCase();

            MilesReward latestReward = rewardsThisYear.get(rewardsThisYear.size() - 1);
            latestReward.setDiscountCode(discountCode);
            milesRewardRepository.save(latestReward);

            System.out.println("Discount code generated for client " + clientId + ": " + discountCode);
        }
    }

}

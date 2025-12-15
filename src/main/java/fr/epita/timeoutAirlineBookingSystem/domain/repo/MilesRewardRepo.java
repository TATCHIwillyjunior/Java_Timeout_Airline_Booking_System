package fr.epita.timeoutAirlineBookingSystem.domain.repo;

import fr.epita.timeoutAirlineBookingSystem.domain.entity.MilesReward;
import org.springframework.data.jpa.repository.JpaRepository;


public interface MilesRewardRepo extends JpaRepository<MilesReward, Long> {
    boolean existsByClient_ClientIdAndFlight_FlightsId(Long clientId, Long flightId);
}

package fr.epita.timeoutAirlineBookingSystem.domain.repo;

import fr.epita.timeoutAirlineBookingSystem.domain.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepo extends JpaRepository<Booking, Long> {
    boolean existsByFlight_FlightsIdAndClient_ClientIdAndTypeOfSeat(Long flightsId, Long clientId, String typeOfSeat);
}

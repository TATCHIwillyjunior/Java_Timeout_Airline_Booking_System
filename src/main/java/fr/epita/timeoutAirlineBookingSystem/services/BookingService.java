package fr.epita.timeoutAirlineBookingSystem.services;

import fr.epita.timeoutAirlineBookingSystem.domain.entity.Booking;
import fr.epita.timeoutAirlineBookingSystem.domain.entity.MilesReward;
import fr.epita.timeoutAirlineBookingSystem.domain.repo.BookingRepo;
import fr.epita.timeoutAirlineBookingSystem.web.exception.NotFoundException;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class BookingService {
    private final BookingRepo bookingRepository;
    private final MilesRewardService milesRewardService;


    public BookingService(BookingRepo bookingRepository, MilesRewardService milesRewardService) {
        this.bookingRepository = bookingRepository;
        this.milesRewardService = milesRewardService;
    }

    public Booking bookSeat(Booking booking) {
        boolean exists = bookingRepository
                .existsByFlight_FlightsIdAndClient_ClientIdAndTypeOfSeat(
                        booking.getFlight().getFlightsId(),
                        booking.getClient().getClientId(),
                        booking.getTypeOfSeat()
                );

        if (exists) {
            throw new IllegalArgumentException("Seat already booked for this client");
        }

        Booking savedBooking = bookingRepository.save(booking);

        // Record in MilesReward table
        MilesReward reward = new MilesReward(
                null,
                booking.getClient(),
                booking.getFlight(),
                LocalDate.now(),
                null // discount code initially null
        );
        milesRewardService.assignReward(reward);

        // Check if client qualifies for discount
        milesRewardService.checkAndGenerateDiscount(booking.getClient().getClientId());

        return savedBooking;
    }



    public Booking getBooking(Long id) {
        return bookingRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Booking not found with id " + id));
    }

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public void cancelBooking(Long id) {
        bookingRepository.deleteById(id);
    }

    public List<Booking> listBookingsByClient(Long clientId) {
        return bookingRepository.findAll().stream()
                .filter(b -> b.getClient().getClientId().equals(clientId))
                .toList();
    }

    public Booking updateBooking(Long id, Booking updated) {
        Booking booking = getBooking(id);
        booking.setFlight(updated.getFlight());
        booking.setClient(updated.getClient());
        booking.setTypeOfSeat(updated.getTypeOfSeat());
        booking.setBookedAt(updated.getBookedAt());
        return bookingRepository.save(booking);
    }
}

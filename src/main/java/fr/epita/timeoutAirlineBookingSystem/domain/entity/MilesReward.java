package fr.epita.timeoutAirlineBookingSystem.domain.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import java.time.LocalDate;

@Entity
@Table(name = "miles_rewards")
public class MilesReward {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Miles_Rewards_Id")
    private Long milesRewardsId;

    @ManyToOne(fetch = FetchType.EAGER)
    @Fetch(FetchMode.JOIN)
    @JoinColumn(name = "Client_Id", nullable = false)
    private Client client;

    @ManyToOne(fetch = FetchType.EAGER)
    @Fetch(FetchMode.JOIN)
    @JoinColumn(name = "Flight_Id", nullable = false)
    private Flight flight;

    @Column(name = "Date_Offer", nullable = false)
    private LocalDate dateOffer;

    @Column(name = "Discount_Code")
    private String discountCode;

    // JPA requires a no-arg constructor
    public MilesReward() {}

    // All-args constructor
    public MilesReward(Long milesRewardsId, Client client, Flight flight, LocalDate dateOffer, String discountCode) {
        this.milesRewardsId = milesRewardsId;
        this.client = client;
        this.flight = flight;
        this.dateOffer = dateOffer;
        this.discountCode = discountCode;
    }

    // Getters and setters
    public Long getMilesRewardsId() { return milesRewardsId; }
    public void setMilesRewardsId(Long milesRewardsId) { this.milesRewardsId = milesRewardsId; }

    public Client getClient() { return client; }
    public void setClient(Client client) { this.client = client; }

    public Flight getFlight() { return flight; }
    public void setFlight(Flight flight) { this.flight = flight; }

    public LocalDate getDateOffer() { return dateOffer; }
    public void setDateOffer(LocalDate dateOffer) { this.dateOffer = dateOffer; }

    public String getDiscountCode() { return discountCode; }
    public void setDiscountCode(String discountCode) { this.discountCode = discountCode; }
}

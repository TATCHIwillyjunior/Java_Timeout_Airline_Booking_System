package fr.epita.timeoutAirlineBookingSystem.web.dto;

import java.time.LocalDate;

public class MilesRewardDTO {
    private Long milesRewardsId;
    private Long clientId;
    private Long flightId;
    private LocalDate dateOffer;
    private String discountCode;

    public MilesRewardDTO() {}

    public MilesRewardDTO(Long milesRewardsId, Long clientId, Long flightId, LocalDate dateOffer, String discountCode) {
        this.milesRewardsId = milesRewardsId;
        this.clientId = clientId;
        this.flightId = flightId;
        this.dateOffer = dateOffer;
        this.discountCode = discountCode;
    }

    // Getters and setters

    public Long getMilesRewardsId() {
        return milesRewardsId;
    }

    public void setMilesRewardsId(Long milesRewardsId) {
        this.milesRewardsId = milesRewardsId;
    }

    public Long getClientId() {
        return clientId;
    }

    public void setClientId(Long clientId) {
        this.clientId = clientId;
    }

    public Long getFlightId() {
        return flightId;
    }

    public void setFlightId(Long flightId) {
        this.flightId = flightId;
    }

    public LocalDate getDateOffer() {
        return dateOffer;
    }

    public void setDateOffer(LocalDate dateOffer) {
        this.dateOffer = dateOffer;
    }

    public String getDiscountCode() {
        return discountCode;
    }

    public void setDiscountCode(String discountCode) {
        this.discountCode = discountCode;
    }
}
